import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
		buycarCount:10,
		userinfo:{
			name:'hr226',
			age:20
		}
  },
  mutations: {
		changebuycarCount(state,num){
			state.buycarCount=num;
		}
  },
  actions: {
		asyncchangebuycarCount(content,num){
			setTimeout(()=>{
				content.commit('changebuycarCount',num)
			},1000)
		}
  },
	getters:{
		userName(state){
			return state.userinfo.name;
		}
	}
})
