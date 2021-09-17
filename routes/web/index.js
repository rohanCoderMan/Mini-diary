var express = require("express");

var router = express.Router();


router.use(function(req,res, next){
    res.locals.currentUser = req.user;
    res.locals.error = req.flash("error");
    res.locals.info = req.flash("info");

    next();
});

 router.get("/myposts", function(req, res){
    Post.find({userID:req.user._id}).exec(function(err, posts){
        if(err){console.log(err);}

        res.render("post/myposts", {posts:posts});
    });
 });
router.use("/", require("./home"));
router.use("/posts", require("./post"));



module.exports = router;
