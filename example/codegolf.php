<!DOCTYPE html>

<script src="../src/dev/ja/codegolf.js"></script> 
<script src="../src/dev/parameter/elementsParameterAdapter.js"></script> 

<script>

  function $(s) { return document.getElementById(s) }

  function tryGet() {
    params = new Array();
    params.push
    (
      $("ajax_input"),
      $("ajax_input_fourth"),
      $("catagory")
    );
    ja(
        {
          u: "ajax.php",
          m: "GET",
          ct: "application/x-www-form-urlencoded",
          cb: function(response){console.log(response); },
          d: elementsParameterAdapter(params)
        } 
    );    
  }
  function tryPost() {
    params = new Array();
    params.push
    (
      $("ajax_input"),
      $("ajax_input_fourth"),
      $("catagory")
    );
    ja(
        {
          u: "ajax.php",
          m: "POST",
          ct: "application/x-www-form-urlencoded",
          cb: function(response){console.log(response); },
          d: elementsParameterAdapter(params)
        } 
    );       
  }

  function testAjax() {
    tryGet();
    tryPost();
    return false;
  }
</script>
<form method="GET">
  <input type="text" name="ajax_input" placeholder="Generic ajax input for testing" id="ajax_input"/>
  <label for="ajax_input_fourth">checkable</label>
  <input type="checkbox" name="ajax_input_fourth" id="ajax_input_fourth" checked=checked/>

  <label for="catagory">Category</label>
  <select name="catagory" id="catagory">
    <option>Programming</option>
    <option>Life</option>
  </select>

  <input type="button" onclick="testAjax();" id="submit_button" value="submit_button"/>
</form>
<div id="ResponseDiv"></div>
<div id="loading"></div>
