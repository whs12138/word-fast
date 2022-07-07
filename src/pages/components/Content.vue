<!-- 内容模块 -->
<template>
  <div class="content-container">
    <h2>{{ data.showWord }}</h2>
    <h4 class="ukphone">/{{ data.ukphone }}/</h4>
    <br>
    <ul>
      <li v-for="item in data.trans" key="item" class="mean">
        <span class="category">{{ item.pos }}.</span>
        {{ item.tranCn }}<br>
      </li>
    </ul>
    <br>
    <ul>
      <li v-for="item in data.sentences" key="item" class="sentence">
        {{ item.sContent }} <br>
        {{ item.sCn }}
      </li>
    </ul>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'
defineProps({
  data: Object
})

</script>

<style scoped>
h2 {
  font-size: 80px;
  letter-spacing: 2px;
  text-align: center;
}

.mean {
  font-size: 20px;
  text-align: left;
  margin-bottom: 3px;
}

.sentence {
  margin-top: 10px;
  padding: 10px 8px;
  border-radius: 3px;
  font-style: italic;
  color: rgb(62, 58, 58);
  background-color: rgb(177, 212, 187);
}

.category {
  padding: 1px 3px;
  border-radius: 2px;
  font-style: italic;
  background-color: #EEE;
  border: 1px solid rgb(179, 175, 175);
}
.ukphone {
  font-size: 20px;
  text-align: center;
  color: rgb(180, 172, 172);
}
</style>