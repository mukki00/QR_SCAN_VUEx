import axios from "axios";
export default {
  namespaced: true,
  state() {
    return {
      counter: 0,
      color: "red",
      randNumber: 0,
    };
  },
  getters: {
    colorName: (state) => state.color,
    counter: (state) => state.counter,
  },
  mutations: {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    multiplyByRandom(state, multiplyValue) {
      state.randNumber = multiplyValue;
      state.counter *= multiplyValue;
    },
    squareDouble(state) {
      state.counter = state.counter * state.counter;
    },
    setNewColor(state, newColor) {
      state.color = newColor;
    },
  },
  actions: {
    increment(context) {
      context.commit("increment");
    },
    decrement(context) {
      context.commit("decrement");
    },
    async multiplyByRandom(context) {
      const response = await axios.get(
        "https://www.randomnumberapi.com/api/v1.0/random?min=1&max=10&count=1"
      );
      const numberValue = parseInt(response.data[0]);
      context.commit("multiplyByRandom", numberValue);
    },
    squareDouble(context) {
      context.commit("squareDouble");
    },
    setNewColor(context, newColor) {
      context.commit("setNewColor", newColor);
    },
  },
};
