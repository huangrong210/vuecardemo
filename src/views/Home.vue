<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-15 13:13:03
 * @LastEditTime: 2019-09-15 13:34:17
 * @LastEditors: Please set LastEditors
 -->
<template>
  <div class="home">
		<Nav v-if="navOpen" :NavActiveIndex="activeIndex" @fromNavVal="fromNavValfn"></Nav>
		<div v-else>折叠</div>
		<router-view/>
  </div>
</template>

<script>
	import Nav from './Nav.vue'
export default {
	name: "home",
	components:{
		Nav
	},
	data() {
		return {
			activeIndex: '/home/about',
			activeIndex2: '1',
			navOpen:true,
		}
	},
	methods:{
		fromNavValfn(val){
			this.activeIndex2=val;
			this.navOpen=false;
		}
	}
}
</script>

<style>
	
</style>