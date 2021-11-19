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
* {
  font-family: "Open Sans", sans-serif;
}

html,
body {
  margin: 0;
  padding: 0;
  background-color: #1778bd;
}

</style>
