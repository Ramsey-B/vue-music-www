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
          <div class="form-group">
            <select name="Playlists" class="form-control" id="" v-model="activeList">
              <option v-for="playlist in playlists" :value="playlist">{{playlist.title}}</option>
            </select>
            <button @click="addSong(song)">Add Song</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Home',
    mounted() {
      this.$store.dispatch('getPlaylists')
    },
    data() {
      return {
        query: '',
        newList: {
          title: ''
        },
        activeList: {}
      }
    },
    computed: {
      songs() {
        return this.$store.state.songs
      },
      playlists() {
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
      createPlaylist() {
        this.$store.dispatch('createPlaylist', this.newList)
        this.showAdd = !this.showAdd
      },
      addSong(song) {
        this.activeList.songs.push(song)
        this.$store.dispatch('addSong', this.activeList)
      }
    }
  }

</script>

<style>
</style>