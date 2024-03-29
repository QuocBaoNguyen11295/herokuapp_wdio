const { browser } = require('@wdio/globals')
describe('Alpha - Beta application', () => {
    beforeEach(async () => {
        await browser.open_page('abtest')
    })
    const text = `Also known as split testing. This is a way in which businesses are able to simultaneously test and learn different versions of a page to see which text and/or functionality works best towards a desired outcome (e.g. a user action such as a click-through).`
    it(`should return correct text`, async () => {
        await browser.check_text(text)
    })
})