const { browser } = require('@wdio/globals')

describe('User can download and verify a file', () => {
    before(async () => {
        await browser.clean_up_chromeDownload()
    });
    beforeEach(async () => {
        await browser.open_page('download')
    })
    it('Download the file', async () => {
        await browser.download_file('random_data.txt')
        await browser.check_file_exist('random_data.txt')
    });
});