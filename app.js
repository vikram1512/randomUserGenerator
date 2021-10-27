const app = Vue.createApp({
  data() {
    return {
      firstName: "Vikram",
      lastName: "Kunaparaju",
      emailAddress: "vikram547@gmail.com",
      Gender: "male",
      picture: "https://randomuser.me/api/portraits/men/10.jpg",
    };
  },

  methods: {
    async getUser() {
      const res = await fetch("https://randomuser.me/api");

      const { results } = await res.json();

      this.firstName = results[0].name.first;
      this.lastName = results[0].name.last;
      this.emailAddress = results[0].email;
      this.Gender = results[0].gender;
      this.picture = results[0].picture.large;
    },
  },
});

app.mount("#app");
