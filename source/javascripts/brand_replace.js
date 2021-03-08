// Hide entire html, before substitutions.
$("body, html").hide();

var totalVoiceValues = {
    "###BRAND_NAME###": "TotalVoice",
    "###PAGE_TITLE###": "TotalVoice API Doc",
    "###API_NAME###": "TotalVoice",
    "###PROVIDED_BY###": "pela TotalVoice",
    "###API_OWNERSHIP###": "API da TotalVoice",
    "###COMPANY_NAME###": "TotalVoice",
    "###TECHNICAL_SUPPORT_TEAM###": "time de suporte da TotalVoice",
    "###CHAT_PLACE###": "no painel da TotalVoice",
    "###CONTACT_TEAM###": "a TotalVoice",
    "###CONTACT_TEAM_ALT###": "equipe da TotalVoice",
    "###COMPANY_NAME_LOWER_CASE###": "totalvoice",
    "###VOICE_APP###": "TotalVoice App",
    "###PANEL_NAME###": "painel da TotalVoice",
    "###IN_BRAND_NAME###": "na TotalVoice",
    "###PANEL_REF###": "ao site da TotalVoice",
    "###PANEL_REF_ALT###": "na TotalVoice",
}

var zenviaValues = {
    "###BRAND_NAME###": "ZenAPI",
    "###PAGE_TITLE###": "Documentação da API de Voz",
    "###API_NAME###": "API de Voz",
    "###PROVIDED_BY###": "pelo ZenAPI",
    "###API_OWNERSHIP###": "API de Voz da ZenAPI",
    "###COMPANY_NAME###": "Zenvia",
    "###TECHNICAL_SUPPORT_TEAM###": "time de suporte da equipe de voz da Zenvia",
    "###CHAT_PLACE###": "na plataforma de Voz da Zenvia",
    "###CONTACT_TEAM###": "o time de voz da Zenvia",
    "###CONTACT_TEAM_ALT###": "equipe de Voz da Zenvia",
    "###COMPANY_NAME_LOWER_CASE###": "zenvia",
    "###VOICE_APP###": "ZenAPI de Voz",
    "###PANEL_NAME###": "painel de Voz da ZenAPI",
    "###IN_BRAND_NAME###": "na ZenAPI",
    "###PANEL_REF###": "a plataforma da ZenAPI",
    "###PANEL_REF_ALT###": "na plataforma da ZenAPI",
}

$(document).ready(function(){
    var referrerKey = getCurrentReferrerKey();
    replaceTitle(referrerKey);
    replaceLogo(referrerKey);
    replaceTexts(referrerKey);

    // After all substitutions, html will be showed again
    $("body, html").show();
});

function getCurrentReferrerKey() {
    var referrerKeyInLocalStorage = 'brand-replace-referrer-url';
    var referrerExpirationKeyInLocalStorage = 'brand-replace-exp-referrer-url';
    var referrerValueInLocalStorage = localStorage.getItem(referrerKeyInLocalStorage);
    if(referrerValueInLocalStorage == null) {
        var urlReferrer = getUrlReferrer();
        var oneDayInMilliseconds = (86400 * 1000);

        localStorage.setItem(referrerKeyInLocalStorage, urlReferrer);
        localStorage.setItem(referrerExpirationKeyInLocalStorage, Date.now() + oneDayInMilliseconds);
        return urlReferrer;
    }

    // Handle localStorage key expirations
    var referrerExpiration = localStorage.getItem(referrerExpirationKeyInLocalStorage);
    if(referrerExpiration < Date.now()) {
        localStorage.removeItem(referrerKeyInLocalStorage);
        localStorage.removeItem(referrerExpirationKeyInLocalStorage);
    }

    return referrerValueInLocalStorage;
}

function getUrlReferrer() {
    var zenviaRegex = /zenvia|zenapi/;
    if(zenviaRegex.test(document.referrer))
        return 'zenvia';
    return 'totalvoice';
}

function replaceTitle(referrerKey) {
    if(referrerKey == 'zenvia') {
        $(document).prop('title', zenviaValues['###PAGE_TITLE###']);
    }
}

function replaceLogo(referrerKey) {
    // Default logo is TotalVoice, so replace only if referrerKey equals 'zenvia'
    if(referrerKey == 'zenvia') {
        $(".logo").attr("src", "images/zenapi-logo.png");
    }
}

function replaceTexts(referrerKey) {
    var replaceValues = (referrerKey == 'totalvoice') ? totalVoiceValues : zenviaValues;

    var originalHtml = $("body").html();
    var regexMatches = new RegExp(Object.keys(replaceValues).join("|"), "gi"); 
    var replacedHtml = originalHtml.replace(regexMatches, function(matched) { 
        return replaceValues[matched];
    });

    $("body").html(replacedHtml);
}
