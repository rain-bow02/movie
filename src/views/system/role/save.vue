<template>
  <div>
    <a-modal
      visible
      :title="
        type === 'add'
          ? '新增用户'
          : type === 'edit'
          ? '修改用户信息'
          : '查看用户详情'
      "
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
        <a-form-item name="name" label="角色名：" :rules="[{ required: true }]">
          <a-input v-model:value="user.name" :disabled="type === 'show'" />
        </a-form-item>

        <a-form-item name="permission_id" label="权限id：">
          <a-input
            v-model:value="user.permission_id"
            :disabled="type === 'show'"
          />
        </a-form-item>
      </a-form>
    </a-modal>
  </div>
</template>
<script lang="ts" setup>
import { defineProps, reactive, watch, ref } from "vue";

import { update, add } from "../../../api/role";
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
  permission_id: "",
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
        add(user.value);
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
