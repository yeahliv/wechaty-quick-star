/**
 * error event
 * @description 当发生错误时，将发出错误事件
 */

module.exports = {
  name: 'error',
  /**
   * 处理错误回调
   * @param {Object} error 错误
   */
  handle(error) { console.log(`Error: \n  ${error}`) }
}