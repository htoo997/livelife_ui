<template>
  <base-design>
    <template v-slot:body>
  <BreadCrumb ></BreadCrumb>
  <h1>Roles</h1>
   <a-table :columns="columns" :data-source="users" @change="onChange" :scroll="{ x: 1500, y: 900 }">
    <template #bodyCell="{ column }">
      <template v-if="column.key === 'operation'">
        <a>action</a>
      </template>
    </template>
   </a-table>

</template>
</base-design>
</template>
<script>
// import axios from 'axios';
import { computed, defineComponent } from 'vue';
import { useStore } from 'vuex';
import BreadCrumb from './../components/BreadCrumb.vue';
import BaseDesign from './../views/BaseDesign.vue';

const columns = [{
  title: 'id',
  dataIndex: 'id',
  width:100,
},{
  title: 'Name',
  dataIndex: 'name',
  width:200,
}, {
  title: 'Service Name',
  dataIndex:'serviceName',
   width:200,
}, {
  title: 'Service Code',
  dataIndex:'serviceCode',
   width:200,
}, {
  title: 'Action',
  key: 'operation',
  fixed: 'right',
  width: 100,
}];
var that;
export default defineComponent({
  components: {
    BaseDesign,
    BreadCrumb,
  },
  data() {
    return {
       routes : this.$router.options.routes,
    }
  },
  methods: {
  },
  created() {
    that = this;
    console.log(that.users);
  },
  setup() {
  const store = useStore();
  const users = computed(() => store.state.users.roles)
  store.dispatch('users/getRoles');

  return {
    users,
    columns,
    onChange: (pagination, filters, sorter, extra) => {
      console.log('params', pagination, filters, sorter, extra);
    },
  };
  }

  
});

</script>
