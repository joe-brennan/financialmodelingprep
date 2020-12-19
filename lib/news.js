'use strict'

const {makeRequest, generateJson} = require('./utilities');

function getExports() {
     return (stock) => ({
          stock_news: () => makeRequest('stock_news', generateJson(stock))
     });
}

module.exports = getExports();