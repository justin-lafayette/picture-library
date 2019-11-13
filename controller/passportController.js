
module.exports = {
    signIn: function(req,res) {
       // console.log("signIn authenticated!");
        //console.log("user", req.user);
        res.json(req.user);
    }
    // }
};