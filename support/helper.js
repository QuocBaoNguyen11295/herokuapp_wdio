const baseURL = 'https://the-internet.herokuapp.com'
const { Key } = require('webdriverio')


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

async function check_element_not_existing(locator) {
    await expect($(`${locator}`)).not.toBeExisting()
}

async function check_element_existing(locator) {
    await expect($(`${locator}`)).toBeExisting()
}

async function check_broken_image(locator) {
    const img = await $$(`${locator}`)
    for (var image of img) {
        var source = await image.getAttribute('src');
        var url = baseURL + '/' + source
        const response_image = await browser.execute(async (url) => {
            const response = await fetch(url);
            return response.status;
        }, url);

        console.log(response_image)
        if (source === 'img/avatar-blank.jpg') {
            await expect(response_image).toEqual(200)
        }
        else {
            await expect(response_image).not.toEqual(200)
        }
    }
}

async function right_click_element(locator) {
    (await $(`${locator}`)).click({ button: "right" })
    const text = await browser.getAlertText()
    await expect(text).toEqual(`You selected a context menu`)
}

async function get_text_alert() {
    const text = await browser.getAlertText()
    return text
}

async function accept_alert() {
    await browser.acceptAlert()
}

async function assert_text(locator, text) {
    const txt = (await $(`${locator}`)).getText()
    await expect(txt).toEqual(text)
}

async function send_text_to_alert(text) {
    await browser.sendAlertText(text)
}

async function checkbox_is_selected(locator) {
    const value = (await $(`${locator}`))
    await expect(value).toBeChecked()
}

async function hover_image(locator, text) {
    const locate = await $(`${locator}`)
    await locate.scrollIntoView()
    await locate.moveTo()
}

async function key_press(key) {
    await browser.keys([Key.Ctrl, `${key}`])
    const value = key.toUpperCase();
    await assert_paragraph(`//*[@id='result' and @style='color:green']`, `You entered: ${value}`)
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
    check_element_not_existing,
    check_element_existing,
    check_broken_image,
    right_click_element,
    get_text_alert,
    accept_alert,
    assert_text,
    send_text_to_alert,
    checkbox_is_selected,
    hover_image,
    key_press
}

module.exports = Helper;