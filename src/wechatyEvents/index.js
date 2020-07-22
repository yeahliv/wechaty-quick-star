/**
 * @description 所有 wechaty 事件汇总
 */

const events = {}

// 错误
// events.error = require('./events/error')

// 好友请求
events.friend = require('./events/friend')

// 邀请
events.invite = require('./events/invite')

// 入群
events.join = require('./events/join')

// 退群
events.leave = require('./events/leave')

// 登录
events.login = require('./events/login')

// 退出
events.loginout = require('./events/loginout')

// 消息
events.msg = require('./events/msg')

// 扫描
events.scan = require('./events/scan')

// 群名
events.topic = require('./events/topic')

module.exports = events