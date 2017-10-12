import assert = require("assert")
import util = require("./test-utils")
import parser = require("raml-1-parser");
import RamlWrapper = parser.api10;
    var api:RamlWrapper.Api;
    var songsResource:RamlWrapper.Resource;
    var songResource:RamlWrapper.Resource;
    var getSongMethod:RamlWrapper.Method;
    var response:RamlWrapper.Response;


        api = util.loadApiWrapper1("./helperTestApi.raml");

        var method=api.childResource("/songs").methods()[0];
        var param=method.queryParameters()[0];
        assert.equal(param.name(),'genre');
        var errors=param.validateInstance("pop2");
        assert.equal(errors.length,1)
        var errors=param.validateInstance("pop");
        assert.equal(errors.length,0)

