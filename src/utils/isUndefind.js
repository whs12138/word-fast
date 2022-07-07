/**
 * 
 * @param {*} el 
 * @returns data<Array> | ['No data']
 * 检测是否有例句
 */
export const isUndefind =  (el) => {
  if(el) {
    return el.sentences // 返回例句
  } else {
    return ['No data'] // 返回没有数据提示
  }
}
