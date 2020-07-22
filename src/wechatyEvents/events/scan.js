/**
 * scan event
 * @description 当机器人需要显示扫描二维码时，会发出扫描事件
 */

const qrTerminal = require("qrcode-terminal")

module.exports = {
  name: 'scan',
  /**
   * 处理扫描二维码回调
   * @param {String} url URL
   * @param {Number} code URL 类型
   */
  handle(url, code) {
    if (code === 2) {
      qrTerminal.generate(url, { small: true })
    } else {
      console.log(`url type code is "${code}"`)
    }
  }
}