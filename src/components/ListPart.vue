<template>
  <v-card class="mx-auto" max-width="344">
    <v-card-text>
      <div>Word of the Day{{ message }}{{ double }}</div>
      <!--      <p class="display-1 text&#45;&#45;primary">-->
      <!--        be•nev•o•lent-->
      <!--      </p>-->
      <!--      <p>adjective</p>-->
      <!--      <div class="text&#45;&#45;primary">-->
      <!--        well meaning and kindly.<br />-->
      <!--        "a benevolent smile"-->
      <!--      </div>-->
    </v-card-text>
    <!--    <v-card-actions>-->
    <!--      <v-btn text color="deep-purple accent-4">-->
    <!--        Learn More-->
    <!--      </v-btn>-->
    <!--    </v-card-actions>-->
  </v-card>
</template>

<script lang="ts">
// import { store } from "../store/index";
// import { Component, Vue } from 'vue-class-component'
// import Vue from "vue";
// import Component from "vue-class-component";
import { Prop, Component, Vue } from "vue-property-decorator";
import RootStore from "@/store/modules/quests";
// import { store } from "@/store/index";

const Mappers = Vue.extend({
  computed: {
    ...RootStore.mapGetters(["double"])
  }
  // methods: {
  //   ...RootStore.mapActions({
  //     incAsync: 'incrementAsync'
  //   })
  // }
});

@Component({
  Component
})
//top equal to @Component
export default class ListPart extends Mappers {
  // RootStore.mapGetters(['double'])
  // computed:RootStore.mapGetters(['GetQuests'])
  // methods: store.mapMutations(['increment'])
  @Prop() messag: string;
  message: string;
  quests: object;
  constructor() {
    super();
    this.changemes(), this.mes;
    // this.quests
  }
  changemes() {
    this.message = this.messag;
  }
  get mes(): string {
    return this.message;
  }
  // computed: RootStore.mapGetters(['double'])
}
// export default {
//     name: "ListPart"
// }
</script>

<style scoped></style>
