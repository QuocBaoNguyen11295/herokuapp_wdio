const { browser } = require('@wdio/globals')
describe('dropdown application', () => {
    beforeEach(async () => {
        await browser.open_page('dropdown')
    })
    it(`should return correct text`, async () => {
        await browser.select_value_from_dropdown()
    })
})