const { browser } = require('@wdio/globals')

describe('User can upload a file', () => {
    beforeEach(async () => {
        await browser.open_page('upload')
    })
    it('Upload a file', async () => {
        await browser.select_file_from_local_pc('123.txt')
        await browser.upload_file('123.txt')
    });
});