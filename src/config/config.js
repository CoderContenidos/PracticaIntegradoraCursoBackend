import dotenv from 'dotenv';

dotenv.config();

export default {
    mailing:{
        SERVICE: process.env.MAILING_SERVICE,
        USER: process.env.MAILING_USER,
        PASSWORD: process.env.MAILING_PASSWORD
    },
    mongo:{
        USER : process.env.MONGO_USER,
        PWD: process.env.MONGO_PASSWORD,
        DB: process.env.MONGO_DATABASE
    },
    jwt: {
        COOKIE: process.env.JWT_COOKIE,
        SECRET: process.env.JWT_SECRET
    }
}