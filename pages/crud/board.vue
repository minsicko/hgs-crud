<template>
  <section id="board">
    <h1>BOARD</h1>
    <button class="createBtn" @click="moveToCreate()">create</button>
    <table border="1">
      <th v-for="title in titles" :key="title">{{ title }}</th>
      <tr v-for="(board, index) in feeds" :key="index">
        <td>{{ feeds[index].id }}</td>
        <td>{{ feeds[index].title }}</td>
        <td>{{ feeds[index].content }}</td>
        <td>
          <nuxt-link :to="{ name: 'crud-id', params: { id: feeds[index] } }">
            <button @click="moveToUpdate()">update</button>
          </nuxt-link>
        </td>
        <td><button @click="deleteContent(index)">delete</button></td>
        <td>{{ feeds[index].likes }}</td>
        <td>{{ feeds[index].view }}</td>
      </tr>
    </table>
  </section>
</template>

<script>
export default {
  data() {
    return {
      titles: ["no", "title", "content", "update", "delete", "likes", "view"],
      feeds: [],
    };
  },
  watch: {},
  computed: {},
  mounted() {
    this.$axios.$get("/api/feed").then((res) => {
      console.log("res : ", res.result);
      this.feeds = res.result;
    });
  },
  destroyed() {},
  methods: {
    moveToCreate() {
      this.$router.push("boardCreate");
    },
    moveToUpdate() {},
    deleteContent(index) {
      this.$axios
        .$delete(`/api/feed/${this.feeds[index].id}`)
        .then((res) => console.log(res));
      this.feeds.splice(index, 1);
    },
  },
};
</script>

<style scoped>
.createBtn {
  margin-bottom: 10px;
  width: 80px;
  height: 40px;
  font-size: 16px;
  border-radius: 20px;
}

table,
th,
td {
  border: 1px solid;
  border-collapse: collapse;
  width: 450px;
  height: 30px;
  text-align: center;
}
</style>
