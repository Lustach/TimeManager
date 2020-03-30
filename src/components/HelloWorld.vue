<template>
  <v-container>
    {{ title }}
    <ListPart :messag="1"></ListPart>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";
// import ListPart from './ListPart'
import Component from "vue-class-component";
import ListPart from "@/components/ListPart.vue";
import { RootStore } from "@/store/modules/quests";
// import RootStore from '@/store/index'

const Mappers = Vue.extend({
  computed: {
    ...RootStore.mapGetters(["getQuests"])
  }
});

@Component({
  components: { ListPart }
})
export default class HelloWorld extends Mappers {
  // mounted:(){
  //   console.log(this.title)
  // }
  // name: 'HelloWorld',
  title: string;
  constructor() {
    super();
    this.title = "HelloWorld!";
  }
  deleteQ(object: object) {
    alert(object);
  }
}
</script>
