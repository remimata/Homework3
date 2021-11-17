import Vue from "vue";
import Vuex from "vuex";
import $ from "jquery";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    posts:[],
  },
  getters: {
    getPosts: (state) => {
      var postsList = state.posts.map((post) => {
        return {
          id: post.id,
          profile_image: post.author.photo_profile,
          create_date: post.create_date,
          description: post.description,
          image: post.image,
          likes: post.likes,
        };
      });
      return postsList;
    },
  },
  mutations: {
    IncreaseLike(state, id) {
      state.posts[id].likes += 1;
    },
    SetPosts (state){
      $.get({
        url: "https://api.jsonbin.io/b/616bf937aa02be1d445a969d/9",
        success: function (response) {
          state.posts = response;
        },
        error: function (e) {
          alert(`error retrieving posts: ${JSON.stringify(e)}`);
        },
      });
    },
  },
  actions: {},
  modules: {},
});

