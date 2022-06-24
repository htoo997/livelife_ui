<template>
  <a-layout>
    <a-layout-sider v-model:collapsed="collapsed" :trigger="null" collapsible>
      <div class="logo"></div>
      <a-menu v-model:selectedKeys="selectedKeys" theme="dark" mode="inline">
        <template v-for="(route, index) in this.routes" v-bind:key="route.path">
          <router-link v-if="route.children.length <= 0  && route.display > 0" :to="route.path">
            <a-menu-item  :key="route.path" >
            <component :is="route.icon"></component>
            <span>{{route.name}}</span>
          </a-menu-item>
          </router-link>

         
          <a-sub-menu  v-if="route.children.length > 0 && route.display > 0"  :key="('sub') + index">
            <template #title>
              <span>
                <user-outlined />
                <span>{{route.name}}</span>
              </span>
            </template>
              
              <a-menu-item v-for="(routeChild) in route.children" v-bind:key="routeChild.path" >
                <router-link  :to="routeChild.suffix + routeChild.path">
                  {{routeChild.name}}
                </router-link>
              </a-menu-item>
          </a-sub-menu>
        
        </template>
      
      </a-menu>
    </a-layout-sider>
    <a-layout>
      <a-layout-header style="background: #fff; padding: 0">

        <a-row type="flex">
          <a-col :flex="2">
            <menu-outlined 
            v-if="collapsed" 
            class="trigger" 
            @click="() => (collapsed = !collapsed)" 
          />
          <menu-outlined v-else class="trigger" @click="() => (collapsed = !collapsed)" />
            
          </a-col>
         
          <a-col :flex="3" class="text-right" :style="{textAlign:'right'}">
            
            <a-dropdown placement="bottomLeft">
              <a class="ant-dropdown-link" :style="{paddingRight:'10px'}" @click.prevent>
                 <a-avatar style="background-color: #87d068">
                  <template #icon>
                    <UserOutlined />
                  </template>
                </a-avatar>
                Htoo Min
              </a>
              <template #overlay>
                <a-menu>
                  <a-menu-item>
                    <a href="javascript:;">Settings</a>
                  </a-menu-item>
                  <router-link to="/profile">
                    <a-menu-item>
                      <a href="javascript:;">Profile</a>
                    </a-menu-item>
                  </router-link>
                  
                  <a-menu-item>
                    <a href="javascript:;">Logout</a>
                  </a-menu-item>
                </a-menu>
              </template>
            </a-dropdown>

          </a-col>
        </a-row>

        

        
      </a-layout-header>
      <a-layout-content :style="{ margin: '15px 16px', padding: '24px', background: 'transparent', minHeight: '200px' }"
      >
      <slot name="body"></slot>
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>
<script>
import { MenuOutlined, UserOutlined, FileProtectOutlined, LineChartOutlined, LogoutOutlined, AuditOutlined } from '@ant-design/icons-vue';
import { defineComponent, ref } from 'vue';

var that;
export default defineComponent({
  components: {
    MenuOutlined,
    FileProtectOutlined,
    LineChartOutlined,
    UserOutlined,
    AuditOutlined,
    LogoutOutlined,
  },
  data() {
    return {
       routes : this.$router.options.routes,
    }
  },
  methods: {
    handleResize: function() {
      that.collapsed = (window.innerWidth <= 720) ? true: false;
    }
  },
  created : function() {
    that = this;
    window.addEventListener('resize', that.handleResize);
    that.handleResize();
  },
  setup() {
    return {
      selectedKeys: ref(['1']),
      collapsed: ref(false),
    };
  }
});

</script>
