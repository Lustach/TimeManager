<template>
  <!-- <div> -->
  <div class="d-flex justify-center">
    <!-- <v-row class="d-flex justify-center"> -->
    <v-col cols="3">
    <v-col cols="12" class="d-flex align-center justify-center quest-part" style="height: 60px;">
      <v-text-field title='New quest' solo></v-text-field>
      <v-col class="d-flex pb-10">
      <v-btn color="success" @click="TestObject.title='hello'">text</v-btn>
      </v-col>
    </v-col>
      <v-col
        class="d-flex align-center justify-center quest-part"
        v-for="(item, index) in getQuests"
        :key="index"
        cols="12"
        style="height: 60px;"
      >
        <v-text-field :value="item" :disabled="true" solo></v-text-field>
        <v-col class="d-flex pb-10">
          <v-btn title="Delete" class="warning" @click="deleteQ(index)" >
            <v-icon>mdi-delete</v-icon>
          </v-btn>
          <v-btn title="Save" class="primary" @click="deleteQ(index)">
            <v-icon>mdi-check-bold</v-icon>
          </v-btn>
        </v-col>
      </v-col>
          <!-- <v-col>
    <v-btn color="success" @click="TestObject.title='hello'">text</v-btn>
    </v-col> -->
    </v-col>
    <!-- {{TestObject}} -->

    <!-- </v-row> -->
  </div>
  <!-- </div> -->
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
  TestObject: object;
  constructor() {
    super();
    this.changemes(), this.mes;
    this.TestObject = {
      title: "Hi",
      subtitle: "fkasdjlf"
    };
    // this.TestObject["1"] = {
    //   title: "Hi1",
    //   subtitle: "fkasdjlf1"
    // };
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
    this.deleteQuest(id);
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
