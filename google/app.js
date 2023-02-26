
require("dotenv").config();

const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const mongoose = require("mongoose");
const session=require("express-session")
app.use(session({
    resave: false,
    saveUninitialized: true,
    secret: 'secret' 
  }));
const db = "mongodb://localhost:27017/auth";
mongoose.connect(
  db,
  {
    useUnifiedTopology: true,
    useNewUrlParser: true,

  },
  (error) => {
    if (error) console.log(error);
  }
);

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.engine("html", require("ejs").renderFile);
app.use(express.static(__dirname + "/public"));

app.use(cookieParser());

app.get("/", (req, res) => {
  res.render("index.ejs");
});

//...
const passport = require("passport");
require("./src/config/google");
require("./src/config/passport");


//...

app.use(passport.initialize());
app.use(passport.session());

app.get(
  "/auth/google",
  passport.authenticate("google", {
    scope: ["profile", "email"],
  })
);

app.get(
  "/auth/google/callback",
  passport.authenticate("google", {
    failureRedirect: "/",
    successRedirect: "/profile",
    failureFlash: true,
    successFlash: "Successfully logged in!",
  })
);
const flash = require("express-flash");

app.use(
  session({
    secret: "secr3t",
    resave: false,
    saveUninitialized: true,
  })
);

app.use(flash());
const isLoggedIn = (req, res, next) => {
    req.user ? next() : res.sendStatus(401);
  };
  
  app.get("/profile", isLoggedIn, (req, res) => {
    res.render("profile.ejs", { user: req.user });
  });
  app.get("/auth/logout", (req, res) => {
    req.flash("success", "Successfully logged out");
    req.session.destroy(function () {
      res.clearCookie("connect.sid");
      res.redirect("/");
    });
  });


app.listen(3000, function () {
  console.log("SaaSBase Authentication Server listening on port 3000");
});