const { browser } = require('@wdio/globals')

describe('User can press any key', () => {
    beforeEach(async () => {
        await browser.open_page('key_presses')
    })
    it('press Enter', async () => {
        await browser.key_press('Enter')
    });

    it('press Tab', async () => {
        await browser.key_press('Tab')
    });

    it('press Escape', async () => {
        await browser.key_press('Escape')
    });
});