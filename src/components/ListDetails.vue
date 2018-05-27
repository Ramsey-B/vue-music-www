<template>
  <div class="listDetails">
    <h2>{{activeList.title}}</h2>
    <div class="results row">
        <div class="card col-md-4 col-xs-12 songs-box" v-for="song in activeList.songs">
          <a>
            <h4>{{song.trackName}}</h4>
          </a>
          <h5>{{song.artistName}}</h5>
          <a>
            <img class="play-img" :src="song.artworkUrl100">
          </a>
          <audio class="audio-player" controls>
            <source :src="song.previewUrl" type="audio/mp3">
          </audio>
        </div>
        </div>
  </div>
</template>

<script>
  export default {
    name: 'listDetails',
    mounted() {
      this.$store.dispatch('getPlaylist', this.$route.params.id)
    },
    data() {
      return {
      }
    },
    computed: {
      activeList() {
        return this.$store.state.activeList
      }
    },
    methods: {}
  }

</script>

<style>


</style>
