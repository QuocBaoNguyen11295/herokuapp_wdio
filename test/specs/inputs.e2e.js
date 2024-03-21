const { browser } = require('@wdio/globals')

describe('User can put the value', () => {
    beforeEach(async () => {
        await browser.open_page('inputs')
    })
    it('Put the value to input', async () => {
        await browser.put_the_value('2')
    });
});