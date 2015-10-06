/**
 *
 * aj(ax) (Get or Post)
 * ~@TODO: include option for responseAsObject
 *
 * @param  {} params
 *
 *
 * @return void
 *
 */
function aj(d) {
    /**
     * first we check if XMLHTTPRequest is available, if so, use that
     *      we don"t want to check ActiveXObject unless XMLHTTPRequest does not exist
     *
     * if it isn"t, see if ActiveXObject is available, if so, use that
     * otherwise, neither are available, just false.
     */
    var request = window.XMLHttpRequest ? new XMLHttpRequest() : window.ActiveXObject ? new ActiveXObject("Microsoft.XMLHttp") : false;

    // calls the error function if request is false, then returns
    // if (!request && d.error("File not found")) return;

    request.onreadystatechange = function() {
        // shortening
        var l = d.listeners;

        // if someone is listening for that readyState, send result to the callback
        if ("undefined" !== typeof l[request.readyState])
            l[request.readyState](request);

        if (4 == request.readyState) {
            /**
             * if a listener is registered for this particular request status
             *     then use it
             *
             * @param  {callable} "undefined" !
             * @return {void}
             */
            if ("undefined" !== typeof l[request.status])
                l[request.status](request);

            /**
             * else/otherwise, just send it to the "other" listener/handler/subscriber
             */
            else
                l.other(request);

            if (l.done instanceof Function)
                l.done(request)
        }
    };

    /**
     * if d.requestType set, use that
     * otherwise, we use POST as default
     *
     * with the url,
     *     if d.route is the case, we want to append a "/" in the url before the data
     *
     * this is case sensitive, it is not meant to fix your mistakes. Do it right.
     *
     * @example
     *     - when `d.requestType = "GET";`, `d.route = undefined;`
     *         it does:  request.open("GET", "url?data", true);
     *
     *     - when `d.requestType = "POST";`, `d.route = undefined;`
     *         it does: request.open("POST", "url?data", true);
     *
     *     - when `d.requestType = undefined;`, `d.route = undefined;`
     *         it does: request.open("POST", "url", true);
     *
     *
     *     // @TODO: double check whether this is post or get
     *     - when `d.requestType = "GET";`, `d.route = true;`
     *         it does: request.open("GET", "url/data", true);
     */
    request.open(
        (d.requestType||"POST"),
        d.url + (
            d.route
            ?
                "/" + d.data
            :
                d.requestType == "GET"
                ?
                    "?" + d.data
                :
                    ""
        ),
        true);

    /**
     * if we have passed in a requestedWith, use that
     * otherwise, use "XMLHttpRequest"
     */
    request.setRequestHeader("X-Requested-With", (d.requestedWith||"XMLHttpRequest"));

    /**
     * if we have passed in a contentType, use that
     * otherwise, use "application/x-www-form-urlencoded"
     */
    request.setRequestHeader("Content-type", (d.contentType||"application/x-www-form-urlencoded"));

    request.send(d.data);
    //console.log(request);
}
