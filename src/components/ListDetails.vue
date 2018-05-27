<template>
  <div class="listDetails">
    <h2>{{activeList.title}}</h2>
    <div class="results row" v-if="activeSong">
      <div class="card col-md-4 col-xs-12 songs-box">
        <a>
          <h4>{{activeSong.trackName}}</h4>
        </a>
        <h5>{{activeSong.artistName}}</h5>
        <a>
          <img class="play-img" :src="activeSong.artworkUrl100">
        </a>
        <audio class="audio-player" controls>
          <source :src="activeSong.previewUrl" type="audio/mp3">
        </audio>
      </div>
    </div>
    <div class="row">
      <draggable v-model="songs">
        <div class="col-12 d-flex justify-content-row" :key="song" v-for="song in songs">
          <button @click="playSong(song)" v-if="song._id != activeSong._id">Play</button>
          <button @click="playSong(song)" v-if="song._id == activeSong._id">Pause</button>
          <h4>{{song.trackName}}</h4>
        </div>
      </draggable>
    </div>
  </div>
</template>

<script>
  import draggable from 'vuedraggable'

  export default {
    name: 'listDetails',
    mounted() {
      this.$store.dispatch('getPlaylist', this.$route.params.id)
      this.songs = this.$store.state.activeList.songs
    },
    components: {
      draggable
    },
    data() {
      return {
        activeSong: {},
        songs: []
      }
    },
    computed: {
      activeList() {
        return this.$store.state.activeList
      }
    },
    methods: {
      playSong(song) {
        this.activeSong = song
      }
    }
  }

  //pause other songs
  document.addEventListener('play', function (e) {
    var audios = document.getElementsByTagName('audio');
    for (var i = 0, len = audios.length; i < len; i++) {
      if (audios[i] != e.target) {
        audios[i].pause();
      }
    }
  }, true);
</script>

<style>
</style>