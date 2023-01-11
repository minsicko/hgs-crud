export const strict = false;

export const state = () => ({
  list: [],
});

export const mutations = {
  add(state, payload) {
    state.list.push({
      title: payload.title,
      content: payload.content,
    });
    console.log("ADD", state.list);
  },
  update(state, payload) {
    state.list.push({
      title: payload.title,
      content: payload.content,
    });
    console.log("UPDATE", state.list);
  },

  //   remove(state, { todo }) {
  //     state.list.splice(state.list.indexOf(todo), 1)
  //   },
  //   toggle(state, todo) {
  //     todo.done = !todo.done
  //   }
};
