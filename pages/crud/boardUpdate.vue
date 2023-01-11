<template>
  <section id="boardCreate">
    <h1>BOARD UPDATE</h1>
    <div v-for="(board, index) in feed" :key="index">
      <h4>Title</h4>
      <input class="inputText" v-bind:value="feed.title" />
      <h4>Content</h4>
      <input class="inputText" v-bind:value="feed.content" />
    </div>
    <button class="createBtn" @click="clickUpdateBtn">수정</button>
  </section>
</template>

<script>
export default {
  data() {
    return {
      // board_title: this.$store.state.list.title,
      // board_content: this.$store.state.list.content,
      feed: {},
    };
  },
  watch: {},
  computed: {},
  mounted(id) {
    console.log("ㅇㅇ", this.$route.params.id);
    this.$axios.$get("/api/feed/${post_id}").then((res) => {
      console.log(res.result);
      this.feed = res.result;
    });
  },
  destroyed() {},
  methods: {
    clickUpdateBtn() {
      console.log(this.board_title);
      console.log(this.board_content);

      this.$store.commit("update", {
        title: this.board_title,
        content: this.board_content,
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
