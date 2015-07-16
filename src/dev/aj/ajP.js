/**
 * 
 * aj(ax) Post
 * 
 * @param  {} params 
 * @return void
 *
 */
function ajP(d) {
    var request = window.ActiveXObject ? new ActiveXObject("Microsoft.XMLHttp") : window.XMLHttpRequest ? new XMLHttpRequest() : false; //  another ternary;
    
    request.onreadystatechange = function() { 
        if (4 == request.readyState) {
            if ('undefined' !== typeof d.listeners[request.status]) {
                // if it is 200, see if it has responseAsObject, then json parse it. If not 200, use the whole request
                d.listeners[request.status](
                    200 == request.status
                    ? 
                        d.responseAsObject 
                        ? 
                            JSON.parse(request.responseText) 
                        : 
                            request.responseText
                    :
                        request
                )
            } 
            else 
                d.listeners.other(request);


            if (d.done instanceof Function) d.done(request); 
        }
    };

    request.open("POST", d.url, true);
    request.setRequestHeader('X-Requested-With', (d.requestedWith||'XMLHttpRequest'));
    request.setRequestHeader('Content-type', (d.contentType||'application/x-www-form-urlencoded')); // 
    request.send(d.data);
}
