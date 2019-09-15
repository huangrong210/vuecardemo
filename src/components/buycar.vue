<template>
	<div>
		<div v-if="list.length" class="haveCloth">
			<div class="cloth-thead">
				<el-col :span="6">商品信息</el-col>
				<el-col :span="3">尺码/颜色</el-col>
				<el-col :span="3">吊牌价</el-col>
				<el-col :span="3">数量</el-col>
				<el-col :span="3">折扣</el-col>
				<el-col :span="3">总金额</el-col>
				<el-col :span="3">操作</el-col>
			</div>
			<div class="hasCloth">
				<ul class="clothBox">
					<li style="display:block; height: 200px; text-align: center; vertical-align: middle;" class="cloth-tr" v-for="(item,id) in list" :key="id">
						<el-col :span="6">
							<el-checkbox style="display:inline-block; margin-top: -108px; margin-right: 25px; text-align: center; vertical-align: middle;" v-model="selectArrCloth" :label="item.id" @change="item.checked=!item.checked">{{item.name}}</el-checkbox>
							<!-- <img src="" alt=""> -->
							<img src="../assets/images/carClothDemo.png" alt="" width="100" height="120">
						</el-col>
						<!-- <el-col :span="6">{{item.name}}</el-col> -->
						<el-col :span="3" style="display:inline-block;margin-top: 48px;text-align: center; vertical-align: middle;">{{item.size}}/{{item.color}}</el-col>
						<el-col :span="3" style="display:inline-block;margin-top: 48px;text-align: center; vertical-align: middle;">{{item.price}}</el-col>
						<el-col :span="3" class="ocloth-count" style="display:inline-block;margin-top: 48px;text-align: center; vertical-align: middle;">
							<span @click="cutCount(item)">-</span>
							{{item.count}}
							<span @click="addCount(item)">+</span>
						</el-col>
						<el-col :span="3" style="display:inline-block;margin-top: 48px;text-align: center; vertical-align: middle;">{{item.active}}</el-col>
						<el-col :span="3" style="display:inline-block;margin-top: 48px;text-align: center; vertical-align: middle;">{{item.price*item.count*item.active}}</el-col>
						<el-col :span="3" style="display:inline-block;margin-top: 38px;text-align: center; vertical-align: middle;">
							<img @click="delCloth(item)" src="../assets/images/delIcon.png" class="delCloth" title="删除">
						</el-col>
					</li>
				</ul>
			</div>
		</div>
		<div v-else>
			购物车没有商品，快去逛逛吧~~~
		</div>
		<div class="totalCount" style="background: rgb(84, 92, 100); display: flex; justify-content:space-around; flex-direction: row; height: 100px; align-items: center; color: #fff;">
			<div class="checkAll">
				<el-checkbox v-model="allCheck" @change="getAllcheked"></el-checkbox>
				全选
			</div>
			<div class="totalPrice">合计 {{totalPrice}} 元</div>
			<div class="clothCount">已选商品 {{totalCount}} 件</div>
		</div>
	</div>
</template>

<script>
	import bus from '@/assets/bus.js'
	import {mapMutations,mapActions} from 'vuex'
