<template>
  <base-design>
  <template v-slot:body>
    <BreadCrumb ></BreadCrumb>
    <h1>Dashboard</h1>
    <p></p>
  <a-row :gutter="10">
  <a-col :xs="24" :md="12">
      
      <a-card title="Traffic Sources">
       
        <a-row>
        <a-col :md="12" :xs="24">
          <a-row>
          <a-col :span="12">
            <man-outlined />
                <a-statistic title="Male" :value="1128" style="margin-right: 50px">
                
                </a-statistic>

          </a-col>
          <a-col :span="12">
            <woman-outlined />
                
                <a-statistic title="Female" :value="93" class="demo-class">
                
                </a-statistic>
          </a-col>
        </a-row>
        
          <a-divider>OS Types</a-divider>
          <Doughnut
            :chart-options="chartOptions"
            :chart-data="chartData"
            :styles="styles"
          />
        </a-col>
        <a-col :md="12" :xs="24">
     
          <template #extra><a href="#">more</a></template>
          <a-timeline>

          <a-timeline-item>
            <p>Android<span style="float:right;">10M</span></p>
            <p><a-typography-text type="secondary">(11.0) Users: 5M</a-typography-text></p>
            <p><a-typography-text type="secondary">(10.0) Users: 2M</a-typography-text></p>
            <p><a-typography-text type="secondary">(9.0) Users: 1</a-typography-text></p>
            <p><a-typography-text type="secondary">(8.0) Users: 1M</a-typography-text></p>
            <p><a-typography-text type="secondary">(7.0) Users: 1M</a-typography-text></p>
          </a-timeline-item>
          <a-timeline-item>
            <p>Ios<span style="float:right;">5M</span></p>
            <p><a-typography-text type="secondary">(8.0) Users: 2.5M</a-typography-text></p>
            <p><a-typography-text type="secondary">(6.0) Users: 2.5M</a-typography-text></p>
          </a-timeline-item>
          
        </a-timeline>
     
        </a-col>
      </a-row>
        

      </a-card>
      <br />
    </a-col>
     <a-col :xs="24" :md="12">
      <a-card title="Wallet Status Summary">
       
        <!-- <span class="fw-bolder fs-2hx">3,200</span> -->
        
        <a-row>
          <a-col :md="12" :xs="24">
           <Radar
          :chart-options="RChart.chartOptions"
          :chart-data="RChart.chartData"
          :styles="RChart.styles"
        />
        
          </a-col>
          
           <a-col :md="12" :xs="24">
            <a-divider orientation="left">Visa Cards</a-divider>
          <a-row>
            
           <a-col :md="12" :xs="12">
           
            <alert-outlined />
                <a-statistic title="Activated" :value="1128" style="margin-right: 50px">
                
                </a-statistic>
 
          </a-col>
          <a-col :md="12" :xs="12">
            <api-outlined />
                
                <a-statistic title="Terminated" :value="93" class="demo-class">
                
                </a-statistic>
          </a-col>
         </a-row>
        
        <a-divider orientation="left">Digital Cards</a-divider>
        <a-row>
             <a-col :md="12" :xs="12">
              <a-statistic
            title="Active"
            :value="11.28"
            :precision="2"
            suffix="%"
            :value-style="{ color: '#3f8600' }"
            style="margin-right: 50px"
          >
            <template #prefix>
              <arrow-up-outlined />
            </template>
          </a-statistic>
      
                
              </a-col>
              <a-col :md="12" :xs="12">
                <a-statistic
                title="Idle"
                :value="9.3"
                :precision="2"
                suffix="%"
                class="demo-class"
                :value-style="{ color: '#cf1322' }"
              >
                <template #prefix>
                  <arrow-down-outlined />
                </template>
              </a-statistic>
              
                   
              </a-col>
              </a-row>
              
          </a-col>
         
        </a-row>
        

      </a-card>
      <br />
    </a-col>
     
  
    
    

    
  </a-row>
  
  
  <a-row :gutter="10" style="margin-top:10px">
    
    <a-col :md="12" :xs="24">
      <a-card title="(2022) Visa / Wallet Transaction" class="line-chart">
        <template #extra>
          <a href="#">More</a>
        </template>
        <Line
            :chart-options="LChart.chartOptions"
            :chart-data="LChart.chartData"
            :height='0'
          />
      </a-card> 
    </a-col>
    <a-col :xs="24" :md="12">
      <a-card title="BarCode Registrations">
        <Bar
          :chart-options="BChart.chartOptions"
          :chart-data="BChart.chartData"
          chart-label="hello"
          :styles="BChart.styles"
          :height='200'
        
        />
      </a-card>
      <br />
    </a-col>

    
 
   
  </a-row>
  <a-row :gutter="10">
    <a-col :xs="24" :md="12">
      <a-card title="Biometric Registration">
        <a-row>
          <a-col :span="12">
           
                <a-statistic title="Biometric" :value="13000" style="margin-right: 50px">
              
                </a-statistic>
 
          </a-col>
          <a-col :span="12">
   
                
                <a-statistic title="Non-Biometric" :value="200" class="demo-class">
                
                </a-statistic>
          </a-col>
         </a-row>
         <a-divider> June 2022</a-divider>
        <Bar
          :chart-options="B2Chart.chartOptions"
          :chart-data="B2Chart.chartData"
          :styles="B2Chart.styles"
          :height='200'
        />
      </a-card>
    </a-col>
    <a-col :md="12" :xs="24">
    <a-row :gutter="10">
      <a-col :md="12" :xs="24">
        <a-card >
          <template #title>
            Recent Customers
          </template>
          <template #extra><a href="#">more</a></template>
           <a-list item-layout="horizontal" :data-source="customerList">
              <template #renderItem="{ item }">
                <a-list-item>
                  <a-list-item-meta>
                    <template #title>
                      <a href="https://www.antdv.com/">{{ item.title }}</a>
                    </template>
                    <template #avatar>
                      <a-avatar src="https://joeschmoe.io/api/v1/random" />
                    </template>
                    <template #description>
                      <a-row type="flex">
                        <a-col flex="auto">
                          <a-space :size="10">
                            <span>User ID: #{{item.id}}</span>
                            <a-tag :color="item.status > 0 ? '#87d068' : '#f50' ">
                            <span v-if="item.status > 0">Paid</span>
                            <span v-else>Pending</span>
                            </a-tag>
                          </a-space>
                        </a-col>
                        <a-col flex="100px">
                          <div id="u1211" style="height:30px;"
                            data-dailychart-values="12.94,13.0,12.98,13.02,13.0,13.0,13.55,12.85,13.04,13.13"
                            data-dailychart-close="13.08"
                            data-dailychart-length="14">
                          </div>
                        </a-col>
    
                      </a-row>
                      
                     
                    </template>
                    
                  </a-list-item-meta>
                    
                       
                  
                </a-list-item>
              </template>
              
            </a-list>
            
        </a-card>
      </a-col>
      <a-col :md="12" :xs="24">
      <a-card title="Sales Activity">
        <template #extra><a href="#">more</a></template>
        <a-timeline>

        <a-timeline-item>
          <p>Total Sales <span style="float:right;">2 days ago</span></p>
          <a-typography-text type="secondary">1k New Sales</a-typography-text>
        </a-timeline-item>
        <a-timeline-item color="green">
          <p>Total Revenue <span style="float:right;">3 days ago</span></p>
          <a-typography-text type="secondary">1M Revenue</a-typography-text>
        </a-timeline-item>
        <a-timeline-item color="green">
          <p>Total Profit <span style="float:right;">1 week ago</span></p>
          <a-typography-text type="secondary">22K New Profit</a-typography-text>
        </a-timeline-item>
        <a-timeline-item color="green">
          <p>Customer Visit <span style="float:right;">2 weeks ago</span></p>
          <a-typography-text type="secondary">15% Increased</a-typography-text>
        </a-timeline-item>
        <a-timeline-item color="green">
          <p>Customer Review <span style="float:right;">2 weeks ago</span></p>
          <a-typography-text type="secondary"  color="#00CCFF">1.5K Reviews</a-typography-text>
        </a-timeline-item>
      </a-timeline>
      </a-card>
        
      </a-col>
    </a-row>
      
    </a-col>
  </a-row>
  <a-row style="margin-top:20px;">
    <a-col :span="24">
    <a-card title="Recent Credit History">
       <table id="example" class="display nowrap" style="width:100%">
        <thead>
            <tr>
                <th>Name</th>
                <th>Service Name</th>                
                <th>Type</th>
                <th>Credit Utilized (USD)</th>
                <th>Available Credit (USD)</th>
                <th>Recent Usage</th>
            </tr>
        </thead>
        <tfoot>
            <tr>
                <th>Name</th>
                <th>Service Name</th>                
                <th>Type</th>
                <th>Credit Utilized (USD)</th>
                <th>Available Credit (USD)</th>
                <th>Recent Usage</th>
            </tr>
        </tfoot>
    </table>
    </a-card>
     
    </a-col>
  </a-row>
  </template>
  </base-design>


