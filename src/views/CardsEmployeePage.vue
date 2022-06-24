<template>
  <base-design>
  <template v-slot:body>
      <BreadCrumb ></BreadCrumb>
      <h1>Users</h1>
        <a-card>
       <table id="example" class="table table-striped table-bordered" style="width:100%"></table>
    
    </a-card>
    </template>
</base-design>
</template>
<script>
import{ defineComponent } from 'vue';
import { mapState, mapActions  } from 'vuex';
import BreadCrumb from './../components/BreadCrumb.vue';
import BaseDesign from './../views/BaseDesign.vue';

import $ from 'jquery';
import 'datatables.net';
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
     ...mapActions([
      "users/getUsers",
    ])
  },
  computed: mapState({
    users: state => state.users.all
  }),
  // setup() {
  //   const store = useStore();
  //   store.dispatch('users/getUsers');

  //    const users = computed(() => store.state.users.all)
  //   return { users };
  // },
  async created() {
    that = this;
    await this["users/getUsers"]();

   $(document).ready(function () {

        $('#example').DataTable({
           columns: [
            { data: 'id' , title : 'ID'},
            { data: 'name', title : 'Name',
              // eslint-disable-next-line
              render: function (data, type, row, meta) {
                return `<a href="${that.$route.path}/demo">${data}</a>`;
              }
             },
            { data: 'countryCodeNum', title : 'Country Code' },
            { data: 'countryName', title : 'Country Name' },
            { data: 'mobileNumber', title : 'Mobile Number' },
            { data: 'emailID', title : 'Email' },
            { data: 'deviceType', title : 'deviceType' },
            { data: 'kycServiceCode', title : 'KYC Service Code' },
            { data: 'appVersion', title : 'App Version' },
            { data: 'updatedAt', title : 'Modified Date', 
            // eslint-disable-next-line
            render: function (data, type, row, meta) {
              return (new Date(data)).toLocaleString();
            } },
            { data: 'action', title : 'Action', 
            // eslint-disable-next-line
            render: function ( data, type, row, meta ) {
              return '<Button>Transactions</Button>' ;
            }},
        ],
            data: that.users,
            search: {
                return: true,
            },
        });
      });

  },
  

  
});

</script>
