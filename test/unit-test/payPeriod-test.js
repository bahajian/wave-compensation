const PayPeriod = require('../../controllers/PayPeriod');
var assert = require('chai').assert;
const sinon = require("sinon");

const sqlStub = {
    query: function (){
        return "some record"
    }
}

describe('PayPeriod', function() {
    describe('#daysInMonth()', function() {
        it('find days of a given month and a year', function(done) {
            // sinon.stub(PayPeriod, "sql").returns(sqlStub);
            var d = PayPeriod.daysInMonth(1, 2020);
            assert.equal(d, 31);
            done();
        });
    });

    describe('#create()', function() {
        it('creates a whole pay calendars in the db', async function() {
            PayPeriod.sql = sqlStub
            var result = await PayPeriod.create();
            assert.equal(result, "some record");
        });
    });

});
