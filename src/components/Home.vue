<template>
  <div class="home">
    <div class="search">
      <form v-on:submit.prevent="search">
        <input type="text" v-model="query">
        <button type="submit">SEARCH</button>
      </form>
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
    computed: {},
    methods: {
      search() {
        this.$store.dispatch('getSongs', this.query)
      }
    }
  }

</script>

<style>


</style>
