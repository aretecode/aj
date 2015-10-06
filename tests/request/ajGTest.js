describe("Aj#ajG()", function() {
    'use strict';

    var server, pb, params, expected, outputs = "", inputs = $_("inputs"), expect = chai.expect;

    before(function () {
        server = sinon.fakeServer.create();        
        pb = new ParamsBuilder();
    });

    it("should return the json result of the params using a mock sinon server", function(done) {
        params = pb.inputs($_("inputs")).get();
        var dataUrlJson = dataUrlToJson(params);

        server.respondWith("GET", "ajax.php?"+params, [
            200,
            {"Content-Type": "application/json"},
            dataUrlJson
        ]);

        ajG({
              url: "ajax.php",
              data: params,
              listeners: {
                200: function(result) {
                    // result = ajResponseAsJson(result); // JSON.parse(request.responseText);
                    result = result.responseText;
                    expect(result).to.equal(dataUrlJson);
                    done();
                }
              }
        });

        server.respond();
    });

    it("should return the same json result, but using a route via a mock sinon server", function(done) {
        var pb = new ParamsBuilder(), params, expected, outputs = "", inputs = $_("inputs"), expect = chai.expect;
        params = pb.inputs($_("inputs")).route();
        var dataUrlJson = dataUrlToJson(params);

        server.respondWith("GET", "ajax.php" + params, [
            200,
            {"Content-Type": "application/json"},
            dataUrlJson
        ]);

        ajG({
              url: "ajax.php",
              route: true,
              data: params,
              listeners: {
                200: function(result) {
                    // result = ajResponseAsJson(result); // JSON.parse(request.responseText);
                    result = result.responseText;
                    expect(result).to.equal(dataUrlJson);
                    done();
                }
              }
        });

        server.respond();
    });

    after(function () { server.restore(); });
});