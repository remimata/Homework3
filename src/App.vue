<template>
  <div id="app">
     <Header/>
     <router-view />
  </div>
</template>
<script>
import Header from "./components/Header.vue"
export default {
  components: {
    Header,
  },
  created: function () {
    this.$store.commit("SetPosts");
  }

}
</script>


<style lang="scss">

</style>
