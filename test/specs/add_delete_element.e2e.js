const { browser } = require('@wdio/globals')
describe('add/remove element application', () => {
    beforeEach(async () => {
        await browser.open_page('add_remove_elements/')
    })
    it(`add and remove element`, async () => {
        await browser.add_element()
        await browser.delete_element()
    })
})