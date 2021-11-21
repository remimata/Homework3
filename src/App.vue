<template>
  <div id="app">
     <Header/>
     <router-view />
     <Footer/>
  </div>
</template>
<script>
import Header from "./components/Header.vue"
import Footer from "./components/Footer.vue"
export default {
  components: {
    Header,
    Footer,
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
