const { browser } = require('@wdio/globals')
const accountData = require('../../data/account.json')
describe('My Login application', () => {
    beforeEach(async () => {
        await browser.open_page('login')
    })
    accountData.data.forEach((element) => {
        var username = element.username
        var password = element.password
        var result = element.result
        it(`should login with ${username} and ${password}`, async () => {
            await browser.login(username, password, result)
        })
    });
})