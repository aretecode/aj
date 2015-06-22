/**
 *
 * <input checked|text|any>, <select>
 * 
 * @param  array params 
 * @return string
 * 
 */
function inputElementsParameterAdapter(params) {
    for 
    (
        var i = 0, 
        postBody = ""; i < params.length; 
        postBody += 
        (
            params[i].getAttribute("name") + "=" + 
            encodeURIComponent(params[i].value) 
        ), 
        i++
    );
    
    return postBody.substring(0, postBody.length - 1);
}
