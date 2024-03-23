const { browser } = require('@wdio/globals')
const account = require('../../data/basic_auth.json')
describe('Secure download application', () => {
    before(async () => {
        await browser.clean_up_chromeDownload()
    });
    beforeEach(async () => {
        await browser.url(`https://${account.username}:${account.password}@the-internet.herokuapp.com/download_secure`)
    })
    it('Download the file', async () => {
        await browser.download_file('random_data.txt')
        await browser.check_file_exist('random_data.txt')
    });
})