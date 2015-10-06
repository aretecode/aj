/**
 *
 * For documentation, look at aj.js
 *
 * aj(ax) Get
 *
 * @param  {} params
 * @return void
 *
 */
function ajG(d) {
    var request = window.XMLHttpRequest ? new XMLHttpRequest() : window.ActiveXObject ? new ActiveXObject("Microsoft.XMLHttp") : false;

    request.onreadystatechange = function() {
        var l = d.listeners;

        if ("undefined" !== typeof l[request.readyState])
            l[request.readyState](request);

        if (4 == request.readyState) {
            if ("undefined" !== typeof l[request.status])
                l[request.status](request);
            else
                l.other(request);

            if (l.done instanceof Function)
                l.done(request)
        }
    };

    /**
     * @example
     *   - example.com?param=val&param2=val2
     */
    request.open("GET", d.url + (d.route ? "" : "?") + d.data, true);
    request.setRequestHeader("X-Requested-With", (d.requestedWith||"XMLHttpRequest"));
    request.setRequestHeader("Content-type", (d.contentType||"application/x-www-form-urlencoded")); //
    request.send(d.data);
}
