<template>
  <section class="container">
    <div class="post" v-for="post in postsList" :key="post.id">
      <div class="post-header">
        <img v-bind:src="post.author.photo_profile" />
        <small>{{ post.create_date }}</small>
      </div>
      <img :src="post.image" class="image" />
      <p>{{ post.description }}</p>
      <div class="divlike">
        <input
          class="like_button"
          type="image"
          v-bind:src="image_like"
          alt="like_button"
          v-on:click="IncreaseLike(post.id)"
        />
        <span>{{ post.likes }}</span>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "posts",
  data: function () {
    return {
      image_like: require("@/../src/assets/likebutton.png"),
    };
  },
  computed: {
    postsList() {
      return this.$store.state.posts;
    },
  },
  methods: {
    IncreaseLike: function (id) {
      this.$store.commit("IncreaseLike",id);
    },
  },
};
</script>

<style>
* {
  font-family: "Open Sans", sans-serif;
}

html,
body {
  margin: 0;
  padding: 0;
  background-color: #1778bd;
}

/* index.html */

.container {
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  width: 80%;
  background-color: white;
  padding-top: 80px;
  padding-bottom: 20px;
}
.post {
  display: flex;
  flex-direction: column;
  width: 60%;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em,
    rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em,
    rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset;
  margin: 0 auto;
  padding-top: 10px;
  padding-bottom: 20px;
  margin-bottom: 20px;
}
.post-header {
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
}
.post-header img {
  width: 50px;
  height: 50px;
  object-fit: cover;
  border-radius: 50%;
  border: solid 1px grey;
  margin-left: 20px;
}
.post-profile {
  margin-left: 20px;
  margin-bottom: 10px;
  width: 40px;
  height: 40px;
  border-radius: 20px;
}
small {
  margin-top: 5px;
  margin-right: 20px;
  color: #999a9b;
}
.image {
  margin: 0 auto;
  width: 60%;
  object-fit: cover;
}
img + p {
  font-weight: bold;
  padding-left: 20px;
  text-align: center;
}
.like_button {
  margin-left: 20px;
  width: 50px;
  height: 50px;
  border-radius: 25px;
}
.like_button:hover {
  box-shadow: rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em,
    rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em,
    rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset;
}
.onlytext-post {
  font-weight: bold;
  padding-left: 20px;
}

.divlike {
  display: flex;
  align-items: center;
  justify-content: left;
}
.divlike span {
  margin-left: 10px;
}
</style>
