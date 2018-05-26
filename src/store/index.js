import vue from 'vue'
import vuex from 'vuex'
import axios from 'axios'
import router from '../router'


vue.use(vuex)
//itunes
var itunes = axios.create({
  baseURL: 'https://itunes.apple.com/search?term=',
  timeout: 3000
})

var server = axios.create({
  baseURL: 'http://localhost:3000',
  timeout: 3000
})

export default new vuex.Store({
  state: {
    user: {
      email: '',
      password: '',
      displayName: ''
    },
    songs: []
  },
  mutations: {
    setUser(state, user) {
      state.user = user
    },
    setSongs(state, songs) {
      state.songs = songs
    }
  },
  actions: {
    login({ dispatch, commit }, user) {
      server.post('/login', user)
        .then(res => {
          console.log(res)
          commit('setUser', res.data.data)
          router.push('/')
        })
        .catch(err => {
          console.error(err)
        })
    },
    register({dispatch, commit}, user) {
      server.post('/register', user)
        .then(res => {
          commit('setUser', res.data)
          router.push('/')
        })
        .catch(err => {
          console.error(err)
        })
    },
    getSongs({dispatch, commit}, payload) {
      itunes.get(''+payload)
      .then(res => {
        console.log(res)
        commit('setSongs', res.data)
      })
    }
  }
})