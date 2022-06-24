<template>
  <base-design>
    <template v-slot:body>
      <BreadCrumb :paths="[{'title' : 'Customer Card', 'path' : '/cards/customer'}]" ></BreadCrumb>
      <h1>Profile</h1>
      <a-row :gutter="10">
        <a-col :xs="24" :md="9"  style=" marginBottom:18px;">
        <a-card>
        <div class="space-align-container">
          <div class="space-align-block">
            <a-space align="center">
           
              <a-avatar :size="{ xs: 100, sm: 100, md: 150, lg: 150, xl: 200, xxl: 200 }" src="https://joeschmoe.io/api/v1/random">          
              </a-avatar>
     
              
                <a-timeline>
                  <a-timeline-item>Htoo Min Shein </a-timeline-item>
                  <a-timeline-item>hshein@globalservicing.com </a-timeline-item>
                  <a-timeline-item>(+95) 9966328489</a-timeline-item>
                </a-timeline>
              
              

         
            </a-space>
            </div>
        </div>
        
        <a-divider>Personal</a-divider>
        
        <a-timeline>
          <a-timeline-item> DOB: 9 Aug 1997</a-timeline-item>
          <a-timeline-item> Address: No. 18, Wantang Road, Xihu District, Hangzhou, Zhejiang, China</a-timeline-item>
          <a-timeline-item> Country: Myanmar</a-timeline-item>
       
        </a-timeline>

        <a-divider >Credits</a-divider>
        <a-row>
        <a-col :span="12">
          <a-statistic title="Used Credit (USD)" :value="112893" style="margin-right: 50px" />
        </a-col>
        <a-col :span="12">
          <a-statistic title="Available Credit (USD)" :precision="2" :value="112893" />
        </a-col>
      </a-row>

        </a-card>
        

        </a-col>
        <a-col :xs="24" :md="15">
            <a-card style="minHeight:459px;" >
         
            <a-tabs >
    <a-tab-pane key="1" tab="User Info">
   
    <a-divider >Cards</a-divider>
    <a-row :gutter="10">
      <a-col :span="10">
      <a-card title="111111XXXXXX1111">
        <template #extra>
          <a-tag color="green">Activated</a-tag>
        </template>
        <!-- <span class="fw-bolder fs-2hx">3,200</span> -->
        <a-row>
          <a-col :span="24">
            <strong>Htoo Min Shein</strong>
          </a-col>
        </a-row>
        <a-row>
          <a-col :span="12">
            <a-statistic title="Expire" :value='11' style="margin-right: 50px">
            <template #suffix>
              /2028
            </template>
            </a-statistic>
          </a-col>
          <a-col :span="12">
                <a-statistic title="CVV" :value="497" class="demo-class">
                </a-statistic>
          </a-col>
         </a-row>

         
      </a-card>

      
      </a-col>
      <a-col :span="10">
      <a-card title="111111XXXXXX1111">
        <template #extra>
          <a-tag color="red">Terminated</a-tag>
        </template>
        <!-- <span class="fw-bolder fs-2hx">3,200</span> -->
        <a-row>
          <a-col :span="24">
            <strong>Htoo Min Shein</strong>
          </a-col>
        </a-row>
        <a-row>
          <a-col :span="12">
            <a-statistic title="Expire" :value='11' style="margin-right: 50px">
            <template #suffix>
              /2023
            </template>
            </a-statistic>
          </a-col>
          <a-col :span="12">
            <api-outlined />
                <a-statistic title="CVV" :value="889" class="demo-class">
                </a-statistic>
          </a-col>
         </a-row>


      </a-card>
      </a-col>
    </a-row>
    <a-divider>2022 Transaction</a-divider>
    <a-row :gutter="10" style="margin-top:10px">
      <a-col :md="24" :xs="24">
        <a href="/transactions/demo" target="_blank">
        <a-typography-text underline>Click Here to View Transactions</a-typography-text>
      </a>
        <Line
            :chart-options="LChart.chartOptions"
            :chart-data="LChart.chartData"
            :height='180'
          />
      
      </a-col>
    </a-row> 

    </a-tab-pane>
    <a-tab-pane key="2" tab="Modify" force-render>
      <a-form :model="formState" :label-col="labelCol" :wrapper-col="wrapperCol">
          <a-form-item label="FirstName">
            <a-input v-model:value="formState.firstname" />
          </a-form-item>
          <a-form-item label="LastName">
            <a-input v-model:value="formState.lastname" />
          </a-form-item>
          <a-form-item label="Phone Number">
            <a-input v-model:value="formState.username" />
          </a-form-item>
          <a-form-item label="Work Permit Number">
            <a-input v-model:value="formState.workpermit" />
          </a-form-item>
          <a-form-item label="Date of Birth">
            <a-date-picker v-model:value="formState.dob" />
            
          </a-form-item>
          
          <a-form-item label="Password">
            <a-input type="password" v-model:value="formState.password" />
          </a-form-item>
          
          <a-form-item label="Upload Photo">
            <a-upload :file-list="fileList" :before-upload="beforeUpload" @remove="handleRemove">
              <a-button>
                <upload-outlined></upload-outlined>
                Select File
              </a-button>
            </a-upload>
          </a-form-item>
          
          <a-form-item :wrapper-col="{ span: 14, offset: 4 }">
            <a-button class="btn-site" @click="onSubmit">Save</a-button>
            <a-button style="margin-left: 10px">Cancel</a-button>
          </a-form-item>
        </a-form>
    </a-tab-pane>
  </a-tabs>

              
            </a-card>
            
     

        </a-col>
      </a-row>
    </template>
  </base-design>
  
