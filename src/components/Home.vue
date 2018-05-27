<template>
  <div class="home">
    <div class="search">
      <form v-on:submit.prevent="search">
        <input type="text" v-model="query">
        <button type="submit">SEARCH</button>
      </form>
    </div>
    <div class="results row">
      <div class="card col-md-4 col-xs-12 songs-box" v-for="song in songs">
        <a>
          <h4>{{song.trackName}}</h4>
        </a>
        <h5>{{song.artistName}}</h5>
        <a>
          <img class="play-img" :src="song.artworkUrl100">
        </a>
        <h6>Price: {{song.trackPrice}}</h6>
        <audio class="audio-player" controls>
          <source :src="song.previewUrl" type="audio/mp3">
        </audio>
        <div>
          <a :href="song.trackViewUrl" target="_blank" class="btn btn-outline-success mt-2">Purchase</a>
          <div v-if="!showAdd">
            <select name="Playlists" id="" @click="getPlaylists">
              <option v-for="playlist in playlist">{{playlist.title}}</option>
            </select>
            <button @click="toggleAdd">New Playlist</button>
          </div>
          <form v-on:submit.prevent="search" v-if="showAdd">
            <input type="text" placeholder="Playlist Title" v-model="newList.title">
            <button @click="createPlaylist">Add</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Home',
    data() {
      return {
        query: '',
        showAdd: false,
        newList: {
          title: ''
        }
      }
    },
    computed: {
      songs() {
        return this.$store.state.songs
      },
      playlist() {
        return this.$store.state.playlists
      }
    },
    methods: {
      search() {
        this.$store.dispatch('getSongs', this.query)
      },
      addToPlaylist(song) {
        this.$store.dispatch('addSong', song)
      },
      getPlaylists() {
        this.$store.dispatch('getPlaylists')
      },
      toggleAdd() {
        this.showAdd = !this.showAdd
      },
      createPlaylist() {
        this.$store.dispatch('createPlaylist', this.newList)
        this.showAdd = !this.showAdd
      }
    }
  }

</script>

<style>
</style>