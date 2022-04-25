<template>
  <div class="center number">{{ $store.state.counters.counter }}</div>
</template>
<script>
export default {
  name: "DisplayValue",
  mounted() {
    console.log("Test " + this.$store);
  },
};
</script>
<style>
.center {
  text-align: center;
  font-size: 50px;
}
.number {
  margin-top: 20%;
}
</style>
