// Hide entire html, before substitutions.
$("body, html").hide();

var zenviaValues = {
    "###BRAND_NAME###": "ZenAPI",
}

var totalVoiceValues = {
    "###BRAND_NAME###": "TotalVoice",
}

$(document).ready(function(){
    var referrerKey = getCurrentReferrerKey();
    replaceLogo(referrerKey);
    replaceTexts(referrerKey);

    // After all substitutions, html will be showed again
    $("body, html").show();
});

function getCurrentReferrerKey() {
    var zenviaRegex = /zenvia|zenapi/;
    if(zenviaRegex.test(document.referrer))
        return 'zenvia';
    return 'totalvoice';
}

function replaceLogo(referrerKey) {
    // Default logo is TotalVoice, so replace only if referrerKey equals 'zenvia'
    if(referrerKey == 'zenvia') {
        $(".logo").attr("src", "images/logo-zenapi.png");
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
