const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const userSchema = require('../Model/userSchema');

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: process.env.CALLBACK_URL,
    },
    async (accessToken, refreshToken, profile, done) => {
      try {
        let existingUser = await userSchema.findOne({ googleId: profile.id });

        if (!existingUser) {
          existingUser = await userSchema.create({
            name: profile.displayName,
            email: profile.emails[0].value,
            googleId: profile.id,
            isVerify: true,
          });
        }

        return done(null, existingUser);
      } catch (err) {
        return done(err, null);
      }
    }
  )
);

passport.serializeUser((user, done) => {
  done(null, user.id);
});
passport.deserializeUser(async (id, done) => {
  const user = await userSchema.findById(id);
  done(null, user);
});
