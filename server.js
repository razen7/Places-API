const express = require('express');
const mongoose = require('mongoose');

const DB_URI = 'mongodb+srv://admin:wB3iDDpS8mfrW6ko@cluster0.gcqabka.mongodb.net/places?retryWrites=true&w=majority';

const app = express();

mongoose
    .connect(
        DB_URI,
        {
            useUnifiedTopology: true,
            useNewURLParser: true,
        },
    )
    .then(() => console.log('Connected to DB'))
    .catch((err) => console.log(err));

// Middleware usage
app.use(express.json());

// Router related usage
app.use('/', require('./routes/place.route'));

// hosting on port
app.listen(process.env.PORT || 8000);