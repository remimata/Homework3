<template>
  <div class="component">
    <div id="nav">
      <img src="../assets/postit_image.png" alt="" class="logo" />
      <div class="search-container">
        <input type="text" /><button>Search</button>
      </div>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/Contact">Contact Us</router-link>
      <input
        type="image"
        id="logo_profile"
        name="user"
        src="./profil.png"
        alt="User Picture"
        width="32"
        height="32"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style lang="scss" scoped>
.component {
  position: sticky;
  top: 0;

  width: 100%;
  background-color: rgba(0, 0, 0, 0.719);
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding-top: 10px;
  padding-bottom: 10px;
  display: flex;
  align-items: center;
  .search-container {
    margin-right: 20%;
    input {
      background-color: rgba(255, 255, 255, 0.418);
      border-radius: 10px;
      width: 250px;
    }
    button {
      color: white;
      background-color: rgba(255, 255, 255, 0.418);
      border-radius: 10px;
    }
  }

  a {
    font-weight: bold;
    color: #ffffff;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
  .logo {
    margin-left:10px;
    height: 40px;
  }
  #logo_profile {
    margin-left: 35%;
  }
}
</style>
