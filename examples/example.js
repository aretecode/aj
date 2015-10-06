function $(s) { return document.getElementById(s) }
function $_(s) { return document.getElementsByClassName(s) }    

function exampleAjaxListeners() {
    return {
        404: function(result){console.log(result); console.log("404");},
        201: function(result){console.log(result); console.log("201");},
        200: function(result){console.log(result); console.log("200");},
        303: function(result){console.log(result); console.log("303");},
        other: function(result){console.log(result); console.log("other");},
        done: function(result){console.log(result); console.log("done");}
    };
}

function sendExampleGetAjax() {
    params = dataForAjax();
    ajG({
          url: "ajax.php",
          data: params,
          listeners: exampleAjaxListeners()             
    }); 
}

function sendExamplePostAjax() {
    params = dataForAjax();
    ajP({
          url: "ajax.php",
          data: params,
          listeners: exampleAjaxListeners()             
    }); 
}