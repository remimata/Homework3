<template>
  <div class="post">
    <div class="post-header">
      <img v-bind:src="photo_profile" />
      <small>{{ create_date }}</small>
    </div>
    <img :src="image" class="image" />
    <p>{{ description }}</p>
    <div class="divlike">
      <input
        class="like_button"
        type="image"
        src="./likebutton.png"
        alt="like_button"
        v-on:click="IncreaseLike(id)"
      />
      <span>{{ likes }}</span>
    </div>
  </div>
</template>

<script>
export default {
    props: {
        id : Number,
        photo_profile : String,
        create_date  : String,
        image : String,
        description : String,
        likes : Number,
    },
    methods: {
    IncreaseLike: function (id) {
      this.$store.commit("IncreaseLike", id);
    },
  }
};
</script>

<style lang="scss" scoped>
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
