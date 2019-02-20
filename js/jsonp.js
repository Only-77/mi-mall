function sendJonp(url, data) {
    var $script = document.createElement('script');
    var flag = url.includes('?') ? "&" : "?";
    url += flag + '_=' + Date.now();
    for(var key in data) {
        url += '&' + key + '=' + data[key];
    }

    // console.log(url);
    $script.src = url;
    document.body.appendChild($script);
}