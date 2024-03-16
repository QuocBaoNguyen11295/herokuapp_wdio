const { browser } = require('@wdio/globals')
const account = require('../../data/basic_auth.json')
describe('Basic Auth login application', () => {
    const text = 'Congratulations! You must have the proper credentials.'
    it('should return correct text', async () => {
        await browser.url(`https://${account.username}:${account.password}@the-internet.herokuapp.com/basic_auth`);
        await browser.check_text(text)
    });
})