<template>
  <base-design>
    <template v-slot:body>
  <BreadCrumb :paths="[{title: 'User (Demo)', path : '/cards/customer/demo'}]"></BreadCrumb>
  <h1></h1>
  <a-row type="flex" style="margin-bottom:20px;">
    <a-col flex="auto"></a-col>
    <a-col flex="300px">
      <a-input-search
      placeholder="Search By Text"
      enter-button
    />
    </a-col>
  </a-row>
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

const columns = [
  { 
  title: 'ID',
  dataIndex: 'transactionID',
  sorter: true,
  width:200,
  },{
  title: 'transactionStatus',
  dataIndex: 'transactionStatus',
  width:200,
}, {
  title: 'transactionType',
  dataIndex:'transactionType',
   width:200,
}, {
  title: 'amount',
  dataIndex:'amount',
   width:200,
},  {
  title: 'appType',
  dataIndex:'appType',
   width:200,
}, {
  title: 'channelType',
  dataIndex:'channelType',
   width:200,
}, {
  title: 'channelTypeName',
  dataIndex:'channelTypeName',
   width:200,
}, {
  title: 'referenceCode',
  dataIndex:'referenceCode',
   width:200,
}, {
  title: 'referenceType',
  dataIndex:'referenceType',
   width:200,
},{
  title: 'transactionHistoryType',
  dataIndex:'transactionHistoryType',
   width:200,
},{
  title: 'transactionDate',
  dataIndex:'timeStamp',
   width:200,
},{
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
  const users = computed(() => store.state.users.walletTransactions)
  store.dispatch('users/getWalletTransactions');

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
