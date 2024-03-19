const { browser } = require('@wdio/globals')
describe('Checkboxes application', () => {
    beforeEach(async () => {
        await browser.open_page('checkboxes')
    })
    it(`make sure that all checkboxes selected`, async () => {
        await browser.check_checkboxes_is_selected()
    })
})