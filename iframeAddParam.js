var elm = document.getElementById('testIframe');
var src = elm.getAttribute('src');
var trackingConsentNum = 0;
var keys = Object.keys(_tracker.trackingStatusList);
for (var i = 0; i < keys.length; i++) {
    if (_tracker.trackingStatusList[keys[i]] === _tracker.trackingConsent) {
        trackingConsentNum = keys[i];
        break;
    }
}
var newSrc = src + '?_ttr=' + _tracker.userId + 'tc' + trackingConsentNum + (new Date()).getTime(); 
elm.setAttribute('src', newSrc);