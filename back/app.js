const express = require('express')
require('dotenv').config()
const app = express()
const mongoose = require('mongoose')
const helmet = require("helmet")
//const path = require('path')
const xss = require('xss-clean')
const mongoSanitize = require('express-mongo-sanitize')


//ROUTES
const RoadWords = require('./routes/words')
const RoadResponse = require('./routes/response')

mongoose.connect(`mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@${process.env.MONGO_CLUSTER}/?retryWrites=true&w=majority`,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => console.log('Connexion à MongoDB réussie !'))
    .catch((err) => console.log('Connexion à MongoDB échouée ! ' + '' + err));

app.use(express.json());

// CORS - Cross Origin Resource Sharing
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET');
    next();
})

//Enregistrement routes 
app.use(xss())
app.use(mongoSanitize({ allowDots: true, replaceWith: '_', }))
app.use(process.env.WORDS, RoadWords)
app.use(process.env.RESPONSE, RoadResponse)
//app.use('/assets', express.static(path.join(__dirname, 'assets')))
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }))


module.exports = app;
