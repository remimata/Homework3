<template>
  <section class="container">
    <button type="button" v-on:click="Reset_like()" class="reset_button">Reset Likes !</button>
    <div v-for="post in postsList" :key="post.id">
      <Post
        v-bind:id="post.id"
        v-bind:photo_profile="post.author.photo_profile"
        v-bind:create_date ="post.create_date"
        v-bind:image="post.image"
        v-bind:description="post.description"
        v-bind:likes="post.likes"
      >
      </Post>
      
    </div>
  </section>
</template>

<script>
import Post from "../components/Post.vue";
export default {
  name: "Main",
  components: {
    Post,
  },
  computed: {
    postsList() {
      return this.$store.state.posts;
    },
  },
  methods: {
    Reset_like: function(){
      this.$store.commit("ResetLikes");
    }
  }
};
</script>

<style lang="scss" scoped>



.container {
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  width: 80%;
  background-color: white;
  padding-top: 80px;
  padding-bottom: 20px;
  .reset_button{
    color:white;
    margin-left:5%;
    width:150px;
    height:50px;
    background-color: #d43131;
    border-radius: 10px;
    border: solid rgba(245, 245, 245, 0.932);


  }
}

</style>
