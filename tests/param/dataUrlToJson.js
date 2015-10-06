describe('dataUrlToJson', function() {
    it('should have the same json value as the data', function() {
        var pb = new ParamsBuilder(), params, expected, expect = chai.expect;
        params = pb.inputs($_("inputs")).get();
        expected = '{"textual_input_input":"textTestValue","numerical_input_example":"42"}';
        dataUrlJson = dataUrlToJson(params);
        expect(dataUrlJson).to.equal(expected);
    });
});