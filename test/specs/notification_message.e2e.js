const { browser } = require('@wdio/globals')
describe('notification message application', () => {
    beforeEach(async () => {
        await browser.open_page('notification_message_rendered')
    })
    it(`should return correct text`, async () => {
        await browser.after_click_here()
    })
})