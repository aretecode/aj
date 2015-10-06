if (!(typeof(isNodeList) === typeof(Function))) {
    function isNodeList(nodes) {
        var result = Object.prototype.toString.call(nodes);
        // modern browser such as IE9 / firefox / chrome etc.
        if (result === "[object HTMLCollection]" || result === "[object NodeList]")
            return true;
        // ie 6/7/8
        if (typeof(nodes) != "object")
            return false;
        // detect length and item
        if (!("length" in nodes) || !("item" in nodes))
            return false;
        // use the trick NodeList(index),all browsers support
        try {
            if (nodes(0) === null || (nodes(0) && nodes(0).tagName)) return true;
        }
        catch (e) {
            return false;
        }
        return false
    }
}

var Params = function () {
};

Params.option = function(param) {
    return param.getAttribute("name") + "=" + encodeURIComponent(param.options[param.selectedIndex].value)
};

/**
 * checkboxOrOtherInputElementParameterAdapter
 *
 * <input checked|text|any>, <select>
 *
 * @param  array param
 * @return string
 *
 */
Params.checkbox = function(param) {
    return param.getAttribute("name") + "=" + ((param.hasOwnProperty("checked") || param.checked) ? param.checked : param.value);
};

/**
 * checkboxOrOtherInputElementsParameterAdapter
 *
 * n.parentNode.getElementsByTagName("label")[0].innerHTML
 *
 * <input checked|text|any>, <select>
 *
 * @param  array params
 * @return string
 *
 */
Params.checkboxs = function(params) {
    for
    (
        var i = 0,
        postBody = ""; i < params.length;
        postBody +=
        (
            n.getAttribute("name") + "=" +
            encodeURIComponent(
                n.hasOwnProperty("checked")
                ?
                    n.checked
                :
                    n.value
            )
            + "&"
        ),
        i++
    );

    /**
     * taking off trailing "&"
     * better than checking it in the loop every time
     */
    return postBody.substring(0, postBody.length - 1);
}

/**
 * optionElementsParameterAdapter
 *
 * go through each one
 * append them to a string
 * separating the name & data with `=`
 * `&` on the end of each one
 * remove the "&" from the last one instead of checking every time in the loop
 * return it
 *
 * @param  array<string, element> params
 * @return string
 *
 */
Params.options = function(params) {
    for
    (
        var i = 0,
        postBody = ""; i < params.length;
        n = params[i],
        postBody +=
        (
            /**
             * The same as calling OptionElemenParameterAdapter(param) + "&"
             */
            n.getAttribute("name") + "=" +
            encodeURIComponent(n.options[n.selectedIndex].value)
            + "&"
        ),

        i++
    );

    /**
     * taking off trailing "&"
     * better than checking it in the loop every time
     */
    return postBody.substring(0, postBody.length - 1);
}

/**
 * inputElementsParameterAdapter
 * <input checked|text|any>, <select>
 *
 * @param  array params
 * @return string
 *
 */
Params.inputs = function(params) {
    for
    (
        var i = 0,
        postBody = ""; i < params.length;
        postBody +=
        (
            params[i].getAttribute("name") + "=" +
            encodeURIComponent(params[i].value) + "&"
        ),
        i++
    );

    /**
     * taking off trailing "&"
     * better than checking it in the loop every time
     */
    return postBody.substring(0, postBody.length - 1);
};

/**
 *
 * inputElementParameterAdapter
 *
 * <input checked|text|num|any>, <select>
 *
 * @param  HTMLObject param
 * @return string
 *
 */
Params.input = function(param) {
    return param.getAttribute("name") + "=" + encodeURIComponent(param.value);
}

Params.radios = function(params) {
    for
    (
        var i = 0,
        postBody = ""; i < params.length;        

        n = params[i],
        postBody +=
        (    
            // if it's a radio button that is not checked, we do not want to include it, otherwise, do everything else
            (n.type === "radio" && !n.checked) ? "" :

            // ### name/key ###
            n.getAttribute("name") + "=" +

            encodeURIComponent(
                // is it a type=`checkbox`?
                (n.hasOwnProperty("checked") && n.checked)
                ?
                    n.checked

                // not a checkbox? normal input
                :
                    n.value
            )
            + "&"
        ),
        i++
    );

    /**
     * taking off trailing "&"
     * better than checking it in the loop every time
     */
    return postBody.substring(0, postBody.length - 1);
}

/**
 * elementsParameterAdapter
 *
 * <input checked|text|any>, <select>
 *
 * @param  array params
 * @return string
 *
 */
