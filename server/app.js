/**
 * DOTBB (Bulletin Board)
 * Version: 0.1.0
 * Author: Sam Wilcox <sam@dot-bb.com>
 * 
 * Website: https://www.dot-bb.com
 * 
 * User End License Agreement:
 * https://license.dot-bb.com
 */

const express = require('express');
const app = express();
const port = process.env.PORT || 3001;

app.get('/', (req, res) => {
    res.send('Hello!');
});

app.listen(port, () => {
    console.log(`DOTBB server is running on port ${port}`);
});