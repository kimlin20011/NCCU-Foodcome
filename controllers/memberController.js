//const authentication_req = require('../models/authentication_req');


module.exports = {
    async signIn(ctx) {
       // let formData = ctx.request.body
        let res = {
            result:{},
        };

     //   let deploy_result =  await deploy();
     //   res.result = deploy_result;

        ctx.body = res;
    },

};