</template>
<script>
import {  UploadOutlined } from '@ant-design/icons-vue';
import { message } from 'ant-design-vue';
import request from 'umi-request';
import { defineComponent, reactive, toRaw, ref } from 'vue';
import BreadCrumb from './../components/BreadCrumb.vue';
import BaseDesign from './../views/BaseDesign.vue';
import { Line } from 'vue-chartjs';
import { Chart as ChartJS, RadialLinearScale, LineElement, PointElement, Title, Tooltip, Legend, ArcElement, BarElement, CategoryScale, LinearScale } from 'chart.js'
ChartJS.register(Title, LineElement, RadialLinearScale, PointElement, Tooltip, Legend, ArcElement, BarElement, CategoryScale, LinearScale);
export default defineComponent({
  components:{
    UploadOutlined,
    BreadCrumb,
    BaseDesign,
    Line,
  },
  data () {
    return {
      LChart: {
        chartId: {
          type: String,
          default: 'line-chart'
        },
        datasetIdKey: {
          type: String,
          default: 'label'
        },
        cssClasses: {
          default: 'line-chart',
          type: String
        },
        plugins: {
          title: {
            display: true,
            text: 'Chart.js Line Chart - Cubic interpolation mode'
          },
        },
        interaction: {
          intersect: false,
        },
        chartData: {
        labels: [ 'Jan', 'Feb', 'May', 'June', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec' ],
        datasets: [{
          label: 'Visa Transaction',
          backgroundColor: '#0762b9bd', 
          borderColor: '#03305a',
          data: [1000, 100, 2000, 300, 2000,900, 1400, 800, 400,200] 
        },{
          label: 'Wallet Transaction',
          backgroundColor: '#ff4d18', 
          borderColor: '#ff4d18',
          data: [100, 200, 200, 800, 900, 990, 1000, 1200, 1400, 1500] 
        }]
        },
        chartOptions: {
          responsive: true
        }
    },
    }
  },
  setup() {
    const formState = reactive({
      username: '',
      firstname: '',
      lastname: '',
      password: '',
      workpermit: '',
      dob: '',
      fileList: [],
    });

     const fileList = ref([]);
    const uploading = ref(false);

    const handleRemove = file => {
      const index = fileList.value.indexOf(file);
      const newFileList = fileList.value.slice();
      newFileList.splice(index, 1);
      fileList.value = newFileList;
    };

    const beforeUpload = file => {
      fileList.value = [...fileList.value, file];
      return false;
    };

    const handleUpload = () => {
      const formData = new FormData();
      fileList.value.forEach(file => {
        formData.append('files[]', file);
      });
      uploading.value = true; // You can use any AJAX library you like

      request('https://www.mocky.io/v2/5cc8019d300000980a055e76', {
        method: 'post',
        data: formData,
      }).then(() => {
        fileList.value = [];
        uploading.value = false;
        message.success('upload successfully.');
      }).catch(() => {
        uploading.value = false;
        message.error('upload failed.');
      });
    };


    const onSubmit = () => {
      console.log('submit!', toRaw(formState));
    };

    return {
      labelCol: {
        style: {
          width: '150px',
          paddingRight:'20px',
        },
      },
      wrapperCol: {
        span: 14,
      },
      formState,
      onSubmit,
      fileList,
      uploading,
      handleRemove,
      beforeUpload,
      handleUpload,
    };
  },

});
</script>


