# aj(ax)
[![Build Status](https://secure.travis-ci.org/aretecode/aj.svg)](https://travis-ci.org/aretecode/aj)
[![License](https://img.shields.io/badge/licence-MIT-brightgreen.svg)](https://github.com/aretecode/aj/blob/master/LICENSE)

Smallest & fastest ajax library, made modular.

## small & fast
Tiny size & blazing performance. 
* codegolf: 173 bytes gzipped (218 bytes uncompressed)
* Param: 662 bytes gzipped 
* Param.ez: 284 bytes gzipped -if you copy it into an independent function- (408 bytes uncompressed)

## why
When you want to do ajax but don't want to use an entire library like jquery...
When you do a lot of requests... each bit of overhead counts.
Include and use the ones you want.

## terminology
* _param_ = parameter
* _aj_ = short form of ajax
* _G_ = short for Get
* _P_ = short for Post

## installation
Using bower:
```
bower install aj --save
```

Or, download the files, and include them however you like.



## parameter
Get your Data ready for the aj(ax) request, from a form elements (```html <select>, <input type=checkbox|text|any>```, from js anonymous objects, or form elements and objects mixed.# example

## examples
See [examples/] for more

Our HTML
```html
<form method="POST">
    <label for="pickle">Category</label>
    <select name="pickle" id="pickle" class="ajable selects">
        <option>ickleme-tickleme-pickleme</option>
        <option selected>ickleme-tickleme-pickleme-too</option>
        <option>ickleme-tickleme-pickleme-shoe</option>
    </select>
    <input type="text" name="textual_input_input" id="textual_input_input" class="ajable inputs" value="textTestValue"/>
    <input type="num" name="numerical_input_example" id="numerical_input_example" class="ajable inputs" value="42"/>
    <input type="checkbox" name="checkbox_input" id="checkbox_input" class="ajable" checked/>

    <p><input type="radio" name="answer" value="true" class="ajable radios" checked="checked">True</p>
    <p><input type="radio" name="answer" value="false" class="ajable radios">False</p>

    <input type="button" onclick="exampleAjax();" id="submit_button" value="submit_button"/>
</form>
```

The JS
```js 
// Params
var ajable = document.getElementsByClassName("ajable");    
var dataurl = Params.elements(ajable); // pb.elements(ajable).get();

// aj(ax) Post
ajP({
    url: "ajax.php",
    data: params,
    listeners:  {
        // some example ones to listen for 
        404: function(result){console.log(result); console.log("404");},
        201: function(result){console.log(result); console.log("201");},
        200: function(result){console.log(result); console.log("200");},
        303: function(result){console.log(result); console.log("303");},
        other: function(result){console.log(result); console.log("other");},
        done: function(result){console.log(result); console.log("done");}
    }
});

```


## @TODO:
* [ ] username & password
* [x] remove json dependency
* [ ] Use http://httpstatus.es/
* [x] readyState listener
* [x] change names to shorter
* [x] use bower
* [x] use chai
* [x] use mocha 
* [x] write tests  
* [ ] would be nice to have paramsBuilder not add "&" since the `s` functions already strip it out...
* [ ] put on CDN
* [x] recalculate minified size
* [ ] put up min version again

P.S.
Support can be added, in IE cache & parsing json & xml might have problems. 