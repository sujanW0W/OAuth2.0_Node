import passport from 'passport'
import passportGoogle from 'passport-google-oauth20'

import User from '../model/users'

const GoogleStrategy = passportGoogle.Strategy

passport.serializeUser((user: {id?: number}, done) => {
    done(null, user.id)
})

passport.deserializeUser( (id, done) => {
    User.findOne({where: {id}})
            .then( (user) => {
                done(null, user)
            })
})

passport.use(new GoogleStrategy({
    //Options for google
    clientID: String(process.env.GOOGLE_CLIENT_ID),
    clientSecret: String(process.env.GOOGLE_CLIENT_SECRET),
    callbackURL: '/auth/google/redirect'
}, (accessToken, refreshToken, profile, done) => {
     //callback which is executed once the redirect code has be received
     const {_json: data} = profile
     const userInfo = {
        googleId: data.sub,
        name: data.name?.replace(' ', '_'),
        picture: data.picture
     }

    //Check if the user already exists.
    User.findOne({where: {googleId: userInfo.googleId}})
        .then( (currentUser) => {
            if(currentUser){
                //User already exists
                console.log("User already exists : ", JSON.parse(JSON.stringify(currentUser)))

                done(null, currentUser)
            }
            else{
                //user does not exist
                User.create(userInfo)
                .then( (newUser) => {
                    console.log("New user created. ", JSON.parse(JSON.stringify(newUser)))

                    done(null, newUser)
                })
            }
        }
        )
}))