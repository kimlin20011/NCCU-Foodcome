/**
 * 整合所有子路由
 */

const router = require('koa-router')();

const member = require('./memberRouter');

//router.use('/', home.routes(), home.allowedMethods())
router.use('/member', member.routes(), member.allowedMethods());

module.exports = router;
