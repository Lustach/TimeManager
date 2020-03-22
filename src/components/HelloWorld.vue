<template>
  <v-container>
    {{ title }}
        <ListPart v-for="i in 3" :key="i"
        :messag="i"></ListPart>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";
// import ListPart from './ListPart'
import Component from "vue-class-component";
import ListPart from "@/components/ListPart.vue";
// import RootStore from '@/store/index'
@Component({
  components: { ListPart }
})
export default class HelloWorld extends Vue {
  // mounted:(){
  //   console.log(this.title)
  // }
  // name: 'HelloWorld',
  title: string;
  constructor() {
    super();
    this.title = "HelloWorld!";
  }
}
</script>
