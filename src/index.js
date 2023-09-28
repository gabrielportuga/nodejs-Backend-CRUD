require('dotenv').config();
const express = require('express');
const cors = require('cors');

const app = express();

const swaggerDocument = require('../swagger/docs/swagger-output.json');

const loginRoute = require('./routes/loginRoute');
const cardsRoute = require('./routes/cardRoute');


app.use(cors());
app.use(express.json());

app.use((req, res, next) => { 
    console.log(req.url, req.params, req.body);
    next();
})

// Routes
app.use('/', loginRoute);
app.use('/cards', cardsRoute);


app.use('/swagger', (require('swagger-ui-express')).serve, (require('swagger-ui-express')).setup(swaggerDocument));

async function init() {
    app.listen(5000, () => console.log("listening on http://localhost:5000"));
}

init();
