/**
 * room-leave event
 * @description 当有人改变微信群名的时，会产生微信群事件
 */

module.exports = {
  name: 'room-topic',
  /**
   * 处理微信群名变更回调
   * @param {Object} room 微信群
   * @param {String} topic 新群名
   * @param {String} oldTopic 旧群名
   * @param {Object} changer 变更者
   */
  async handle(room, topic, oldTopic, changer) { }
}