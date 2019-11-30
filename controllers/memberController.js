//const authentication_req = require('../models/authentication_req');
//const passport = require('../config/passport');
//onst session = require('koa-session')
const fs = require('fs')


module.exports = {
    async login(ctx) {
        try {
            // let formData = ctx.request.body
            console.log(`session`)
            console.log(ctx.session)
            console.log(ctx.request)

            let res = {
                result: {},
            };
            //   let deploy_result =  await deploy();
            //   res.result = deploy_result;
            ctx.redirect('/login.html');
            ctx.body = res;

        } catch (error) {
            ctx.body = error;
        }
    },
    async success(ctx) {
        // let formData = ctx.request.body
        //let data = ctx.request.user
        try {
            console.log(`success`)
            console.log(ctx.session)
            console.log(`user:${ctx.session.passport.user.displayName}`)
            fs.writeFileSync('./displayName.txt', ctx.session.passport.user.displayName);
            let res = {};
            res.displayName = ctx.session.passport.user,
                //   let deploy_result =  await deploy();
                //   res.result = deploy_result;

                ctx.body = res;
            ctx.redirect('/landingPageLogined.html');

        } catch (error) {
            ctx.body = error;
        }
    },
    async displayName(ctx) {
        try {
            let displayName = fs.readFileSync('./displayName.txt').toString();
            console.log(`displayName:${displayName}`)
            ctx.body = displayName;
        } catch (error) {
            ctx.body = error;
        }
    },
    // async authentication(ctx) {
    //     try {
    //         console.log(`oauth1`)
    //         let res = `oauth1`
    //         passport.authenticate('facebook')
    //         ctx.body = res;
    //     } catch (error) {
    //         ctx.body = error;
    //     }
    // },
    // async oauthCallback(ctx) {
    //     try {
    //         console.log(`oauth2`)
    //         let res = `oauth2`
    //         passport.authenticate('facebook', {
    //             successRedirect: '/member/success',
    //             failureRedirect: '/member/'
    //         })
    //         ctx.body = res;
    //     } catch (error) {
    //         ctx.body = error;
    //     }
    // }

};

