module.exports = {
'Nightwatch pierwszy test'(browser){
    browser
        .url('https://duckduckgo.com/')
        .waitForElementVisible('#search_form_input_homepage','Weryfikacja czy pole input text jest widoczne.')
        .setValue('#search_form_input_homepage','pogoda lublin')
        .click("#search_button_homepage")
        .saveScreenshot('./reports/pogoda.png')
        .assert.containsText('#links', 'twojapogoda.pl',)
    }
}