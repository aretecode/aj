describe("ParamsBuilderTest", function() {
    var pb, params, expected, input, expect = chai.expect;

    beforeEach(function() {
        pb = new ParamsBuilder();
    });

    describe("#inputs()", function() {
        it("inputs param string should be as expected", function() {
            params = pb.inputs($_("inputs")).get();
            expected = "textual_input_input=textTestValue&numerical_input_example=42";
            expect(params).to.equal(expected);
        });
    });
    describe("#input()", function() {
        it("should have the same return result as expected on both inputs, using byId", function() {
            pb.reset();
            input = $("textual_input_input");
            params = pb.input(input).get();
            expected = "textual_input_input=textTestValue";
            expect(params).to.equal(expected);

            pb.reset();
            input = $("numerical_input_example");
            params =  pb.input(input).get();
            expected = "numerical_input_example=42";
            expect(params).to.equal(expected);
        });
    });

    describe("#ez()", function() {
        it("inputs param string should be as expected", function() {
            var keys = [{
                key: "test"
            }];
            var ajable = $_("ajable");
            var fullUrlData = keys.concat(ajable);

            params = pb.ez(fullUrlData).get();

            var expected = "key=test&pickle=ickleme-tickleme-pickleme-too&textual_input_input=textTestValue&numerical_input_example=42&answer=true";
            expect(params).to.equal(expected);
        });
    });

    describe("#options()", function() {
        it("inputs param string should be as expected", function() {
            params = pb.options($_("selects")).get();
            expected = "pickle=ickleme-tickleme-pickleme-to";
            expect(params).to.equal(expected);
        });
    });

    describe("#element()", function() {
        it("inputs param string should be as expected", function() {
            var ajable = $_("ajable");
            params = pb.elements(ajable).get();
            var expected = "pickle=ickleme-tickleme-pickleme-too&textual_input_input=textTestValue&numerical_input_example=42&answer=true";
            expect(params).to.equal(expected);
        });
    });

});
