/**
 *
 * <input checked|text|any>, <select>
 * 
 * @param  array params 
 * @return string
 * 
 */
function elementsParameterAdapter(params) {
    for 
    (
        var i = 0, 
        postBody = ""; i < params.length; // if it is an array, the length of it. otherwise, just once
        postBody += 
        (
            // ### name/key ###
            params[i].getAttribute("name") + '=' + 

            // ### value ###
            // if the key has been defined in what has been passed in, use that, otherwise, find the key in the HTML 
            encodeURIComponent( 

                // same as above, we want to use if we have our own keys, not if element has children
                // (undefined !== params[i][1] && Array.isArray(params[i])) 
               
                // if it has selectedIndex, it is an <option>
                params[i].hasOwnProperty("selectedIndex") 
                ?
                    params[i].options[params[i].selectedIndex].value

                // if not an <option>, is it a type=`checkbox`?
                :
                    params[i].hasOwnProperty("checked") 
                    ? 
                        params[i].checked 

                    // not a checkbox? normal input
                    : 
                        params[i].value
            ) 

        // postbody;
        ),
  
        i++
    );

    return postBody.substring(0, postBody.length - 1);
}
