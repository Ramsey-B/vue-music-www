<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <nav class="navbar navbar-light top-header">
      <div>
        <a class="navbar-brand" @click="home">Home</a>
        <a class="navbar-brand" v-if="user._id" @click="getPosts">Playlists</a>
      </div>
      <a class="navbar-brand" @click="login" v-if="!(user._id)">Sign up/Login</a>
      <div v-if="user._id" class="d-flex flex-column">
        <a class="navbar-brand">User: {{user.name}}</a>
        <a class="navbar-brand" @click="signOut">Sign out</a>
      </div>
    </nav>
    <router-view/>
  </div>
</template>

<script>
  export default {
    name: 'App',
    computed: {
      user() {
        return this.$store.state.user
      }
  },
  methods: {
      getPosts() {
        this.$store.dispatch('getPlaylists')
        this.$router.push('playlists')
      },
      login() {
        this.$router.push('login')
      },
      signOut() {
        this.$store.dispatch('signOut')
      },
      getFavs() {
        this.$router.push('favs')
        this.$store.dispatch('getFavs')
      },
      home() {
        this.$router.push('/')
      }
  },
    }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>