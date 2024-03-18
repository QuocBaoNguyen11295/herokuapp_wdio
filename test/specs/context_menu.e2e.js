const { browser } = require('@wdio/globals')
describe('context menu application', () => {
    beforeEach(async () => {
        await browser.open_page('context_menu')
    })
    it(`check alert window appeared`, async () => {
        await browser.right_click_on_context_menu()
    })
})