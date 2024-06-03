<template>
  <div class="personal-center">
    <a-card hoverable style="width: auto">
      <template #actions>
        <icon-font type="icon-chakan" @click.stop="show()" />
        <icon-font type="icon-bianji" @click.stop="edit()" />
        <a-popconfirm
          title="是否确定注销?"
          ok-text="Yes"
          cancel-text="No"
          @confirm="deleteById(user.id)"
          @cancel="cancel"
        >
          <poweroff-outlined />
        </a-popconfirm>
      </template>
      <!-- <poweroff-outlined /> -->
      <a-card-meta :title="user.name" description="This is the description">
        <template #avatar>
          <a-avatar :src="previewImage" />
        </template>
      </a-card-meta>
    </a-card>
    <a-card title="评分记录" class="personal_card" hoverable>
      <template #extra
        ><button><RightOutlined @click="showRating" /></button
      ></template>
    </a-card>
    <a-card title="收藏夹" class="personal_card" hoverable>
      <template #extra
        ><button><RightOutlined @click="showStars" /></button
      ></template>
    </a-card>
    <a-card title="历史记录" class="personal_card" hoverable>
      <template #extra
        ><button><RightOutlined @click="showViewRecord" /></button
      ></template>
    </a-card>
    <div>
      <van-button class="login_button" type="danger" @click="returnLogin"
        >退出登录</van-button
      >
    </div>
  </div>
  <Save
    v-if="visible"
    :data="user"
    :type="type"
    @save="onSave"
    @close="visible = false"
  />
</template>
<script setup lang="ts">
import { PoweroffOutlined, RightOutlined } from "@ant-design/icons-vue";
import { Button, Image as VanImage, CouponCell, CouponList } from "vant";
import { Grid, GridItem } from "vant";
import { useRouter } from "vue-router";
import { idInfo, deleteUser } from "../../../api/user";
import { ref, onMounted, watch } from "vue";
import { computed } from "vue";
import Save from "./save.vue";
const router = useRouter();
const previewImage = ref(
  "https://image.tianjimedia.com/uploadImages/2016/133/18/14B9WJ5PH12U_600.jpg"
);
const user = ref({});
const type = ref("add");
const visible = ref(false);
const edit = () => {
  visible.value = true;
  type.value = "edit";
};
const show = () => {
  visible.value = true;
  type.value = "show";
};
const deleteById = (id) => {
  console.log("deleteById");
  deleteUser(id).then(() => {
    message.success("删除成功");
    getAll(currentPage.value);
  });
  returnLogin();
};
const onSave = () => {
  visible.value = false;
  idInfo(user.value?.id).then((resp) => {
    console.log(resp);
    user.value = resp;
    localStorage.setItem("user", JSON.stringify(resp));
  });
};
const returnLogin = () => {
  router.push({
    name: "login",
  });
};
onMounted(() => {
  user.value = JSON.parse(localStorage.getItem("user"));
  console.log(user.value);
});

// //改变头像
// const handleFileChange = (event) => {
//   //预览头像
//   const file = event.target.files[0];
//   if (file && file.type.match(/^image\//)) {
//     const reader = new FileReader();
//     reader.onload = () => {
//       previewImage.value = reader.result; // 将读取的数据URL赋值给预览图像的src属性
//     };
//     console.log(file);
//     reader.readAsDataURL(file); // 将文件读取为数据URL
//   }
//   //
//   submitupdataImg(file);
// }
// const submitupdataImg = async (file) => {
//   const forms = new FormData();
//   forms.append("file", file);
//   let result = await uploadimage(forms, this.user.id);
//   if (result.status === 200) {
//     console.log("上传图片成功");
//   } else {
//     alert("上传图片失败");
//   }
// };
</script>
<!-- scoped: 作用域，当前css只当前的组件生效-->
<style lang="less" scoped>
.personal_card {
  margin: 5px;
  margin-top: 20px;
  border-radius: 10px;
  text-align: justify;
}
</style>
