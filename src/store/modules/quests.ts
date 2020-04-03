// import { VuexModule, getModule } from "vuex-module-decorators";
// import store from "@/store";
import {
  Getters,
  Mutations,
  Actions,
  Module,
  createMapper
} from "vuex-smart-module";
// import FooStore from './modules/foo'
// @Module({
//   namespaced: true,
//   name: "quests",
//   store
// })
// interface Quest {
//   title: string;
//   checked: boolean;
// }

// interface Quest<T> {
//   id: {
//     title: string;
//     checked: boolean;
//   }
// }
class Quest {
  name: string;
  constructor(name: string) {
      this.name = name
  }
  // constructor(){}
}

interface HashTable<T> {
  [key: string]: T;
}

class RootState {
  quests!: number[];
  title!: string;
  checked!: boolean;
  Quests: HashTable<Quest>={}
  constructor() {
    // this.quests = {
    //   '0': {
    //     title: 'HelloTitle',
    //     disabled: true,
    //   },
    //   '1':{
    //     title: 'HelloTitle',
    //     disabled: true,
    //   }
    // }
    this.quests = [1, 2, 3, 4, 5, 6, 7]
    this.Quests['0']= new Quest('Bobik')
    }
  // quests: object;
  // title: string;
  // checked: boolean;
  // constructor() {
  //   this.checked = false,
  //     this.title = "cd",
  //     this.quests = {
  //       id: {
  //         title: this.title,
  //         checked: this.checked
  //       }
  //     }
  // }
}
class RootGetters extends Getters<RootState> {
  //getters
  get getQuests(): number[] {
    // У инстанса геттера есть свойство `state`
    // console.log(this.state.quests);
    console.log(this.state.Quests['0'])
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
    // this.state.quests = {
    //   someKey: {
    //     title: "Drink water",
    //     checked: "false"
    //   }
    // };
    // var employee:[number, string] = [1, "Bill"]
    // var employee = [1, "Bill"];
  }
  deleteQuest(id: number) {
    console.log(id, 'ID')
    // console.log(typeof Number(id));
    // console.log(this.state.Quests);
    // this.state.Quests.pop()
    // console.log(this.state.Quests);
    // console.log(double());
    // console.log(this.state.quests[id]);
    // console.log(this.state.quests[id], 'do')
    // delete this.state.quests[id]
    this.state.quests.splice(id, 1)
    console.log(this.state.quests, 'posle')
    // this.getters.getQuests
    // console.log(this.state.quests);
  }
  editQuests(id: number | string, newObj?: object) {
    this.state.quests[id] = newObj
  }
  // addQuest(title, checked = false, id ) {

  // }
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
  deleteOneQ(id: number) {
    this.commit('deleteQuest', id)
    // this.state.quests = this.getters.getQuests
  }
}

// class questsModule extends VuexModule {}
export const RootStore = new Module({
  // export default new Module({
  state: RootState,
  getters: RootGetters,
  mutations: RootMutations,
  actions: RootActions,
  modules: {}
});

export const RootMapper = createMapper(RootStore);
// export default getModule(questsModule);
