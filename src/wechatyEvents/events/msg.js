/**
 * message event
 * @description 当收到消息时，会发出接收到消息事件
 */

module.exports = {
  name: 'message',
  /**
   * 处理接收消息事件回调
   * @param {Object} message 消息
   */
  handle(msg) {
    console.log(msg.room())
  }
}