</template>
<script>
import { defineComponent, ref } from 'vue';
import BreadCrumb from './../components/BreadCrumb.vue';
import { ArrowUpOutlined, AlertOutlined, ApiOutlined, WomanOutlined, ManOutlined,  ArrowDownOutlined } from '@ant-design/icons-vue';
import BaseDesign from './../views/BaseDesign.vue';
import { Line, Bar, Doughnut, Radar } from 'vue-chartjs';
import { Chart as ChartJS, RadialLinearScale, LineElement, PointElement, Title, Tooltip, Legend, ArcElement, BarElement, CategoryScale, LinearScale } from 'chart.js'
import $ from 'jquery';
import 'datatables.net';
import Dailychart from 'dailychart';
import 'sparklines';

import { loadScript } from "vue-plugin-load-script";


ChartJS.register(Title, LineElement, RadialLinearScale, PointElement, Tooltip, Legend, ArcElement, BarElement, CategoryScale, LinearScale);
var that;
export default defineComponent({
  components: {
    BreadCrumb,
    BaseDesign,
    Bar,
    Line,
    WomanOutlined,
    ManOutlined,
    Doughnut,
    Radar,
    ArrowUpOutlined,
    ArrowDownOutlined,
    AlertOutlined,
    ApiOutlined
  },
   props: {
    chartId: {
      type: String,
      default: 'pie-chart'
    },
    datasetIdKey: {
      type: String,
      default: 'label'
    },
    cssClasses: {
      default: '',
      type: String
    },
    styles: {
      type: Object,
      default: () => {}
    },
    plugins: {
      type: Object,
      default: () => {}
    }
  },  
  data() {
    return {
       routes : this.$router.options.routes,
       customerList: [{
          title: 'Mr.A',
          id: 1211,
          status: 1,
        }, {
          title: 'Mr.B',
          id: 1212,
          status: 0,
        }, {
          title: 'Mr.C',
          id: 1213,
          status: 0,
        }, {
          title: 'Miss.C',
          id: 1214,
          status: 1,
        }],
       chartData: {
        labels: [ 'Android', 'Ios' ],
        datasets: [ { backgroundColor: [ '#03305a', 'red'], data: [10000000, 5000000] } ]
      },
      chartOptions: {
        responsive: true
      },
      DChart: {
        chartId: {
          type: String,
          default: 'bar-chart'
        },
        datasetIdKey: {
          type: String,
          default: 'label'
        },
   
        cssClasses: {
          default: '',
          type: String
        },
        styles: {
          type: Object,
          default: () => {}
        },
        plugins: {
          type: Object,
          default: () => {}
        },
        chartData: {
        labels: [ 'Active Users', 'Idle Users' ],
        datasets: [ { backgroundColor: ['#03305a', '#ff4d18', '#ff4d18'], data: [1300, 700] } ]
        },
        chartOptions: {
          responsive: true
        }
      },
      BChart: {
        chartId: {
          type: String,
          default: 'bar-chart'
        },
        datasetIdKey: {
          type: String,
          default: 'label'
        },
   
        cssClasses: {
          default: '',
          type: String
        },
        styles: {
          type: Object,
          default: () => {}
        },
        plugins: {
          type: Object,
          default: () => {}
        },
        chartData: {
        labels: [ 'Jan', 'Feb', 'March', 'April', 'March' ],
        datasets: [{
          label: 'Registrations',
          backgroundColor: ['#03305a', '#0762b9bd', '#DDDDDD'], data: [1000, 100, 2000, 300, 50] 
        }]
        },
        chartOptions: {
          responsive: true
        }
    },
    B2Chart: {
        chartId: {
          type: String,
          default: 'bar-chart'
        },
        datasetIdKey: {
          type: String,
          default: 'label'
        },
   
        cssClasses: {
          default: '',
          type: String
        },
        styles: {
          type: Object,
          default: () => {}
        },
        plugins: {
          type: Object,
          default: () => {}
        },
        chartData: {
        labels: [ 'Jan', 'Feb', 'March', 'April', 'March' ],
        datasets: [{
          label: 'Biometric',
          backgroundColor:'#03305a', data: [200, 500, 1400, 360, 50] 
        },{
          label: 'Non-Biometric',
          borderColor: 'red',
          backgroundColor:'#ff4d18', data: [1000, 100, 200, 300, 250] 
        }]
        },
        chartOptions: {
          responsive: true
        }
    },
    
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
    RChart: {
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
        labels: ["Activated", "Terminated", "InActive", "EKYC Status"],
        datasets: [
          {
            label: "Visa Cards",
            backgroundColor: "rgba(179,181,198,0.2)",
            borderColor: "#ff4d18",
            pointBackgroundColor: "rgba(179,181,198,1)",
            pointBorderColor: "#fff",
            pointHoverBackgroundColor: "#fff",
            pointHoverBorderColor: "rgba(179,181,198,1)",
            data: [65, 59, 90, 81]
          },
          {
            label: "Digital Cards",
            backgroundColor: "rgba(255,99,132,0.2)",
            borderColor: "#0762b9bd",
            pointBackgroundColor: "rgba(255,99,132,1)",
            pointBorderColor: "#fff",
            pointHoverBackgroundColor: "#fff",
            pointHoverBorderColor: "rgba(255,99,132,1)",
            data: [28, 48, 40, 19]
          }
        ]
        },
        chartOptions: {
          responsive: true
        }
    }
    
    

      
    }
  },
  mounted: function () {
    Dailychart.create('#u1211', {
    lineWidth: 2,
    closeColor: ''
  });
    
  },
  created: function() {
    that = this;
    console.log(that.users);
    /* eslint-disable */
    $(document).ready(function () {
    $('#example').DataTable({
      data: [
    {
      "name": "Mr.A",
      "service": "S-EB-YCEFP",
      "type": "Individual",
      "total": '20,000',
      "remaining_credit": 45000,
      "last": [
       2000,
        3000,
        3000,
        5000,
       2000,
        3000,
        1.12,
        2.00,
      ]
    },
    {
      "name": "Mr.B",
      "service": "S-RWT-YCEFP",
      "type": "Family",
      "total": '35,000',
      "remaining_credit": 2000,
      "last": [
       2000,
        3000,
        3000,
        5000,
       2000,
        3000,
        1.12,
        2.00,
      ]
    },
    {
      "name": "Mr.C",
      "service": "S-RWT-AIN7P",
      "type": "Individual",
      "total": '42,000',
      "remaining_credit": 700,
      "last": [
        3.39,
        3.46,
        3.51,
        3.5,
        3.48,
        3.49,
        3.4
      ]
    },
    {
      "name": "Mr.E",
      "service": "S-EB-YCTP",
      "type": "Family",
      "total": '16,000',
      "remaining_credit": 60000,
      "last": [
        16.4,
        16.36,
        16.35,
        16.61,
        16.46,
        16.19,
        16.2
      ]
    },
    {
      "name": "Mr.F",
      "service": "S-RWT-PEIP",
      "type": "Individual",
      "total": '22,000',
      "remaining_credit": 1000,
      "last": [
        83.47,
        83.4,
        83.68,
        83.81,
        83.29,
        83.72,
        82.51
      ]
    }
  ],
        paging: false,
         search: {
                return: true,
            },
        initComplete: function () {
           
        },
        drawCallback: function () {
            
          loadScript('//cdnjs.cloudflare.com/ajax/libs/jquery-sparklines/2.1.2/jquery.sparkline.min.js').then(() => {
                      // Script is loaded, do something
                    
                      $('.sparkline')
                                .map(function () {
                                    console.log(this);
                                    return $('canvas', this).length ? null : this;
                      })
                      .sparkline('html',{
                          type: 'line',
                          aello: function() {
                            console.log(this);
                          },
                          tooltipFormat: '{{offset:offset}} ({{y}})',
                          width: '250px',
                          tooltipValueLookups: {
                          'offset': {
                              0: 'Jul: USD',
                              1: 'Aug: USD',
                              2: 'Sep: USD',
                              3: 'Oct: USD',
                              4: 'Nov: USD',
                              5: 'Dev: USD',
                              6: 'Jan: USD',
                              7: 'Feb: USD',
                          }
                      },
                      });
                      })
                      .catch(() => {
                        // Failed to fetch script
                      });
                    
        },
        columns: [
            {
                data: 'name',
            },
            {
                data: 'service',
            },
            {
                data: 'type',
            },
            {
                data: 'total'
            },
            {
                data: null,
                render: function (data, type, row, meta) {
                    var val = (row.remaining_credit);
                    var colour = val < 10000 ? 'red' : 'green';
                    return type === 'display' ? '<span style="color:' + colour + '">' + val.toLocaleString('en-US') + '</span>' : val.toLocaleString('en-US');
                },
            },
            {
                data: 'last',
                render: function (data, type, row, meta) {
                    return type === 'display' ? '<span class="sparkline">' + data.toString() + '</span>' : data;
                },
            },
        ],
    });
});



  },
  setup() {
    

    return {
      selectedKeys: ref(['1']),
      collapsed: ref(false),

    };
  }
});

</script>
