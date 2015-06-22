<!DOCTYPE html>

<!-- 
  these examples could be seperated into different files to show more easily which need to be used &amp; copy pasted 

  jaG, jaP, jaGP, jaPP, elementsParameterAdapter, and easyParameterAdapter are my favorite
-->

<script src="../src/dev/ja/ja.js"></script> 
<script src="../src/dev/ja/jaG.js"></script> 
<script src="../src/dev/ja/jaP.js"></script>

<script src="../src/dev/parameter/jaGP.js"></script> 
<script src="../src/dev/parameter/jaPP.js"></script> 

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
    jaP(
        {
          url: "ajax.php",
          data: easyParameterAdapter(params),
          error: function(result){console.log(result); console.log("error"); },
          success: function(result){console.log(result); console.log("success");},
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
    jaG(
        {
          url: "ajax.php",
          data: easyParameterAdapter(params),
          error: function(result){console.log(result); console.log("error"); },
          success: function(result){console.log(result); console.log("success");},
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
    jaG(
        {
          url: "ajax.php",
          data: elementsParameterAdapter(params),
          error: function(result){console.log(result); console.log("error"); },
          success: function(result){console.log(result); console.log("success");},
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
    jaG(
        {
          url: "ajax.php",
          data: jaGP(params),
          requestType: "GET",
          error: function(result){console.log(result); console.log("error"); },
          success: function(result){console.log(result); console.log("success");},
          done: function(result){console.log(result); console.log("done");}
        } 
    );    
  }
  function testAjax() {

    // testEasyPost();
    testEasyGet()
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