export default {
  data(){
		return {
			allCheck:false,
			selectArrCloth:[],
			totalCount:0,
			totalPrice:0,
			list:[],
		}
	},
	created(){
		this.getList();
		// this.getTotalCount();
	},
	methods:{
		...mapMutations(['changebuycarCount']),
		...mapActions(['asyncchangebuycarCount']),
		getAllcheked(val){
			let selectArrCloth=[];
			if(val){
				this.list.forEach(item=>{
					item.checked=true;
					selectArrCloth.push(item.id)
				});
				this.selectArrCloth=selectArrCloth;
			}else{
				this.list.forEach(item=>{
					item.checked=false;
				});
				this.selectArrCloth=[];
			}
			this.getTotalCount();
		},
		getTotalCount(){
			let totalPrice=0;
			let totalCount=0;
			this.list.forEach(item=>{
				if(item.checked){
					totalPrice=totalPrice+(parseFloat(item.price).toFixed(2)*parseFloat(item.active)*item.count)
					totalCount=totalCount+parseInt(item.count)
				}
			})
			this.totalCount=totalCount;
			this.totalPrice=totalPrice;
		},
		getList(){
			// ajax
			let arr=[
				{
					name:'款式1',
					count:2,
					size:'S',
					color:'红色',
					price:100,
					active:0.8,
					id:1
				},{
					name:'款式2',
					count:2,
					size:'S',
					color:'红色',
					price:200,
					active:0.8,
					id:2
				},{
					name:'款式3',
					count:2,
					size:'S',
					color:'红色',
					price:102,
					active:0.8,
					id:3
				},{
					name:'款式4',
					count:2,
					size:'S',
					color:'红色',
					price:120,
					active:0.8,
					id:4
				}
			];
			arr.forEach(item=>{
				item.checked=false;
			});
			this.list=arr;
		},
		cutCount(item){
			if(item.count==0) return;
			item.count--;
			this.getTotalCount();
		},
		addCount(item){
			item.count++;
			this.getTotalCount();
		},
		delCloth(item){
			let index=this.list.findIndex(cloth=>{
				return cloth.id==item.id
			});
			// console.log(index)
			this.list.splice(index,1);
			this.getTotalCount();
		}
	},
	watch:{
		selectArrCloth(){
			this.getTotalCount();
			// this.getTotalPrice();
			if(this.selectArrCloth.length==this.list.length){
				this.allCheck=true;
			}else{
				this.allCheck=false;
			}
		},
		list:{
			handler:function(){
				let count=0;
				this.list.forEach(item=>{
					count+=parseInt(item.count);
				})
				// bus.$emit('buycarCountChange',count);
				// changebuycarCount
				
				// this.$store.commit('changebuycarCount',count);
				// this.changebuycarCount(count)
				
				// this.$store.dispatch('asyncchangebuycarCount',count)
				this.asyncchangebuycarCount(count)
			},
			deep:true  //深度监听 遍历
		}
	}
}
</script>

<style scoped lang="less">
	/* .haveCloth{
		position: relative;
		padding-top: 36px;
	}
	.noCloth{
		position: fixed;
		top: 50%;
		left: 50%;
		margin-top: -50px;
		margin-left: -200px;
	}
	.noCloth img{
		width: 100px;
	}
	.coClothMsg a{
		color: #c9a978;
		margin: 0 20px;
	}
	.clothBox{
		width: 100%;
		display: table;
		border-spacing: 0px 10px;
	}
	.cloth-thead,.cloth-tr{
		
	}
	.cloth-checkBox{
		width: 20px;
		height: 20px;
	}
	.totalAllCheck>img.totalAllCheckD{
		display: block;
	}
	.totalPrice>span,.clothCount>span{
		color: #ffd36f;
		margin: 0 5px;
	}
	.ocloth-count>input{
		background: transparent;
		border: 1px solid #fff;
		margin: 0 5px;
		.totalAllCheck>.totalAllCheckD{
			display: block;
		}
		.totalPrice>span,.clothCount>span{
			color: #ffd36f;
			margin: 0 5px;
		}
		.ocloth-count>input{
			background: transparent;
			border: 1px solid #fff;
			margin: 0 5px;
			width: 40px;
			height: 25px;
			line-height: 25px;
			text-align: center;
		}
		.clothAddCut>span:nth-child(1){
			font-size: 30px;
			padding: 3px;
		}
	}
	
	.sizeColorList>div>b{
		color: #000;
		font-weight: normal;
	}
	.sizeColorList>div>span{
		color: #939393;
		padding: 3px 12px;
		border: 1px solid #939393;
		cursor: pointer;
		margin-right: 10px;
	}
	.colorSubmit{
		padding: 5px 10px;
		background: #c9a978;
		color: #fff;
		border-radius: 5px;
		cursor: pointer;
	}
	.colorCancel{
		cursor: pointer;
		color: #939393;
		margin-left: 10px;
	}
	.sizeColorListSJ{
		width: 0;
		border: 10px solid transparent;
		border-right: 10px solid #fff;
		position: absolute;
		top: 50%;
		left: -19px;
		margin-top: -5px;
	} */
</style>