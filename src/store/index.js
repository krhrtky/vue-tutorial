import Vue from 'vue'
import Vuex from 'vuex'
import {CHANGE_KEYWORD, SEARCH} from './mutationTypes'

Vue.use(Vuex)

const getGIFs = query => {
  const params = encodeURIComponent(query).replace(/%20/g, '+')
  return fetch(`http://api.giphy.com/v1/gifs/search?q=${params}&api_key=dc6zaTOxFJmzC`).then(res => res.json())
}

const state = {
  keyword: '',
  gifList: []
}

const actions = {
  [CHANGE_KEYWORD] ({ commit }, keyword) {
    commit(CHANGE_KEYWORD, keyword)
  },

  [SEARCH] ({ commit, state }) {
    getGIFs(state.keyword)
      .then(data => {
        commit(SEARCH, data)
      })
  }
}
const getters = {
  gifList: state => state.gifList
}

const mutations = {
  [CHANGE_KEYWORD] (state, keyword) {
    state.keyword = keyword
  },
  [SEARCH] (state, gifList) {
    state.gifList = gifList
  }
}

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})
