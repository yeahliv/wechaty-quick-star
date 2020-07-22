/**
 * @description 入口文件
 */

const { Wechaty } = require("wechaty")
const { PuppetPadplus } = require("wechaty-puppet-padplus")
// 监听处理合集
const wyEvents = require('./src/wechatyEvents/index')

// 配置
const config = {
  token: '你的 token',
  name: '你的名字'
}

// 实例化
const bot = new Wechaty({
  puppet: new PuppetPadplus({
    token: config.token
  }),
  name: config.name
})


// 遍历绑定事件处理
for (let key in wyEvents) {
  bot.on(wyEvents[key].name, wyEvents[key].handle)
}

// 启动
bot.start()