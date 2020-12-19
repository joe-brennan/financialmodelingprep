'use strict'

const chai = require('chai');
const chaiHttp = require('chai-http');

const expect = chai.expect;
chai.use(chaiHttp);

const news = require('../lib/news');

describe('.news', () => {
    describe('.profile', () => {
        it('AAPL news should return valid data', (done) => {
            chai.request('https://financialmodelingprep.com/api/v3')
                .get('/stock_news/?tickers=AAPL&apikey=898a215eba1517a64c8c963bb4b43e3e')
                .end((err, res) => {
                    news('AAPL').stock_news().then((response) => {
                            console.log(response)
                            expect(res.body).to.eql(response);
                            done();
                        })
                        .catch(done);
                })

        });
        //
        //     it('[\'AAPL,MSFT\'] news should return valid data', (done) => {
        //         chai.request('https://financialmodelingprep.com/api/v3')
        //             .get('/company/profile/AAPL,MSFT')
        //             .end((err, res) => {
        //                 news(['AAPL', 'MSFT']).profile()
        //                     .then((response) => {
        //                         expect(res.body).to.eql(response);
        //                         done();
        //                     })
        //                     .catch(done);
        //             })
        //     });
        //
        //     it('\'aapl\' in lowercase should return valid data', (done) => {
        //         chai.request('https://financialmodelingprep.com/api/v3')
        //             .get('/company/profile/AAPL')
        //             .end((err, res) => {
        //                 news('aapl').profile()
        //                     .then((response) => {
        //                         expect(res.body).to.eql(response);
        //                         done();
        //                     })
        //                     .catch(done);
        //             })
        //     });
        //
        //     it('\'AAPL,MSFT\' should return valid data', (done) => {
        //         chai.request('https://financialmodelingprep.com/api/v3')
        //             .get('/company/profile/AAPL,MSFT')
        //             .end((err, res) => {
        //                 news('AAPL,MSFT').profile()
        //                     .then((response) => {
        //                         expect(res.body).to.eql(response);
        //                         done();
        //                     })
        //                     .catch(done);
        //             })
        //     });
        //
        //     it('undefined news value should return 404 error', (done) => {
        //         news().profile()
        //             .then((response) => {
        //                 expect(response).to.have.status(404);
        //                 done();
        //             })
        //             .catch(done);
        //     });
        //
        //     it('empty news value should return 404 error', (done) => {
        //         news('').profile()
        //             .then((response) => {
        //                 expect(response).to.have.status(404);
        //                 done();
        //             })
        //             .catch(done);
        //     });
        // });
        //
        // describe('.quote', () => {
        //     it('AAPL news should return valid data', (done) => {
        //         chai.request('https://financialmodelingprep.com/api/v3')
        //             .get('/quote/AAPL')
        //             .end((err, res) => {
        //                 news('AAPL').quote()
        //                     .then((response) => {
        //                         expect(res.body).to.eql(response);
        //                         done();
        //                     })
        //                     .catch(done);
        //             })
        //
        //     });
        //
        //     it('[\'AAPL,MSFT\'] news should return valid data', (done) => {
        //         chai.request('https://financialmodelingprep.com/api/v3')
        //             .get('/quote/AAPL,MSFT')
        //             .end((err, res) => {
        //                 news(['AAPL', 'MSFT']).quote()
        //                     .then((response) => {
        //                         expect(res.body).to.eql(response);
        //                         done();
        //                     })
        //                     .catch(done);
        //             })
        //     });
        //
        //     it('\'aapl\' in lowercase should return valid data', (done) => {
        //         chai.request('https://financialmodelingprep.com/api/v3')
        //             .get('/quote/AAPL')
        //             .end((err, res) => {
        //                 news('aapl').quote()
        //                     .then((response) => {
        //                         expect(res.body).to.eql(response);
        //                         done();
        //                     })
        //                     .catch(done);
        //             })
        //     });
        //
        //     it('[\'aapl\', \'msft\'] in lowercase should return valid data', (done) => {
        //         chai.request('https://financialmodelingprep.com/api/v3')
        //             .get('/quote/AAPL,MSFT')
        //             .end((err, res) => {
        //                 news(['aapl', 'msft']).quote()
        //                     .then((response) => {
        //                         expect(res.body).to.eql(response);
        //                         done();
        //                     })
        //                     .catch(done);
        //             })
        //     });
        //
        //     it('\'AAPL,MSFT\' should return valid data', (done) => {
        //         chai.request('https://financialmodelingprep.com/api/v3')
        //             .get('/quote/AAPL,MSFT')
        //             .end((err, res) => {
        //                 news('AAPL,MSFT').quote()
        //                     .then((response) => {
        //                         expect(res.body).to.eql(response);
        //                         done();
        //                     })
        //                     .catch(done);
        //             })
        //     });
        //
        //     it('undefined news value should return 404 error', (done) => {
        //         news().quote()
        //             .then((response) => {
        //                 expect(response).to.have.status(404);
        //                 done();
        //             })
        //             .catch(done);
        //     });
        //
        //     it('empty news value should return 404 error', (done) => {
        //         news('').quote()
        //             .then((response) => {
        //                 expect(response).to.have.status(404);
        //                 done();
        //             })
        //             .catch(done);
        //     });
        // });
        //
        // describe('.rating', () => {
        //     it('AAPL news should return valid data', (done) => {
        //         chai.request('https://financialmodelingprep.com/api/v3')
        //             .get('/company/rating/AAPL')
        //             .end((err, res) => {
        //                 news('AAPL').rating()
        //                     .then((response) => {
        //                         expect(res.body).to.eql(response);
        //                         done();
        //                     })
        //                     .catch(done);
        //             })
        //
        //     });
        //
        //     it('[\'AAPL,MSFT\'] news should return valid data', (done) => {
        //         chai.request('https://financialmodelingprep.com/api/v3')
        //             .get('/company/rating/AAPL,MSFT')
        //             .end((err, res) => {
        //                 news(['AAPL', 'MSFT']).rating()
        //                     .then((response) => {
        //                         expect(res.body).to.eql(response);
        //                         done();
        //                     })
        //                     .catch(done);
        //             })
        //     });
        //
        //     it('\'aapl\' in lowercase should return valid data', (done) => {
        //         chai.request('https://financialmodelingprep.com/api/v3')
        //             .get('/company/rating/AAPL')
        //             .end((err, res) => {
        //                 news('aapl').rating()
        //                     .then((response) => {
        //                         expect(res.body).to.eql(response);
        //                         done();
        //                     })
        //                     .catch(done);
        //             })
        //     });
        //
        //     it('[\'aapl\', \'msft\'] in lowercase should return valid data', (done) => {
        //         chai.request('https://financialmodelingprep.com/api/v3')
        //             .get('/company/rating/AAPL,MSFT')
        //             .end((err, res) => {
        //                 news(['aapl', 'msft']).rating()
        //                     .then((response) => {
        //                         expect(res.body).to.eql(response);
        //                         done();
        //                     })
        //                     .catch(done);
        //             })
        //     });
        //
        //     it('\'AAPL,MSFT\' should return valid data', (done) => {
        //         chai.request('https://financialmodelingprep.com/api/v3')
        //             .get('/company/rating/AAPL,MSFT')
        //             .end((err, res) => {
        //                 news('AAPL,MSFT').rating()
        //                     .then((response) => {
        //                         expect(res.body).to.eql(response);
        //                         done();
        //                     })
        //                     .catch(done);
        //             })
        //     });
        //
        //     it('undefined news value should return 404 error', (done) => {
        //         news().rating()
        //             .then((response) => {
        //                 expect(response).to.have.status(404);
        //                 done();
        //             })
        //             .catch(done);
        //     });
        //
        //     it('empty news value should return 404 error', (done) => {
        //         news('').rating()
        //             .then((response) => {
        //                 expect(response).to.have.status(404);
        //                 done();
        //             })
        //             .catch(done);
        //     });
        // });
        //
        // describe('.current_price', () => {
        //     it('AAPL news should return valid data', (done) => {
        //         chai.request('https://financialmodelingprep.com/api/v3')
        //             .get('/news/real-time-price/AAPL')
        //             .end((err, res) => {
        //                 news('AAPL').current_price()
        //                     .then((response) => {
        //                         expect(res.body).to.eql(response);
        //                         done();
        //                     })
        //                     .catch(done);
        //             })
        //
        //     });
        //
        //     it('[\'AAPL,MSFT\'] news should return valid data', (done) => {
        //         chai.request('https://financialmodelingprep.com/api/v3')
        //             .get('/news/real-time-price/AAPL,MSFT')
        //             .end((err, res) => {
        //                 news(['AAPL', 'MSFT']).current_price()
        //                     .then((response) => {
        //                         expect(res.body).to.eql(response);
        //                         done();
        //                     })
        //                     .catch(done);
        //             })
        //     });
        //
        //     it('\'aapl\' in lowercase should return valid data', (done) => {
        //         chai.request('https://financialmodelingprep.com/api/v3')
        //             .get('/news/real-time-price/AAPL')
        //             .end((err, res) => {
        //                 news('aapl').current_price()
        //                     .then((response) => {
        //                         expect(res.body).to.eql(response);
        //                         done();
        //                     })
        //                     .catch(done);
        //             })
        //     });
        //
        //     it('[\'aapl\', \'msft\'] in lowercase should return valid data', (done) => {
        //         chai.request('https://financialmodelingprep.com/api/v3')
        //             .get('/news/real-time-price/AAPL,MSFT')
        //             .end((err, res) => {
        //                 news(['aapl', 'msft']).current_price()
        //                     .then((response) => {
        //                         expect(res.body).to.eql(response);
        //                         done();
        //                     })
        //                     .catch(done);
        //             })
        //     });
        //
        //     it('\'AAPL,MSFT\' should return valid data', (done) => {
        //         chai.request('https://financialmodelingprep.com/api/v3')
        //             .get('/news/real-time-price/AAPL,MSFT')
        //             .end((err, res) => {
        //                 news('AAPL,MSFT').current_price()
        //                     .then((response) => {
        //                         expect(res.body).to.eql(response);
        //                         done();
        //                     })
        //                     .catch(done);
        //             })
        //     });
        //
        //     it('undefined news value should return all price values', (done) => {
        //         chai.request('https://financialmodelingprep.com/api/v3')
        //             .get('/news/real-time-price')
        //             .end((err, res) => {
        //                 news().current_price()
        //                     .then((response) => {
        //                         expect(res.body).to.eql(response);
        //                         done();
        //                     })
        //                     .catch(done);
        //             })
        //     });
        //
        //     it('empty news value should return all price values', (done) => {
        //         chai.request('https://financialmodelingprep.com/api/v3')
        //             .get('/news/real-time-price/')
        //             .end((err, res) => {
        //                 news('').current_price()
        //                     .then((response) => {
        //                         expect(res.body).to.eql(response);
        //                         done();
        //                     })
        //                     .catch(done);
        //             })
        //     });
        // });
        //
        // describe('.history', () => {
        //     it('should return valid of history of a news', (done) => {
        //         chai.request('https://financialmodelingprep.com/api/v3')
        //             .get('/historical-price-full/AAPL')
        //             .end((err, res) => {
        //                 news('AAPL').history()
        //                     .then((response) => {
        //                         expect(res.body).to.eql(response);
        //                         done();
        //                     })
        //                     .catch(done);
        //             })
        //     });
        //
        //     it('should return valid of history of a news for lowercase values', (done) => {
        //         chai.request('https://financialmodelingprep.com/api/v3')
        //             .get('/historical-price-full/AAPL')
        //             .end((err, res) => {
        //                 news('aapl').history()
        //                     .then((response) => {
        //                         expect(res.body).to.eql(response);
        //                         done();
        //                     })
        //                     .catch(done);
        //             })
        //     });
        //
        //     it('should return only data points until limit', (done) => {
        //         chai.request('https://financialmodelingprep.com/api/v3')
        //             .get('/historical-price-full/AAPL?timeseries=5')
        //             .end((err, res) => {
        //                 news('AAPL').history({ limit: 5 })
        //                     .then((response) => {
        //                         expect(res.body).to.eql(response);
        //                         done();
        //                     })
        //                     .catch(done);
        //             })
        //     });
        //
        //     it('should return only data points until limit in linear graph format', (done) => {
        //         chai.request('https://financialmodelingprep.com/api/v3')
        //             .get('/historical-price-full/AAPL?timeseries=5&serietype=line')
        //             .end((err, res) => {
        //                 news('AAPL').history({ data_type: 'line', limit: 5 })
        //                     .then((response) => {
        //                         expect(res.body).to.eql(response);
        //                         done();
        //                     })
        //                     .catch(done);
        //             })
        //     });
        //
        //     it('should return data points between a time interval', (done) => {
        //         chai.request('https://financialmodelingprep.com/api/v3')
        //             .get('/historical-price-full/AAPL?from=2018-03-12&to=2019-03-12')
        //             .end((err, res) => {
        //                 news('AAPL').history({ start_date: '2018-03-12', end_date: '2019-03-12' })
        //                     .then((response) => {
        //                         expect(res.body).to.eql(response);
        //                         done();
        //                     })
        //                     .catch(done);
        //             })
        //     });
        //
        //     it('should return 500 server error between a time interval with a data limit', (done) => {
        //         news('AAPL').history({ start_date: '2018-03-12', end_date: '2019-03-12', limit: 5 })
        //             .then((response) => {
        //                 expect(response).to.have.status(500);
        //                 done();
        //             })
        //             .catch(done);
        //     });
        //
        //     it('should return 500 server error between a time interval with a data limit for a line graph', (done) => {
        //         news('AAPL').history({ start_date: '2018-03-12', end_date: '2019-03-12', limit: 5, data_type: 'line' })
        //             .then((response) => {
        //                 expect(response).to.have.status(500);
        //                 done();
        //             })
        //             .catch(done);
        //     });
        // });
        //
        // describe('.dividend_history', () => {
        //     it('should return valid of history of a news', (done) => {
        //         chai.request('https://financialmodelingprep.com/api/v3')
        //             .get('/historical-price-full/stock_dividend/AAPL')
        //             .end((err, res) => {
        //                 news('AAPL').dividend_history()
        //                     .then((response) => {
        //                         expect(res.body).to.eql(response);
        //                         done();
        //                     })
        //                     .catch(done);
        //             })
        //     });
        //
        //     it('should return valid of history of a news for lowercase values', (done) => {
        //         chai.request('https://financialmodelingprep.com/api/v3')
        //             .get('/historical-price-full/stock_dividend/AAPL')
        //             .end((err, res) => {
        //                 news('aapl').dividend_history()
        //                     .then((response) => {
        //                         expect(res.body).to.eql(response);
        //                         done();
        //                     })
        //                     .catch(done);
        //             })
        //     });
        //
        //     it('should return only data points until limit', (done) => {
        //         chai.request('https://financialmodelingprep.com/api/v3')
        //             .get('/historical-price-full/stock_dividend/AAPL?timeseries=5')
        //             .end((err, res) => {
        //                 news('AAPL').dividend_history({ limit: 5 })
        //                     .then((response) => {
        //                         expect(res.body).to.eql(response);
        //                         done();
        //                     })
        //                     .catch(done);
        //             })
        //     });
        //
        //     it('should return only data points until limit in linear graph format', (done) => {
        //         chai.request('https://financialmodelingprep.com/api/v3')
        //             .get('/historical-price-full/stock_dividend/AAPL?timeseries=5&serietype=line')
        //             .end((err, res) => {
        //                 news('AAPL').dividend_history({ data_type: 'line', limit: 5 })
        //                     .then((response) => {
        //                         expect(res.body).to.eql(response);
        //                         done();
        //                     })
        //                     .catch(done);
        //             })
        //     });
        //
        //     it('should return data points between a time interval', (done) => {
        //         chai.request('https://financialmodelingprep.com/api/v3')
        //             .get('/historical-price-full/stock_dividend/AAPL?from=2018-03-12&to=2019-03-12')
        //             .end((err, res) => {
        //                 news('AAPL').dividend_history({ start_date: '2018-03-12', end_date: '2019-03-12' })
        //                     .then((response) => {
        //                         expect(res.body).to.eql(response);
        //                         done();
        //                     })
        //                     .catch(done);
        //             })
        //     });
        //
        //     it('should return 500 server error between a time interval with a data limit', (done) => {
        //         news('AAPL').dividend_history({ start_date: '2018-03-12', end_date: '2019-03-12', limit: 5 })
        //             .then((response) => {
        //                 expect(response).to.have.status(500);
        //                 done();
        //             })
        //             .catch(done);
        //     });
        //
        //     it('should return 500 server error between a time interval with a data limit for a line graph', (done) => {
        //         news('AAPL').dividend_history({ start_date: '2018-03-12', end_date: '2019-03-12', limit: 5, data_type: 'line' })
        //             .then((response) => {
        //                 expect(response).to.have.status(500);
        //                 done();
        //             })
        //             .catch(done);
        //     });
        // });
        //
        // describe('.split_history', () => {
        //     it('should return valid of history of a news', (done) => {
        //         chai.request('https://financialmodelingprep.com/api/v3')
        //             .get('/historical-price-full/stock_split/AAPL')
        //             .end((err, res) => {
        //                 news('AAPL').split_history()
        //                     .then((response) => {
        //                         expect(res.body).to.eql(response);
        //                         done();
        //                     })
        //                     .catch(done);
        //             })
        //     });
        //
        //     it('should return valid of history of a news for lowercase values', (done) => {
        //         chai.request('https://financialmodelingprep.com/api/v3')
        //             .get('/historical-price-full/stock_split/AAPL')
        //             .end((err, res) => {
        //                 news('aapl').split_history()
        //                     .then((response) => {
        //                         expect(res.body).to.eql(response);
        //                         done();
        //                     })
        //                     .catch(done);
        //             })
        //     });
        //
        //     it('should return only data points until limit', (done) => {
        //         chai.request('https://financialmodelingprep.com/api/v3')
        //             .get('/historical-price-full/stock_split/AAPL?timeseries=5')
        //             .end((err, res) => {
        //                 news('AAPL').split_history({ limit: 5 })
        //                     .then((response) => {
        //                         expect(res.body).to.eql(response);
        //                         done();
        //                     })
        //                     .catch(done);
        //             })
        //     });
        //
        //     it('should return only data points until limit in linear graph format', (done) => {
        //         chai.request('https://financialmodelingprep.com/api/v3')
        //             .get('/historical-price-full/stock_split/AAPL?timeseries=5&serietype=line')
        //             .end((err, res) => {
        //                 news('AAPL').split_history({ data_type: 'line', limit: 5 })
        //                     .then((response) => {
        //                         expect(res.body).to.eql(response);
        //                         done();
        //                     })
        //                     .catch(done);
        //             })
        //     });
        //
        //     it('should return data points between a time interval', (done) => {
        //         chai.request('https://financialmodelingprep.com/api/v3')
        //             .get('/historical-price-full/stock_split/AAPL?from=2018-03-12&to=2019-03-12')
        //             .end((err, res) => {
        //                 news('AAPL').split_history({ start_date: '2018-03-12', end_date: '2019-03-12' })
        //                     .then((response) => {
        //                         expect(res.body).to.eql(response);
        //                         done();
        //                     })
        //                     .catch(done);
        //             })
        //     });
        //
        //     it('should return 500 server error between a time interval with a data limit', (done) => {
        //         news('AAPL').split_history({ start_date: '2018-03-12', end_date: '2019-03-12', limit: 5 })
        //             .then((response) => {
        //                 expect(response).to.have.status(500);
        //                 done();
        //             })
        //             .catch(done);
        //     });
        //
        //     it('should return 500 server error between a time interval with a data limit for a line graph', (done) => {
        //         news('AAPL').split_history({ start_date: '2018-03-12', end_date: '2019-03-12', limit: 5, data_type: 'line' })
        //             .then((response) => {
        //                 expect(response).to.have.status(500);
        //                 done();
        //             })
        //             .catch(done);
        //     });
        // });
    })
});