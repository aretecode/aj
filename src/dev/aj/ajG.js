/**
 * 
 * (a)j(a)x Get 
 * 
 * @param  {} params 
 * @return void
 *
 */
function ajG(d) {
    var request = window.ActiveXObject ? new ActiveXObject("Microsoft.XMLHttp") : window.XMLHttpRequest ? new XMLHttpRequest() : false; //  another ternary;
    
    request.onreadystatechange = function() { 
        if (4 == request.readyState) {
            if (200 == request.status) 
                d.success(request.responseText)
            else 
                d.error(request)

            if (d.done instanceof Function) d.done(request); 
        }
    };

    request.open("GET", d.url + "?" + d.data , true);    
    request.setRequestHeader('X-Requested-With', (d.requestedWith||'XMLHttpRequest'));
    request.setRequestHeader('Content-type', (d.contentType||'application/x-www-form-urlencoded')); // 
    request.send(d.data);
}
