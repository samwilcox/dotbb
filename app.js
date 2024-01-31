/**
 * DOT.BB
 * By Sam Wilcox <sam@dot-bb.com
 * 
 * https://www.dot-bb.com
 * 
 * View the user-end license agreement at:
 * https://license.dot-bb.com
 */

const express = require('express');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.use(express.static('public'));

const dbModule = require('./lib/Data/database.js');
const db = new dbModule();
db.connect();

// Implementation of routes here
app.get('/', (req, res) => {
    const userTheme = 'dotbb-default';
    res.render(`${userTheme}/forums`, { theme: userTheme});
});

app.listen(port, () => {
    console.log(`DOT.BB server is listening on port ${port}`);
});