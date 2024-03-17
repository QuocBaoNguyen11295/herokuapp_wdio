const { browser } = require('@wdio/globals')
describe('dynamically load element on page application', () => {
    beforeEach(async () => {
        await browser.open_page('dynamic_loading')
    })
    it(`should wait and return the text correctly - element 1`, async () => {
        await browser.wait_hello_world_to_be_displayed()
    })

    it(`should wait and return the text correctly - element 2`, async () => {
        await browser.wait_hello_world_for_existing()
    })
})