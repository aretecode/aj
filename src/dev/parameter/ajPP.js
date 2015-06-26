/**
 * aka ajxKeyValueArrayPostParameterAdapter
 * same as GetParameter, except no encodeURIComponent
 * 
 * @param  array params 
 * @return string
 * 
 */
function ajPP(paramsArray) {
    var urlParams = "";

	for (var i = 0; i < paramsArray.length; i++) {
    	var k = Object.keys(paramsArray[i]);
        urlParams += k + '=' + paramsArray[i][k] + "&";
	}

    // taking off trailing "&"
    return urlParams.substring(0, urlParams.length - 1);
}