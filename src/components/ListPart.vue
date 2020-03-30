<template>
  <div>
    <v-row class="d-flex justify-center">
      <div
        width="344"
        class="d-flex align-center justify-center quest-part"
        v-for="(item, index) in getQuests"
        :key="index"
      >
        <v-text-field :value="item" :disabled="item.disabled"></v-text-field>
        <!-- :placeholder="item.title" -->
        <!-- editQuest() -->
        <!-- {{quests.length}} -->
        <v-btn class="warning" @click="deleteQ(index)">Delete</v-btn>
        <!-- {{ typeof Number(index) }} -->
      </div>
    </v-row>
  </div>
</template>
<script lang="ts">
// import { store } from "../store/index";
// import { Component, Vue } from 'vue-class-component'
// import Vue from "vue";
// import Component from "vue-class-component";
import { Prop, Component, Vue } from "vue-property-decorator";
import { RootStore } from "@/store/modules/quests";
// import { store } from "@/store/index";

const Mappers = Vue.extend({
  computed: {
    ...RootStore.mapGetters(["getQuests"])
  },
  methods: {
    ...RootStore.mapMutations(["deleteQuest", "editQuests"]),
    // ...RootStore.mapActions({
    //   incAsync: 'incrementAsync'
    // })
    ...RootStore.mapActions({
      delOneQ: "deleteOneQ"
    })
  }
});

// @Component({
//   Component
// })

@Component
//top equal to @Component
export default class ListPart extends Mappers {
  // created() {
  //   this.quests = this.getQuests;
  // }
  @Prop() messag!: string;
  message!: string;
  quests!: number[];
  constructor() {
    super();
    this.changemes(), this.mes;
    // this.quests
  }

  get mes(): string {
    return this.message;
  }
  editQuest(index: string | number) {
    this.editQuests(index);
  }
  changemes() {
    this.message = this.messag;
  }
  deleteQ(id: number) {
    console.log(id);
    this.deleteQuest(id)
    // this.$store.dispatch("deleteOneQ", id);
    // console.log(this.getQuests, "getQuests!");
    // this.quests.splice(id,1)
    // this.$emit("deleteQ", this.getQuests);
    // this.$store.getters.getQuests
    // delete this.quests[id]

    // this.deleteQuest('0');
    // this.getQuests
  }

  // computed: RootStore.mapGetters(['double'])
}
// export default {
//     name: "ListPart"
// }
</script>

<style scoped>
/* .quest-part{
} */
</style>
