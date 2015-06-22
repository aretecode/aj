/**
 * aka ajxKeyValueArrayGetParameterAdapter
 * 
 * @param  array params 
 * @return string
 * 
 */
function jxGP(params) {
    var urlParams = "";    	

	for (var i = 0; i < params.length; i++) {
    	var k = Object.keys(params[i]);
        urlParams += encodeURIComponent(k) + '=' + encodeURIComponent(params[i][k]) + "&"; 
	}

    // taking off trailing "&"
    return urlParams.substring(0, urlParams.length - 1);
}
