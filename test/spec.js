var assert = require('assert');
var bormat = require('../');
describe("a boring format util", function() {
    
    describe("a comma-group number formatter", function() {
        it("should format number strings with commas every three places", function(){
            assert.equal( bormat.commaGroups("1000000000"), "1,000,000,000", "did not format a billion correctly");
        });
        it("should accept a number as an argument", function() {
            assert.equal( bormat.commaGroups(1000000000), "1,000,000,000", "did not format a billion (number) correctly");
        });
        it("should not format numbers less than 1000", function() {
            assert.equal( bormat.commaGroups("893"), "893", "formatted a number less than 1000");
        });
    });
    
    // describe("a timeSince formatter", function() {
    //     
    // });
    
})
