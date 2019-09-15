<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-15 13:13:03
 * @LastEditTime: 2019-09-15 13:13:03
 * @LastEditors: your name
 -->
<template>
  <div id="app">
    <router-view />
  </div>
</template>
<style>
	@import url("assets/base.css");
</style>
<style lang="less">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
