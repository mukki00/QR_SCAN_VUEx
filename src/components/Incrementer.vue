<template>
  <DisplayValue />
  <div class="center button">
    <button @click="increment">+</button>
    <button @click="decrementFunc">-</button>
    <button @click="multiplyByRandom">* Rand</button>
    <button @click="squareDouble">X<sup>2</sup></button>
  </div>
  <div class="center">
    <p>Button Color</p>
    <input type="text" v-model="colorName" />
  </div>
  <div class="center">
    {{ colorName }}
  </div>
  <h4 class="center">State defined in counters</h4>
  <div class="center">Color Name : {{ color }}</div>
  <div class="center">Counter : {{ counter }}</div>
  <div class="center">Random Number : {{ randNumber }}</div>
</template>
<script>
import { mapActions, mapGetters, mapState } from "vuex";
import DisplayValue from "./DisplayValue.vue";
export default {
  name: "Incrementer",
  components: {
    DisplayValue,
  },
  computed: {
    ...mapGetters(["colorName"]),
    ...mapState("counters", ["color", "counter", "randNumber"]),
    colorName: {
      get() {
        return this.$store.state.counters.color;
      },
      set(newColor) {
        this.setNewColor(newColor);
      },
    },
  },
  methods: {
    ...mapActions("counters", [
      "increment",
      "decrement",
      "multiplyByRandom",
      "squareDouble",
      "setNewColor",
    ]),
    decrementFunc() {
      if (this.counter > 0) {
        this.decrement();
      }
    },
  },
};
</script>
<style scoped>
.center {
  text-align: center;
  font-size: 30px;
}
.number {
  margin-top: 2%;
}
button {
  width: 100px;
  margin-left: 5px;
  margin-right: 5px;
  font-size: 20px;
  background-color: v-bind("colorName");
}
</style>
