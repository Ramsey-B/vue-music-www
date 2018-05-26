<template>
  <div class="home">
    <div class="search">
      <form v-on:submit.prevent="search">
        <input type="text" v-model="query">
        <button type="submit">SEARCH</button>
      </form>
    </div>
    <div class="results row">
      <div class="card col-md-3 col-xs-12 songs-box" v-for="song in songs">
        <a><h4>{{song.trackName}}</h4></a>
        <h5>{{song.artistName}}</h5>
          <a><img class="play-img" :src="song.artworkUrl100"></a>
        <h6>Price: {{song.trackPrice}}</h6>
        <audio class="audio-player" controls>
          <source :src="song.previewUrl" type="audio/mp3">
        </audio>
        <a :href="song.trackViewUrl" target="_blank" class="btn btn-outline-success mt-2">Purchase</a>
    </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Home',
    data() {
      return {
        query: ''
      }
    },
    computed: {
      songs() {
        return this.$store.state.songs
      }
    },
    methods: {
      search() {
        this.$store.dispatch('getSongs', this.query)
      }
    }
  }

</script>

<style>


</style>
