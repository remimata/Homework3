<template>
  <div class="home">
    <button type="button" v-on:click="Reset_like()">Reset Likes !</button>

  </div>
</template>

<script>


export default {
  name: "Home",
  methods: {
    Reset_like: function(){
      console.log("Hey");
      this.$store.commit("ResetLikes");
    }
  }

};
</script>

<style lang="scss" scoped>
.home{
  button{
    width:250px;
    height:100px;

  }
}
</style>
