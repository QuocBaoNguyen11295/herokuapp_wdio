const baseURL = 'https://the-internet.herokuapp.com'
async function type_info(locator, info) {
    (await $(`${locator}`)).setValue(info)
}

async function click(locator) {
    (await $(`${locator}`)).click()
}

async function assert_paragraph(locator, text) {
    await expect($(`${locator}`)).toHaveText(expect.stringContaining(`${text}`))
}

async function check_tag_existing(locator) {
    await expect(`${locator}`).toBeExisting()
}

async function open_page(page) {
    await browser.url(`${baseURL}/${page}`)
}
const Helper = {
    type_info,
    click,
    assert_paragraph,
    check_tag_existing,
    open_page
}

module.exports = Helper;