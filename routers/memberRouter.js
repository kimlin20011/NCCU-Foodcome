const router = require('koa-router')();
const member = require('../controllers/memberController');
const passport = require('../config/passport');

module.exports = router
    .get('/', function (req, res, next) {
        res.render('index', { title: 'Express' })
    })
    .get('/success', function (req, res, next) {
        // console.log(req.user);
        res.render('success', { data: req.user })
    })
    .get('/auth/facebook', passport.authenticate('facebook'))
    .get('/auth/facebook/callback',
        passport.authenticate('facebook', {
            successRedirect: '/success',
            failureRedirect: '/'
        }));
//  .post(`/signIn`,member.addUser);


// router.get('/', function (req, res, next) {
//     res.render('index', { title: 'Express' });
// });

// router.get('/success', function (req, res, next) {
//     // console.log(req.user);
//     res.render('success', { data: req.user });
// })

// router.get('/auth/facebook', passport.authenticate('facebook'));

// router.get('/auth/facebook/callback',
//     passport.authenticate('facebook', {
//         successRedirect: '/success',
//         failureRedirect: '/'
//     }));