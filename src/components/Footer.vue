<template>
  <div class="component">
    <div id="nav">|
      <router-link to="/Contact">Contact Us</router-link>
    </div>
    <div id="info">
        Web Application Development
    </div>
    
  </div>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style lang="scss" scoped>
.component{
    bottom:0;
    display:flex;
    justify-content:center;
    width:100%;
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
  padding: 30px;

  a {
    font-weight: bold;
    color: #ffffff;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
#info {
     padding: 30px;
    color: #ffffff;
    font-style: italic;
}
</style>