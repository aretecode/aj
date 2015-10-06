describe("Aj#ajP()", function() {
    'use strict';
    
    var server, pb, params, expected, outputs = "", inputs = $_("inputs"), expect = chai.expect;

    before(function () {
        server = sinon.fakeServer.create();        
        pb = new ParamsBuilder();
    });

    it("should have the same return result as expected", function(done) {
        params = pb.inputs($_("inputs")).get();
        var dataUrlJson = dataUrlToJson(params);

        ajG({
              url: "ajax.php",
              data: params,
              listeners: {
                404: function(result){console.log(result); console.log("404");},
                201: function(result){console.log(result); console.log("201");},
                200: function(outputs) {

                    outputs = outputs.responseText;

                    chai.expect(outputs).to.equal(dataUrlJson);
                    done();
                },
                303: function(result){console.log(result); console.log("303");},
                other: function(result){console.log(result); console.log("other");}
              }
        }); 
  
        server.requests[0].respond(
            200,
            {"Content-Type": "application/json"},
            dataUrlJson
        );
    });

    after(function () { server.restore(); });
});