Params.elements = function(params) {
    for
    (
        var i = 0,

        // if it is an array, the length of it. otherwise, just once
        postBody = ""; i < params.length;
        
        n = params[i],
        postBody +=
        (
            // if it"s a radio button that is not checked, we do not want to include it, otherwise, do everything else
            (n.type === "radio" && !n.checked) ? "" :

            // ### name/key ###
            n.getAttribute("name") + "=" +

            // ### value ###
            // if the key has been defined in what has been passed in, use that, otherwise, find the key in the HTML
            encodeURIComponent(

                // same as above, we want to use if we have our own keys, not if element has children
                // (undefined !== n && Array.isArray(n))

                // if it has selectedIndex, it is an <option>
                n.hasOwnProperty("selectedIndex")
                ?
                    n.options[n.selectedIndex].value

                // if not an <option>, is it a type=`checkbox`?
                :
                    (n.hasOwnProperty("checked") && n.checked)
                    ?
                        n.checked

                    // not a checkbox? normal input
                    :
                        n.value
            )
            + "&"
        ),
        i++
    );

    /**
     * taking off trailing "&"
     * better than checking it in the loop every time
     */
    return postBody.substring(0, postBody.length - 1);
}

/**
 * easyParameterAdapter
 * @param  array params
 * @return string
 *
 * if it needs to be variable length, just change
 * `params.length` => `(params.length || 1)` 
 * ^ if it is an array, the length of it. otherwise, just once
 * 
 * & `params` => `(params[i]||params)`
 *
 */
Params.ez = function(params) {
    for
    (
        var i = 0,
        postBody = ""; i < params.length; 
        
        n = params[i],
        postBody +=
        (
            n === null || (n.type === "radio" && !n.checked)
            ?
                ""
            :

                isNodeList(n)
                ?
                    Params.ez(n) + "&"
                :
                    // if it"s a radio button that is not checked, we do not want to include it, otherwise, do everything else

                    // ### name/key ###
                    (
                        // if it does not have a tagname, only html objects need that
                        // we do this because the key is not a fixed keyword
                        (!n.tagName)
                        ?
                            Object.keys(n)[0]
                        :
                            n.getAttribute("name")
                    )

            + "=" +

            // ### value ###

            // if the key has been defined in what has been passed in, use that, otherwise, find the key in the HTML
            encodeURIComponent(
                // same as above, except it also checks type of element
                (!n.tagName)
                ?
                    n[Object.keys(n)[0]]
                :
                    // if it has selectedIndex, it is an <option>
                    n.hasOwnProperty("selectedIndex")
                    ?
                        n.options[n.selectedIndex].value
                    // if not an <option>
                    :
                        // is it a type=`checkbox`?
                        (n.hasOwnProperty("checked") && n.checked)
                        ?
                            n.checked

                        //// not a checkbox? normal input
                        :
                            n.value
            )
            + "&"
        ),

        i++
    );

    /**
     * taking off trailing "&"
     * better than checking it in the loop every time
     */
    return postBody.substring(0, postBody.length - 1);
}

/**
 * aka ajKeyValueArrayGetParameterAdapter
 *
 * @example
 *   - [
 *       {ajax_input: "Cindy Lou Who"},
 *       {ajax_input_second: "Topsy Turvy"}
 *       {ajax_input_third: "true"}
 *       {category: "monkeying"}
 *     ]
 *
 *
 * @param  array params
 * @return string
 *
 */
Params.get = function(params) {
    var urlParams = "";

    /**
     * We want to
     */
    for (var i = 0; i < params.length; i++) {
        var k = Object.keys(params[i]);
        urlParams += encodeURIComponent(k) + "=" + encodeURIComponent(params[i][k]) + "&";
    }

    /**
     * taking off trailing "&"
     * better than checking it in the loop every time
     */
    return urlParams.substring(0, urlParams.length - 1);
}

/**
 * aka aj(ax)KeyValueArrayPostParameterAdapter
 * same as GetParameter, except no encodeURIComponent
 *
 * @param  array params
 * @return string
 *
 */
Params.post = function(params) {
    var urlParams = "";

    for (var i = 0; i < paramsArray.length; i++) {
        var k = Object.keys(paramsArray[i]);
        urlParams += k + "=" + paramsArray[i][k] + "&";
    }

    /**
     * taking off trailing "&"
     * better than checking it in the loop every time
     */
    return urlParams.substring(0, urlParams.length - 1);
}
