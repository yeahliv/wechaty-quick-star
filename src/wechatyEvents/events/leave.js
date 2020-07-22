/**
 * room-leave event
 * @description 当有人离开微信群时，微信群离开事件会发出。
 */

module.exports = {
  name: 'room-leave',
  /**
   * 处理有人离开微信群时事件回调
   * @param {Object} room 微信群
   * @param {Array} leaverList 离开者列表
   * @param {Object} remover 离开者
   */
  async handle(room, leaverList, remover) { }
}