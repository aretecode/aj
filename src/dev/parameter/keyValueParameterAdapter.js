/**
 * this is just the most basic double encodeURIComponent of the data
 * 
 * @param  string key
 * @param  string value
 * 
 * @return string
 * 
 */
function keyValueParameterAdapter(key, value) {
    return (encodeURIComponent(key) + '=' + encodeURIComponent(value)); // + ((i == (params.length -1)) ? "" : "&"),
}
