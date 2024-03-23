const { browser } = require('@wdio/globals')

describe('User can drag and drop', () => {
    beforeEach(async () => {
        await browser.open_page('drag_and_drop')
    })
    it('Drag and drop to the another column', async () => {
        await browser.drag_and_drop_to_column(`//*[@id='column-a']`, `//*[@id='column-b']`)
        await browser.check_column_is_changed(`//*[@id='column-a']`, `//*[@id='column-b']`)
    });
});