<template>
  <base-design>
    <template v-slot:body>
  <BreadCrumb :paths="[{title: 'Transactions', path : '/transactions/visa'}]"></BreadCrumb>
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
  width:200,
  },{
  title: 'BarCode Ref',
  dataIndex: 'barcodeRef',
  width:200,
}, {
  title: 'CardNumber',
  dataIndex:'cardNumber',
   width:200,
}, {
  title: 'CardRef',
  dataIndex:'cardRef',
   width:200,
},  {
  title: 'Cash Back Amount',
  dataIndex:'cashbackAmount',
   width:200,
}, {
  title: 'paymentStatus',
  dataIndex:'paymentStatus',
   width:200,
}, {
  title: 'Category Name',
  dataIndex:'categoryName',
   width:200,
}, {
  title: 'merchantID',
  dataIndex:'merchantID',
   width:200,
}, {
  title: 'merchantName',
  dataIndex:'merchantName',
   width:200,
},{
  title: 'transactionDate',
  dataIndex:'transactionDate',
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
  const users = computed(() => store.state.users.visaTransactions)
  store.dispatch('users/getVisaTransactions');

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
