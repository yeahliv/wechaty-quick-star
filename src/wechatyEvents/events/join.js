/**
 * room-join event
 * @description 当有人加入微信群时，会发出微信群加入事件
 */

module.exports = {
  name: 'room-join',
  /**
   * 处理加入微信群事件回调
   * @param {Object} room 微信群
   * @param {Array} inviteeList 被邀请列表
   * @param {Object} inviter 发出邀请者
   */
  async handle(room, inviteeList, inviter) { }
}