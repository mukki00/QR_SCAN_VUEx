import { createStore } from "vuex";
import counters from "./modules/counters";

const store = createStore({
  modules: { counters },
});
export default store;
