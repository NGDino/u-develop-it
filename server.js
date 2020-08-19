const express = require('express');
const PORT = process.env.PORT || 3001;
const app = express();
// const sqlite3 = require('sqlite3').verbose(); // to database.js
const inputCheck = require('./utils/inputCheck');

//link to database.js
const db = require('./db/database');

//connect to api routes
const apiRoutes = require('./routes/apiRoutes');
app.use('/api', apiRoutes);

app.use(express.urlencoded({
    extended: false
}));
app.use(express.json());

// Default response for any other request(Not Found) Catch all
app.use((req, res) => {
    res.status(404).end();
});

//start server after db connection
db.on('open', () => {
    app.listen(PORT, () => {
        console.log(`server running on ${PORT}`)

    });
});