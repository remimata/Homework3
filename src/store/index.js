import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    posts: [
      {
        id: "0",
        author: {
          name: "Hot",
          surname: "Dog",
          photo_profile: "../assets/profile1.jpg",
          adress_mail: "hot.dog@example.ee",
        },
        create_date: "29nd september 2021",
        description: "WANTED : This young child is looking for his parents.",
        image: "../assets/yoda.jpeg",
        likes: 3,
      },
      {
        id: "1",
        author: {
          name: "Rick",
          surname: "Morty",
          photo_profile: "../assets/profile2.jpg",
          adress_mail: "Rick.Morty@example.ee",
        },
        create_date: "28nd september 2021",
        description:
          "How many chickens would it take to be able to kill a lion?",
        image: "",
        likes: 11,
      },
      {
        id: "2",
        author: {
          name: "Homer",
          surname: "Simpson",
          photo_profile: "../assets/profile3.jpg",
          adress_mail: "homer.simpson@example.ee",
        },
        create_date: "27nd september 2021",
        description: "Students are getting better at CSS.",
        image: "../assets/breakingnews.jpg",
        likes: 10,
      },
      {
        id: "3",
        author: {
          name: "MasterMind",
          surname: "SquidGame",
          photo_profile: "../assets/profile4.jpg",
          adress_mail: "mastermind@squidgame.ee",
        },
        create_date: "26nd september 2021",
        description: "Welcome in my island !",
        image: "../assets/island.jpg",
        likes: 9,
      },
      {
        id: "4",
        author: {
          name: "Triangle",
          surname: "SquidGame",
          photo_profile: "../assets/profile5.jpg",
          adress_mail: "triangle@squidgame.ee",
        },
        create_date: "25nd september 2021",
        description: "Nice island !",
        image: "",
        likes: 77,
      },
      {
        id: "5",
        author: {
          name: "Homer",
          surname: "Simpson",
          photo_profile: "../assets/profile3.jpg",
          adress_mail: "homer.simpson@example.ee",
        },
        create_date: "24nd september 2021",
        description: "Let's cook !",
        image: "../assets/cooking.jpg",
        likes: 7,
      },
      {
        id: "6",
        author: {
          name: "Naps",
          surname: "Marseille",
          photo_profile: "../assets/profile6.jpg",
          adress_mail: "naps@example.ee",
        },
        create_date: "23nd september 2021",
        description: "C'est Marseille bébé !",
        image: "",
        likes: 89,
      },
      {
        id: "7",
        author: {
          name: "Rick",
          surname: "Morty",
          photo_profile: "../assets/profile2.jpg",
          adress_mail: "Rick.Morty@example.ee",
        },
        create_date: "22nd september 2021",
        description: "Look my setup",
        image: "../assets/setup.jpg",
        likes: 5,
      },
      {
        id: "8",
        author: {
          name: "Naps",
          surname: "Marseille",
          photo_profile: "../assets/profile6.jpg",
          adress_mail: "naps@example.ee",
        },
        create_date: "18nd september 2021",
        description: "My boat is better",
        image: "../assets/boat.jpg",
        likes: 8,
      },
      {
        id: "9",
        author: {
          name: "Triangle",
          surname: "SquidGame",
          photo_profile: "../assets/profile5.jpg",
          adress_mail: "triangle@squidgame.ee",
        },
        create_date: "17nd september 2021",
        description: "Happy Haloween !",
        image: "../assets/haloween.jpg",
        likes: 40,
      }
    ],
  },
  getters: {
    getPosts: state => {
      var postsList = state.posts.map(post => {
        return { 
          id : post.id,
          profile_image : post.author.photo_profile,
          create_date : post.create_date,
          description : post.description,
          image : post.image,
          likes : post.likes
        }
      });
      return postsList
    },

  },
  mutations: {
    IncreaseLike(state,id){
      state.posts[id].likes += 1
    },
  },
  actions: {},
  modules: {},
});
