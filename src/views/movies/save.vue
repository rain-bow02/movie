<template>
  <div>
    <a-modal visible :title="(type==='add')?'新增电影':(type==='edit')?'修改电影':'查看电影详情'" @ok="handleOk" @cancel="close">
      <a-form
        :model="movie"
        ref="formRef"
        v-bind="layout"
        name="nest-messages"
        :validate-messages="validateMessages"
        @finish="onFinish"
      >
        <a-form-item
          name="name"
          label="电影名"
          :rules="[{ required: true }]"
        >
          <a-input v-model:value="movie.name" :disabled="(type==='show')"/>
        </a-form-item>
        <a-form-item
           name="genre"
          label="类型："
          :rules="[{ required: true }]"
        >
          <a-input v-model:value="movie.genre" :disabled="(type==='show')"/>
        </a-form-item>
        <a-form-item
           name="name"
          label="简介："
        >
          <a-input v-model:value="movie.intro" :disabled="(type==='show')"/>
        </a-form-item>
       <a-form-item
           name="name"
          label="导演："
        >
          <a-input v-model:value="movie.director" :disabled="(type==='show')"/>
        </a-form-item>
        <a-form-item
           name="name"
          label="主演："
        >
          <a-input v-model:value="movie.actors" :disabled="(type==='show')"/>
        </a-form-item>
        <a-form-item
           name="name"
          label="编剧："
        >
          <a-input v-model:value="movie.writers" :disabled="(type==='show')"/>
        </a-form-item>
        <a-form-item
           name="name"
          label="发行时间："
        >
          <a-input v-model:value="movie.release_time" :disabled="(type==='show')"/>
        </a-form-item>
        <a-form-item
           name="name"
          label="时长："
        >
          <a-input v-model:value=" movie.time" :disabled="(type==='show')"/>
        </a-form-item>
      </a-form>
    </a-modal>
  </div>
</template>
<script lang="ts" setup>
import { defineProps, reactive,watch,ref } from "vue";

import {
  addMovie,updateMovie
} from "../../api/movies";
const emits = defineEmits(['save', 'close','updateTree'])

const formRef = ref<any>()
const props = defineProps({
    // 模型id
    data: {
        type: Object,
        default: {},
    },
    type:{
      type:String,
      default:"add",
    }
})
const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
const close=()=>{
  emits('close')
}
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

const movie = ref({
    name: "",
    genre: "",
    intro: "",
    director: "",
    actors: "",
    writers: "",
    release_time:"",
    time: "",
 
});
const onFinish = (values: any) => {
  console.log("Success:", values);
};
const handleOk=()=>{
  console.log("Success:", movie.value);
  formRef.value?.validate().then(() => {
        if (props.data.id) {
            updateMovie(props.data.id, movie.value)
        } else {
            addMovie(movie.value)
        }
    })
    
  emits('close')
}
watch(
    () => props.data,
    () => {
       movie.value= props.data
      console.log( movie.value)
    },
    { deep: true, immediate: true }
)
</script>
