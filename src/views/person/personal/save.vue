<template>
  <div>
    <a-modal
      visible
      :title="type === 'edit' ? '修改个人信息' : '查看个人详情'"
      @ok="handleOk"
      @cancel="close"
    >
      <a-form
        :model="user"
        ref="formRef"
        v-bind="layout"
        name="nest-messages"
        :validate-messages="validateMessages"
        @finish="onFinish"
      >
        <a-form-item name="name" label="用户名：" :rules="[{ required: true }]">
          <a-input v-model:value="user.name" :disabled="type === 'show'" />
        </a-form-item>
        <a-form-item
          name="password"
          label="密码："
          :rules="[{ required: true }]"
        >
          <a-input v-model:value="user.password" :disabled="type === 'show'" />
        </a-form-item>
        <a-form-item name="email" label="邮箱：">
          <a-input v-model:value="user.email" :disabled="type === 'show'" />
        </a-form-item>
        <a-form-item name="role_id" label="角色">
          <a-input v-model:value="user.role_id" :disabled="type === 'show'" />
        </a-form-item>
        <a-form-item name="age" label="年龄">
          <a-input v-model:value="user.age" :disabled="type === 'show'" />
        </a-form-item>
        <a-form-item name="signature" label="个性签名">
          <a-input v-model:value="user.signature" :disabled="type === 'show'" />
        </a-form-item>
      </a-form>
    </a-modal>
  </div>
</template>
<script lang="ts" setup>
import { defineProps, reactive, watch, ref } from "vue";

import { update } from "../../../api/user";
const emits = defineEmits(["save", "close", "updateTree"]);

const formRef = ref<any>();
const props = defineProps({
  // 模型id
  data: {
    type: Object,
    default: {},
  },
  type: {
    type: String,
    default: "add",
  },
});
const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
const close = () => {
  emits("close");
};
const validateMessages = {
  required: "${label} is required!",
  types: {
    email: "${label} is not a valid email!",
    number: "${label} is not a valid number!",
  },
  number: {
    range: "${label} must be between ${min} and ${max}",
  },
};
// name, password, email, title,role_id,age,signature
const user = ref({
  name: "",
  password: "",
  email: "",
  role_id: "",
  age: "",
  signature: "",
});
const onFinish = (values: any) => {
  console.log("Success:", values);
};
const handleOk = () => {
  if (props.type === "edit") {
    console.log("Success:", user.value);
    formRef.value?.validate().then(() => {
      if (props.data.id) {
        update(props.data.id, user.value);
      } else {
        message.success("修改成功");
      }
    });
    emits("save");
  } else {
    close();
  }
};
watch(
  () => props.data,
  () => {
    user.value = props.data;
    console.log(user.value);
  },
  { deep: true, immediate: true }
);
</script>
