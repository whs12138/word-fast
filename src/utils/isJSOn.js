/**
 * 
 * @param {str} str 
 * @returns true or false
 * 检测是否为可解析的JSON数据
 */
export function isJson(str) {
  if (typeof str == 'string') {
    try {
      let obj = JSON.parse(str);
      if (typeof obj == 'object' && obj) {
        return true;
      } else {
        return false;
      }

    } catch (e) {
      console.log('error：' + str + '!!!' + e);
      return false;
    }
  }
}