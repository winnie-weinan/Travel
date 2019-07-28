import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import mutations from './mutations'

Vue.use(Vuex)

export default new Vuex.Store({
  // state: {
  //   city: defaultCity // localStorage.city || '上海'
  // },
  // mutations: {
  //   changeCity (state, city) {
  //     state.city = city
  //     try {
  //       if (localStorage.city) {
  //         defaultCity = localStorage.city
  //       }
  //     } catch (e) {}
  //   }
  // }
  state,
  mutations
  // getters: {
  //   docubleCity (state) {
  //     return state.city + ' ' + state.city
  //   }
  // }
})
