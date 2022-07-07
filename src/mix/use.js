import { reactive } from 'vue'
import { res } from '../assets/book/CET4'
import { isUndefind } from '../utils/isUndefind'

let index = 0 // 当前单词索引
var timer = null; // 定义定时器

// 数据对象
export let data = reactive({
  showWord: '', // 单词
  sentences: [], // 句子 sentence<Object> -> sentences<Array>
  trans: [],  // [] 翻译 -> {tranCn ,pos}
  ukphone: '', // 音标
  src: '' // 播放链接
})

// 使用自动播放，设置定时器
export function useOrderTimer() {
  timer = setInterval(() => {
    nextWord()
  }, 2000)
}

// 使用点击播放
export function userClickModel() {
  nextWord()
  clearInterval(timer) // 移出定时器
}

// 加载单词数据、播放链接
export function useLoadWord() {
  data.showWord = res[index].headWord
  data.sentences = isUndefind(res[index].content.word.content.sentence)
  data.trans = res[index].content.word.content.trans
  data.ukphone = res[index].content.word.content.ukphone
  data.src = `https://dict.youdao.com/dictvoice?audio=${res[index].headWord}&type=1`

}

// 下一个单词
function nextWord() {
  if (index === 0) { index++ }
  useLoadWord()
  index++
}



