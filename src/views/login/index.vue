<template>
  <a-space>
    <video-camera-outlined />
  </a-space>
  <a-form
    :model="formState"
    name="basic"
    :label-col="{ span: 8 }"
    :wrapper-col="{ span: 16 }"
    autocomplete="off"
    @finish="onFinish"
    @finishFailed="onFinishFailed"
  >
    <a-form-item
      label="Username"
      name="username"
      :rules="[{ validator: validateName }]"
    >
      <a-input v-model:value="formState.username" />
    </a-form-item>

    <a-form-item
      label="Password"
      name="password"
      :rules="[{ validator: validatePassword }]"
    >
      <a-input-password v-model:value="formState.password" />
    </a-form-item>

    <a-form-item name="remember" :wrapper-col="{ offset: 8, span: 16 }">
      <a-checkbox v-model:checked="formState.remember">Remember me</a-checkbox>
    </a-form-item>

    <a-form-item :wrapper-col="{ offset: 8, span: 16 }">
      <a-button type="primary" html-type="submit">Submit</a-button>
    </a-form-item>
  </a-form>
</template>

<script setup name="Login" lang="ts">
import { reactive } from "vue";
import axios from "axios";
import { useRouter } from "vue-router";
import { login } from "../../api/user";
const router = useRouter();
interface FormState {
  username: string;
  password: string;
  remember: boolean;
}

const formState = reactive<FormState>({
  username: "",
  password: "",
  remember: true,
});
const onFinish = (values: any) => {
  console.log("Success:", values);
  login(formState)
    .then((resp) => {
      //resp:后端传回的接口
      console.log("resppppppp", resp);
      // let user = resp.data;
      // let status = resp.data.code;
      if (!resp.code) {
        let user = resp;
        localStorage.setItem("user", JSON.stringify(user));
        const userInfo = JSON.parse(localStorage.getItem("user"));
        const username = userInfo.name;
        const userid = userInfo.id;
        console.log(username);
        router.push({
          name: "movies",
        });
        console.log(user?.id);
      } else {
        alert(resp.data.msg);
      }
    })
    .catch((error) => {
      alert(error);
      alert("与服务器连接异常");
    });
};

const onFinishFailed = (errorInfo: any) => {
  console.log("Failed:", errorInfo);
};
const validateName = () => {
  console.log("asdas");

  if (!formState.username) {
    return Promise.reject("请填写账号");
  } else {
    return Promise.resolve();
  }
};
const validatePassword = () => {
  if (!formState.password) {
    return Promise.reject("请填写密码");
  } else {
    return Promise.resolve();
  }
};
</script>
<!-- scoped: 作用域，当前css只当前的组件生效-->
<style lang="less" scoped></style>
