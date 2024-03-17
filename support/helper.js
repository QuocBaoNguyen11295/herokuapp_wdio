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

async function select_value_from_tag(locator, value) {
    await $(`${locator}`).selectByAttribute('value', `${value}`)
}

async function get_value_from_tag(locator) {
    const value = await $(`${locator}`).getValue()
    return value
}

async function wait_element_for_existing(locator, text) {
    (await $(`${locator}`)).waitForExist()
    await assert_paragraph(locator, text)
}

async function wait_element_to_be_displayed(locator, text) {
    (await $(`${locator}`)).waitForDisplayed()
    await assert_paragraph(locator, text)
}
const Helper = {
    type_info,
    click,
    assert_paragraph,
    check_tag_existing,
    open_page,
    select_value_from_tag,
    get_value_from_tag,
    wait_element_for_existing,
    wait_element_to_be_displayed,
}

module.exports = Helper;