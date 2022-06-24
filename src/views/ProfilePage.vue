<template>
  <base-design>
    <template v-slot:body>
      <BreadCrumb ></BreadCrumb>
      <h1>Profile</h1>
      <a-row >
        <a-col :xs="24" :md="9"  style=" marginBottom:18px;">
        <a-card>
        <div class="text-center">
          <a-avatar :size="{ xs: 100, sm: 100, md: 150, lg: 150, xl: 200, xxl: 200 }">
            <template #icon>
              <AntDesignOutlined />
            </template>
          </a-avatar>
        </div>
        
        <a-divider>Contact</a-divider>
        
          <a-timeline>
          <a-timeline-item>puux@aist.com </a-timeline-item>
          <a-timeline-item>405 </a-timeline-item>
          <a-timeline-item> Australia</a-timeline-item>
        </a-timeline>
        </a-card>
        

        </a-col>
        <a-col :xs="24" :md="15">
            <a-card title="Settings" style="minHeight:459px;" >
              <a-form :model="formState" :label-col="labelCol" :wrapper-col="wrapperCol">
              <a-form-item label="Username">
                <a-input v-model:value="formState.username" />
              </a-form-item>
              <a-form-item label="Password">
                <a-input type="password" v-model:value="formState.password" />
              </a-form-item>
              <a-form-item label="FirstName">
                <a-input v-model:value="formState.firstname" />
              </a-form-item>
              <a-form-item label="LastName">
                <a-input v-model:value="formState.lastname" />
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
            </a-card>
            
     

        </a-col>
      </a-row>
    </template>
  </base-design>
  
</template>
<script>
import { AntDesignOutlined, UploadOutlined } from '@ant-design/icons-vue';
import { message } from 'ant-design-vue';
import request from 'umi-request';
import { defineComponent, reactive, toRaw, ref } from 'vue';
import BreadCrumb from './../components/BreadCrumb.vue';
import BaseDesign from './../views/BaseDesign.vue';
export default defineComponent({
  components:{
    AntDesignOutlined,
    UploadOutlined,
    BreadCrumb,
    BaseDesign,
  },
  setup() {
    const formState = reactive({
      username: '',
      firstname: '',
      lastname: '',
      password: '',
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


