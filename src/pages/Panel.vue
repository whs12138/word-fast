<!-- panel 主页界面 -->
<template>
  <div class="panel-container">
    <!-- 切换按钮 -->
    <div class="select-box">
      <Switch @change="handelChange"></Switch>
    </div>
    <!-- 数据内容 -->
    <Content :data="data"></Content>
    <!-- 点击下一个 -->
    <button 
      class="next" 
      :class="{ hiddenBox: model }" 
      @click="userClickModel">
      next
    </button>
    <!-- 播放器 -->
    <audio :src="data.src" autoplay></audio>
  </div>
</template>

<script setup>
import { onMounted, watch, ref } from 'vue'
import { useLoadWord, useOrderTimer, userClickModel, data } from '../mix/use'
import Switch from '../components/Switch.vue' // 模式切换组件
import Content from '../pages/components/Content.vue' // 数据内容组件

const model = ref(false) // 当前播放模式 true->自动  false->点击

// 子组件调用事件
function handelChange(value) {
  model.value = value
}

// 数据初始化
onMounted(() => {
  useLoadWord()
})

// 监听模式状态
watch(model, () => {
  model.value ? useOrderTimer() : userClickModel()
})
</script>

<style scoped>
.panel-container {
  width: 100%;
  height: 100%;
  padding-top: 120px;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-y: scroll;
  padding-bottom: 20px;
}

.select-box {
  position: fixed;
  right: 50px;
  top: 50px;
}

.next {
  position: fixed;
  bottom: 50px;
  right: 50px;
  width: 50px;
  height: 50px;
  border: 0;
  outline: none;
  border-radius: 50%;
  background-color: rgb(47, 170, 106);
  color: #eee;
}

.hiddenBox {
  display: none;
}
</style>