require("dotenv").config();
const passport = require("passport");
const UserService = require("../user/user.service");
const UserCrl=require("../user/user.model")
const GoogleStrategy = require("passport-google-oauth2").Strategy;

passport.use(
  new GoogleStrategy(
    {
      clientID: "566158259627-99mcih6f02ei92cnae4t716a979riv00.apps.googleusercontent.com",
      callbackURL: "http://localhost:3000/auth/google/callback",
      clientSecret: "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",
    },
    async (accessToken, refreshToken, profile, done) => {
        const id = profile.id;
      const email = profile.emails[0].value;
      const firstName = profile.name.givenName;
      const lastName = profile.name.familyName;
      const profilePhoto = profile.photos[0].value;
      const source = "google";
      const currentUser = await UserService(UserCrl.userModel).getUserByEmail({
        email,
      });

      if (!currentUser) {
        const newUser = await UserService(UserCrl.userModel).addGoogleUser({
          id,
          email,
          firstName,
          lastName,
          profilePhoto,
        });
        return done(null, newUser);
      }

      if (currentUser.source != "google") {
        //return error
        return done(null, false, {
          message: `You have previously signed up with a different signin method`,
        });
      }

      currentUser.lastVisited = new Date();
      return done(null, currentUser);
    }
  )
);