/**
 * 
 * @param  array params 
 * @return string
 *
 * if it needs to be variable length, just change 
 * `params.length` => `(params.length || 1)`
 * & `params` => `(params[i]||params)`
 * 
 */
function easyParameterAdapter(params) {
    for 
    (
        var i = 0, 
        postBody = ""; i < (params.length || 1); // if it is an array, the length of it. otherwise, just once
        postBody += 
        (
            // ### name/key ###
            (
                // if it does not have a tagname, only html objects need that 
                // we do this because the key is not a fixed keyword
                (!params[i].tagName)
                ? 
                    Object.keys(params[i])[0]
                :
                    params[i].getAttribute("name")
            ) 

            + '=' + 

            // ### value ###
            
            // if the key has been defined in what has been passed in, use that, otherwise, find the key in the HTML 
            encodeURIComponent( 

                // same as above, except it also checks type of element
                (!params[i].tagName)
                ? 
                    encodeURIComponent(params[i][Object.keys(params[i])[0]])
                : 
                    // if it has selectedIndex, it is an <option>
                    params[i].hasOwnProperty("selectedIndex") 
                    ?
                        params[i].options[params[i].selectedIndex].value
                    // if not an <option>
                    :
                        // is it a type=`checkbox`?
                        params[i].hasOwnProperty("checked") 
                        ? 
                            params[i].checked 

                        // not a checkbox? normal input
                        : 
                            params[i].value
            ) 

        // postbody;
        ), // + (i == params.length -1||"&"), // not sure if this is faster or the splice
  
        i++
    );
    return postBody.substring(0, postBody.length - 1);
}
