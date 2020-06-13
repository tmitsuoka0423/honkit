const cheerio = require("cheerio");
const Promise = require("../../utils/promise");

/**
    Apply a list of operations to a page and
    output the new page.

    @param {Page}
    @param {List|Array<Transformation>}
    @return {Promise<Page>}
*/
function modifyHTML(page, operations) {
    const html = page.getContent();
    const $ = cheerio.load(html);

    return Promise.forEach(operations, (op) => {
        return op($);
    }).then(() => {
        const resultHTML = $.html();
        return page.set("content", resultHTML);
    });
}

module.exports = modifyHTML;
