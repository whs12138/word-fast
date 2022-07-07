
<template>
  <div class="switch-container" @click="handelClick">
    <div class="float-box"></div>
  </div>
</template>
<script setup>
import { ref, watch, defineEmits } from 'vue'

const state = ref(false) // 当前开关状态，默认false
const bgc =  ref('#CCC') // 背景色，默认#CCC
const FLeft = ref('0px') // 左边距

// 父组件事件
const emit = defineEmits(['change'])

// 监听Switch状态
watch(state ,() => {
  if (state.value) {
    bgc.value = 'blue'
    FLeft.value = '30px'
  } else {
    bgc.value = '#CCC'
    FLeft.value = '0px'
  }
})

// 触发点击事件
function handelClick() {
 state.value = !state.value
 emit('change',state.value)
}
</script>

<style scoped>
.switch-container {
  height: 21px;
  width: 50px;
  background-color: v-bind(bgc);
  border: 1px solid v-bind(bgc);
  border-radius: 10px;
  transition: all 0.4s;
  position: relative;
  overflow: hidden;
}
.float-box {
  width: 18px;
  height: 18px;
  background-color: #FFF;
  border-radius: 50%;
  position: absolute;
  transition: all 0.4s;
  left: v-bind(FLeft);
  top: 50%;
  transform: translateY(-50%);
}
</style>
