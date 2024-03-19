const { browser } = require('@wdio/globals')
describe('Hovers application', () => {
    beforeEach(async () => {
        await browser.open_page('hovers')
    })
    it(`make sure that all images hovered`, async () => {
        await browser.hover_image_user()
    })
})