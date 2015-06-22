/**
 * params[i].parentNode.getElementsByTagName('label')[0].innerHTML 
 *
 * <input checked|text|any>, <select>
 * 
 * @param  array params 
 * @return string
 * 
 */
function checkboxOrOtherInputElementsParameterAdapter(params) {
    for 
    (
        var i = 0, 
        postBody = ""; i < params.length; // if it is an array, the length of it. otherwise, just once
        postBody += 
        (
            params[i].getAttribute("name") + '=' + 
            encodeURIComponent( 
                params[i].hasOwnProperty("checked") 
                ? 
                    params[i].checked 
                : 
                    params[i].value
            ) 
        ),
        i++
    );
    return postBody.substring(0, postBody.length - 1);
}
