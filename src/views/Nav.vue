<template>
	<div>
		<el-menu
			:default-active="NavActiveIndex"
			class="el-menu-demo"
			mode="horizontal"
			@select="handleSelect"
			background-color="#545c64"
			text-color="#fff"
			router
			active-text-color="#ffd04b">
			<el-menu-item index="/home/buycar">购物车 {{buycarCount}}</el-menu-item>
			<!-- <el-menu-item index="/home/buycar">购物车 {{this.$store.state.buycarCount}}</el-menu-item> -->
			<el-submenu index="2">
				<template slot="title">我的工作台</template>
				<el-menu-item index="/home/about">about</el-menu-item>
				<el-menu-item index="2-2">选项2</el-menu-item>
				<el-menu-item index="2-3">选项3</el-menu-item>
				<el-submenu index="2-4">
					<template slot="title">选项4</template>
					<el-menu-item index="2-4-1">选项1</el-menu-item>
					<el-menu-item index="2-4-2">选项2</el-menu-item>
					<el-menu-item index="2-4-3">选项3</el-menu-item>
				</el-submenu>
			</el-submenu>
			<el-menu-item index="3" disabled>消息中心</el-menu-item>
			<el-menu-item index="4"><a href="https://www.ele.me" target="_blank">订单管理</a></el-menu-item>
		</el-menu>
		<button @click="click">折叠Nav</button>
		<span>{{userName}}</span>
	</div>
</template>

<script>
	import bus from '@/assets/bus.js'
	import {mapState,mapGetters} from 'vuex'
export default {
	name: "nav",
	props:{
		NavActiveIndex:String
	},
	data() {
		return {
			activeIndex: '1',
			activeIndex2: '1',
			// buycarCount:0,
		}
	},
	created(){
		/* bus.$on('buycarCountChange',(num)=>{
			this.buycarCount=num;
		}) */
	},
	computed:{
		...mapState(['buycarCount']),
		...mapGetters(['userName'])
	},
	methods:{
		handleSelect(key,keyPath) {
			console.log(key, keyPath);
		},
		click(){
			this.$emit('fromNavVal',this.activeIndex2);
		}
	}
}
</script>

<style>
</style>
