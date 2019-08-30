import Vue from 'vue'
import Vuex from 'vuex'
import mockGenerator from './mock'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    dataList: []
  },
  mutations: {
    addDataList (state, arr) {
      state.dataList.push(...arr)
    }
  },
  getters: {
    getAverage: state => {
      const arr = state.dataList
      const len = arr.length
      if (len <= 0) {
        return 0
      }
      let result = 0
      let average
      arr.forEach(item => {
        result += item.data
      })
      average = result / len
      // 保留两位小数 需求不明  怎么报
      return average
    },
    getData: state => state.dataList
  },
  actions: {
    async getDataCall (context) {
      // TODO
      let result
      try {
        result = await mockGenerator()
        if (result instanceof Array) {
          context.commit('addDataList', result)
        }
      } catch (e) {
        console.log(e)
      }
    }
  }
})
