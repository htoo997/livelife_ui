<template>
<a-breadcrumb v-if="currentRouteName !== 'Dashboard'">
    <a-breadcrumb-item>
      <a href="/">Dashboard </a>
    </a-breadcrumb-item>
    <a-breadcrumb-item v-for="(path, index) in paths" v-bind:key="index">
    <a :href="path.path">{{path.title}}</a>
    </a-breadcrumb-item>
    <a-breadcrumb-item><a href="">{{currentRouteName}}</a></a-breadcrumb-item>
  </a-breadcrumb>
</template>
<script>
import { defineComponent } from 'vue';
import { array } from 'vue-types';
export default defineComponent({
  computed: {
    currentRouteName() {
      return this.$route.name;
    }
  },
  props: {
    paths : array,
  },
  setup() {
    return {
      
    }
  },

});
</script>