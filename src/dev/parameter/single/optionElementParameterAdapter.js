/**
 * 
 * @param  HTMLObject<select> params 
 * @return string
 * 
 */
function optionElementParameterAdapter(param) {
    return param.getAttribute("name") + '=' + encodeURIComponent(param.options[param.selectedIndex].value);
}
