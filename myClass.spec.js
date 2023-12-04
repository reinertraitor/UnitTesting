var myclass = require('../src/myclass.js');
var sinon = require('sinon');
var myobj = new myclass();
var chai = require('chai');
var expect = chai.expect;

describe("Test suit", function() {

    it("should return 3", function() {
    expect(myobj.add(1,2)).to.be.equal(3);
    });
    it("should spy return 3", function() {
    var spy = sinon.spy(myobj, "add");
    var arg1=10; var arg2=20;
    myobj.callAnotherfn(arg1,arg2);
    // sinon.assert.calledWith(spy, arg1, arg2);
    expect(spy.calledOnce).to.be.true;
    expect(spy.calledWith(10,20)).to.be.true;
    });

    it("should return 3", function() {
        var callback = sinon.spy();
        myobj.calltheCallback(callback);
        expect(callback.calledOnce).to.be.true;
        });
        
   
});