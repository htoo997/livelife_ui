<template>
    <router-view> </router-view>
</template>


<script>
// import BaseDesign from './views/BaseDesign.vue';
import { defineComponent, ref } from 'vue';
// import BreadCrumb from './../components/BreadCrumb.vue';

export default defineComponent({
  components: {
    // BaseDesign,
    // BreadCrumb,
  },
  data() {
    return {
       routes : this.$router.options.routes,
    }
  },
  setup() {
    return {
      selectedKeys: ref(['1']),
      collapsed: ref(false),
      
    };
  }
});

</script>
