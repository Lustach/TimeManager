import Vue from "vue";
import * as Vuex from "vuex";
import { createStore, Module } from "vuex-smart-module";
import  RootStore from "./modules/quests";
// import FooStore from './modules/'
// import  from './modules/quests'
// import { Getters, Mutations, Actions, Module } from "vuex-smart-module";

// import Vuex from 'vuex'

Vue.use(Vuex);
export const store = createStore(RootStore, {
  strict: process.env.NODE_ENV !== "production",
});

// export default new Module({
//   state: RootState,
//   getters: RootGetters,
//   mutations: RootMutations,
//   actions: RootActions,
//   modules: {
//     Root
//   }
// })
// export default new Vuex.Store({
//   state: {
//   },
//   mutations: {
//   },
//   actions: {
//   },
//   modules: {
//   }
// })
