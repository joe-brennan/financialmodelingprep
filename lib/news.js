'use strict'

const {makeRequest, generateJson} = require('./utilities');

module.exports = (stock) => ({
     stock_news: () => makeRequest('stock_news', generateJson(stock))
});