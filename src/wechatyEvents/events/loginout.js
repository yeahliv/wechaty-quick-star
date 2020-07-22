/**
 * logout event
 * @description 用户退出时,发出用户退出事件
 */

module.exports = {
  name: 'logout',
  /**
   * 处理用户退出回调
   * @param {Object} user 用户
   */
  handle(user) {
    if (!user.payload) return

    const { name, weixin, id } = user.payload
    console.log(`退出登录，
    \n用户: "${name}"
    \n微信号: "${weixin}"
    \nID: "${id}"`)
  }
}