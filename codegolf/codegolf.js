/**
 * 
 * @param  {} params 
 * @return void
 *
 */
function aj(d) {
    var request = new XMLHttpRequest(); 
    
    request.onreadystatechange = d.cb;

    /**
     * http://stackoverflow.com/questions/2802055/what-does-the-construct-x-x-y-mean
     * (d.m !== "GET"||"?" + d.d) --- if first condition is true, it would use that. Too bad we can't use it here >.>
     * the questionmark could be removed and it could be set in the data
     */
    request.open(d.m, d.u + (d.m == "GET" ? "?" + d.d : "") , true);
    request.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
    request.setRequestHeader('Content-type', d.ct); 
    request.send(d.d);
}
