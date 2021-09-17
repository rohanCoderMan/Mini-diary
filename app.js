var express = require("express");
var path = require("path");
var mongoose = require("mongoose");
var bodyParser = require("body-parser");
var cookieParser = require("cookie-parser");
var passport = require("passport");
var session = require("express-session");
var flash = require("connect-flash");
var params = require("./params/params");

var setUpPassport = require("./setuppassport");
//var routes = require("./routes");

var app = express();

mongoose.connect(params.DATABASECONNECTION, {useUnifiedTopology:true, useNewUrlParser:true, useCreateIndex:true});
setUpPassport();

app.set("port", process.env.PORT || 1234);
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended:false}));
app.use(cookieParser());
app.use(session({
    secret:"SUPER_SECRET_CODE_NONE_SHALL_KNOW_1234_LALALALALALALAL_OMG_LOL_1234-(-)+Hoppe none guesses it :p+(-)jchdfbvihngimhirbnghjrh4ucureilwoiurcniut;oieorwvioutoiuyrtoeiwnvut8ueyrto96euoy6uyorewu;f,crrpqiwiurucoiunoeuworcowurgeneuroncgurocnuwgeonurgniueorugnwetiugitwugeutiuguititiititititittttttttttttttttttttignubbbbbbitubnitubitutiubutututututuuuuuuuuuuuuuuuutgitugitutitututiututitiututuituituiutjghghgtutuhgughhghgjjfjfjfjffkdsjfl.n ljn",
    resave:false,
    saveUninitialized:false
}));

app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

app.use("/", require("./routes/web"));

app.listen(app.get("port"), function(){
    console.log("Server started on port " + app.get("port"));
})
