const express = require('express');
const Scrapper = require('./src/Scrapper.js');
const app = express();
const PORT = 3000
const cors = require('cors');

app.use(cors());

app.get("/results", async (req, res) => {

    const url = 'https://www.theguardian.com/uk';
    const htmlClass = '.fc-item__title';

    const scrapper = new Scrapper(url, htmlClass);
    const data = await scrapper.scrap();

    res.send(data);

});

app.listen(PORT, () => console.log('listening on port ' + PORT))