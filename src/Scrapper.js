const axios = require('axios');
const cheerio = require('cheerio');

class Scrapper {

    constructor(url, htmlClass) {
        this.url = url;
        this.htmlClass = htmlClass;
    }

    async scrap() {
        try {

            const response = await axios(this.url);
            const html = response.data;
            const $ = cheerio.load(html);
            const articles = [];

            $(`${this.htmlClass}`, html).each(function () {
                const title = $(this).text();
                const url = $(this).find('a').attr('href');

                articles.push({ title, url });

            });

            return articles;
        } catch (error) {
            console.error(error);
        }
    }

}

module.exports = Scrapper;