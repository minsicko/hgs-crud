<template>
  <section id="boardCreate">
    <h1>BOARD CREATE</h1>
    <div>
      <h4>Title</h4>
      <input class="inputText" v-model="board_title" />
      <h4>Content</h4>
      <input class="inputText" v-model="board_content" />
    </div>
    <button class="createBtn" @click="click_create_btn">등록</button>
  </section>
</template>

<script>
export default {
  data() {
    return {
      board_title: "",
      board_content: "",
      board_view: 0,
      board_likes: 0,
    };
  },
  watch: {},
  computed: {},
  mounted() {},
  destroyed() {},
  methods: {
    click_create_btn() {
      console.log(this);
      this.$axios
        .$post("/api/feed", {
          title: this.board_title,
          content: this.board_content,
          view: this.board_view,
          likes: this.board_likes,
        })
        .then((res) => {
          console.log(res.data);
        });

      this.$router.push("/crud/board");
    },
  },
};
</script>

<style scoped>
.inputText {
  width: 300px;
  height: 50px;
}
.createBtn {
  margin-top: 10px;
}
</style>
