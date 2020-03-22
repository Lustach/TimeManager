import { VuexModule, getModule } from "vuex-module-decorators";
// import store from "@/store";
import { Getters, Mutations, Actions, Module, createMapper } from "vuex-smart-module";
// import FooStore from './modules/foo'
// @Module({
//   namespaced: true,
//   name: "quests",
//   store
// })
class RootState {
  quests: object;
  constructor() {
    this.quests = {
      someKey: {
        title: "Drink water"
      }
    };
  }
}
class RootGetters extends Getters<RootState> {
  //getters
  get double(): object {
    // У инстанса геттера есть свойство `state`
    return this.state.quests;
    // Для использования других геттеров есть свойство `getters`
    // return this.getters.double + this.state.count
  }
}
// Мутации
// Так же как и геттеры, класс мутаций расширяется типами RootState
class RootMutations extends Mutations<RootState> {
  increment(payload: number) {
    // У мутаций так же есть свойство `state`
    this.state.quests = {
      someKey: {
        title: "Drink water",
        checked: "false"
      }
    };
  }
}

class RootActions extends Actions<
  RootState,
  RootGetters,
  RootMutations,
  RootActions
> {
  incrementAsync(payload: { amount: number; interval: number }) {
    // У инстанса действия есть свойства `state`, `getters`, `commit` и `dispatch`
    return new Promise(resolve => {
      setTimeout(() => {
        this.commit("increment", payload.amount);
      }, payload.interval);
    });
  }
}

// class questsModule extends VuexModule {}
// export const Root = new Module({
export default new Module({
  state: RootState,
  getters: RootGetters,
  mutations: RootMutations,
  actions: RootActions,
  modules:{

  }
});

// export const RootMapper=createMapper(Root)
// export default getModule(questsModule);
