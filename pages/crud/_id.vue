<template>
  <section id="boardCreate">
    <h1>BOARD UPDATE</h1>
    <div>
      <h4>Title</h4>
      <input
        class="inputText"
        v-bind:value="param.title"
        @input="onChangeTitle($event)"
      />
      <h4>Content</h4>
      <input
        class="inputText"
        v-bind:value="param.content"
        @input="onChangeContent($event)"
      />
    </div>
    <button class="createBtn" @click="click_update_btn">수정</button>
  </section>
</template>

<script>
export default {
  data() {
    return {
      param: "",
      id: "",
      new_board_title: "",
      new_board_content: "",
      board_view: 0,
      board_likes: 0,
    };
  },
  watch: {},
  computed: {},
  mounted() {
    this.param = this.$route.params.id;
  },
  destroyed() {},
  methods: {
    onChangeTitle(event) {
      console.log(event.target.value);
      this.new_board_title = event.target.value;
    },

    onChangeContent(event) {
      console.log(event.target.value);
      this.new_board_content = event.target.value;
    },

    click_update_btn() {
      console.log(this.new_board_title);
      console.log(this.new_board_content);

      this.$axios
        .$patch(`/api/feed/${this.param.id}`, {
          id: this.param.id,
          title: this.new_board_title,
          content: this.new_board_content,
          view: this.board_view,
          likes: this.board_likes,
        })
        .then((res) => {
          console.log(res.data);
        });
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
