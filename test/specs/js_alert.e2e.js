const { browser } = require('@wdio/globals')
describe('JavaScript alert application', () => {
    beforeEach(async () => {
        await browser.open_page('javascript_alerts')
    })
    it(`click on "Click for JS Alert"`, async () => {
        await browser.click_on_js_for_alert()
    })

    it(`click on "Click for JS Confirm"`, async () => {
        await browser.click_on_js_for_confirm()
    })

    it(`click on "Click for JS Prompt"`, async () => {
        await browser.send_text_to_alert('Bao')
    })
})