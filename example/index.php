<!DOCTYPE html>

<!-- 
  these examples could be seperated into different files to show more easily which need to be used &amp; copy pasted 

  ajG, ajP, ajGP, ajPP, elementsParameterAdapter, and easyParameterAdapter are my favorite
-->

<script src="../src/dev/aj/aj.js"></script> 
<script src="../src/dev/aj/ajG.js"></script> 
<script src="../src/dev/aj/ajP.js"></script>

<script src="../src/dev/parameter/ajGP.js"></script> 
<script src="../src/dev/parameter/ajPP.js"></script> 

<script src="../src/dev/parameter/easyParameterAdapter.js"></script> 
<script src="../src/dev/parameter/elementsParameterAdapter.js"></script> 

<script src="../src/dev/parameter/optionElementsParameterAdapter.js"></script> 
<script src="../src/dev/parameter/inputElementsParameterAdapter.js"></script> 
<script src="../src/dev/parameter/checkboxOrOtherInputElementsParameterAdapter.js"></script> 

<script src="../src/dev/parameter/single/keyValueParameterAdapter.js"></script> 
<script src="../src/dev/parameter/single/optionElementParameterAdapter.js"></script> 

<script>

  function $(s) { return document.getElementById(s) }


  // using a mix, using the easyParameterAdapter
  function testEasyPost() {
    params = new Array();
    params.push
    (
      $("ajax_input"),
      $("ajax_input_second"),
      $("ajax_input_third"),
      $("category"),
      {
        key: "test"
      }
    );
    ajP(
        {
          url: "ajax.php",
          data: easyParameterAdapter(params),
          listeners: {
            404: function(result){console.log(result); console.log("404");},
            201: function(result){console.log(result); console.log("201");},
            200: function(result){console.log(result); console.log("200");},
            303: function(result){console.log(result); console.log("303");},
            other: function(result){console.log(result); console.log("other");}
          },
          done: function(result){console.log(result); console.log("done");}
        } 
    );    
  }
  function testEasyGet() {
    params = new Array();
    params.push
    (
      $("ajax_input"),
      $("ajax_input_second"),
      $("ajax_input_third"),
      $("category"),
      {
        key: "test"
      }
    );
    ajG(
        {
          url: "ajax.php",
          data: easyParameterAdapter(params),
          listeners: {
            404: function(result){console.log(result); console.log("404");},
            201: function(result){console.log(result); console.log("201");},
            200: function(result){console.log(result); console.log("200");},
            303: function(result){console.log(result); console.log("303");},
            other: function(result){console.log(result); console.log("other");}
          },
          done: function(result){console.log(result); console.log("done");}
        } 
    );    
  }
  
  // just elements
  function testElementsGet() {
    params = new Array();
    params.push
    (
      $("ajax_input"),
      $("ajax_input_second"),
      $("ajax_input_third"),
      $("category")
    );
    ajG(
        {
          url: "ajax.php",
          data: elementsParameterAdapter(params),
          listeners: {
            404: function(result){console.log(result); console.log("404");},
            201: function(result){console.log(result); console.log("201");},
            200: function(result){console.log(result); console.log("200");},
            303: function(result){console.log(result); console.log("303");},
            other: function(result){console.log(result); console.log("other");}
          },
          done: function(result){console.log(result); console.log("done");}
        } 
    );      
  }  

  function testLongerGet() {
    // you do the main work
    ////////////////////////
    params = new Array();
    params.push
    (
      {ajax_input: $("ajax_input").value},
      {ajax_input_second: $("ajax_input_second").value},
      {ajax_input_third: $("ajax_input_third").checked},
      {category: $("category").options[$("category").selectedIndex].value}
    );
    ajG(
        {
          url: "ajax.php",
          data: ajGP(params),
          requestType: "GET",
          listeners: {
            404: function(result){console.log(result); console.log("404");},
            201: function(result){console.log(result); console.log("201");},
            200: function(result){console.log(result); console.log("200");},
            303: function(result){console.log(result); console.log("303");},
            other: function(result){console.log(result); console.log("other");}
          },
          done: function(result){console.log(result); console.log("done");}
        } 
    );    
  }
  function testAjax() {
    testEasyPost();
    // testEasyGet()
    // testElementsGet();
    // testLongerGet();

    return false;
  }
</script>
<form method="POST">
  <input type="text" name="ajax_input" placeholder="Generic ajax input for testing" id="ajax_input"/>
  <input type="num" name="ajax_input_second" id="ajax_input_second"/>
  <label for="ajax_input_third">checkable</label>
  <input type="checkbox" name="ajax_input_third" id="ajax_input_third" checked=checked/>

  <label for="category">Category</label>
  <select name="category" id="category">
    <option>Programming</option>
    <option>Life</option>
  </select>

  <input type="button" onclick="testAjax();" id="submit_button" value="submit_button"/>
</form>
<div id="ResponseDiv"></div>
<div id="loading"></div>
