/**
 * login event
 * @description 当机器人登录完全成功时，将发出登录事件
 */

module.exports = {
  name: 'login',
  /**
   * 处理登录成功回调
   * @param {Object} user 登录用户
   */
  async handle(user) {
    if (!user.payload) return

    const { name, weixin, id } = user.payload
    console.log(`登录成功，
    \n用户: "${name}"
    \n微信号: "${weixin}"
    \nID: "${id}"`)
  }
}