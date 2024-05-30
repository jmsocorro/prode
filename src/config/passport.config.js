import passport from "passport";
import local from "passport-local";
import UserModel from "../models/Usuarios.Model.js";

const LocalStrategy = local.Strategy;

const initializePassport = () => {
    passport.use('register', new LocalStrategy({
        passReqToCallback: true,
        usernameField: 'email'
    }, async (req, username, password, done) => {
        const { first_name, last_name, email, age } = req.body;
        try {
            const user = await UserModel.create({
                first_name,
                last_name,
                email,
                age,
                password
            })
            return done(null, user)
        } catch (error) {
            return done(error)
        }
    }))
}

export default initializePassport;