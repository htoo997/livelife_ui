<template>
  <a-row>
    <a-col :xs='24' :md="12" class="login-cover">
    </a-col>
    <a-col :xs='24' :md="12" class="login-form-container">
      <a-typography-title :level="3"> LiveLife Project By Vue</a-typography-title>

      <a-form
        :model="formState"
 
        name="basic"
        class="login-form"
        
        :wrapper-col="{ span: 16 }"
        autocomplete="off"
        @finish="onFinish"
        @finishFailed="onFinishFailed"
      >
         <a-form-item
   
      name="username"
      :wrapper-col="24"
      :rules="[{ required: true, message: 'Please input your username!' }]"
    >
      <a-input v-model:value="formState.username">
        <template #prefix>
          <UserOutlined class="site-form-item-icon" />
        </template>
      </a-input>
    </a-form-item>

    <a-form-item
      
      name="password"
      :wrapper-col="24"
      :rules="[{ required: true, message: 'Please input your password!' }]"
    >
      <a-input-password v-model:value="formState.password">
        <template #prefix>
          <LockOutlined class="site-form-item-icon" />
        </template>
      </a-input-password>
    </a-form-item>

        <a-form-item name="remember" :wrapper-col="{ span: 16 }">
          <a-checkbox v-model:checked="formState.remember">Remember me</a-checkbox>
        </a-form-item>

        <a-form-item :wrapper-col="{ span: 24 }" class="text-center">
          <a-button type="default" class="btn-login" html-type="submit">Login</a-button>
        </a-form-item>
      </a-form>

    </a-col>
  </a-row>
  </template>
  <style>
    @import './../assets/css/login.css';
  </style>
  <script>
import { defineComponent, reactive } from 'vue';
import { UserOutlined, LockOutlined } from '@ant-design/icons-vue';
export default defineComponent({
  components: {
     UserOutlined,
    LockOutlined,
  },
  setup() {
    const formState = reactive({
      username: '',
      password: '',
      remember: true,
    });

    const onFinish = values => {
      console.log('Success:', values);
      window.location.href = '/';
    };

    const onFinishFailed = errorInfo => {
      console.log('Failed:', errorInfo);
      
    };

    return {
      formState,
      onFinish,
      onFinishFailed,
    };
  },

});
</script>
  