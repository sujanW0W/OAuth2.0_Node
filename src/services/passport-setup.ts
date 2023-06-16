import passport from 'passport'
import passportGoogle from 'passport-google-oauth20'

import User from '../model/users'

const GoogleStrategy = passportGoogle.Strategy

passport.use(new GoogleStrategy({
    //Options for google
    clientID: String(process.env.GOOGLE_CLIENT_ID),
    clientSecret: String(process.env.GOOGLE_CLIENT_SECRET),
    callbackURL: '/auth/google/redirect'
}, (accessToken, refreshToken, profile, done) => {
     //callback which is executed once the redirect code has be received
     const {_json: data} = profile
     const userInfo = {
        id : Number(data.sub),
        name: data.name?.replace(' ', '_'),
        picture: data.picture
     }

    User.create(userInfo)
        .then( () => {
            console.log("New user created. ", userInfo)
        })


}))
