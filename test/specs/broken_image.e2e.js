const { browser } = require('@wdio/globals')
describe('broken image application', () => {
    beforeEach(async () => {
        await browser.open_page('broken_images')
    })
    it(`check image is broken or not`, async () => {
        await browser.check_image_is_broken_or_not()
    })
})