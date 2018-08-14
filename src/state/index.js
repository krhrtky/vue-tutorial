import Vue from 'Vue'
import Vuex from 'Vuex'
import {CHANGE_KEYWORD, SEARCH} from './mutationTypes'

Vue.use(Vuex)

const getGIFs = query => {
  const params = encodeURIComponent(query).replace(/%20/g, '+')
  return fetch(`http://api.giphy.com/v1/gifs/search?q=${params}&api_key=dc6zaTOxFJmzC`).then(res => res.json())
}

const index = {
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
const getters = {}
const mutations = {}

export default new Vuex.Store({
  index,
  getters,
  actions,
  mutations
})
