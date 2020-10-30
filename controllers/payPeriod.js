

// constructor
const PayPeriod = function(payPeriod) {
    this.startDate = payPeriod.startDate;
    this.endDate = payPeriod.endDate;
};
console.log()
if(process.env.NODE_ENV != "test") {
    PayPeriod.sql = require("../helpers/connection.js");
} else{
    PayPeriod.sql = {};
}


PayPeriod.create = async function(payPeriod) {
    let result = await PayPeriod.sql.query("INSERT INTO PayPeriod SET ?", payPeriod);
    return result;
};

PayPeriod.selectAll = async function() {
    let result = await PayPeriod.sql.query("SELECT * FROM PayPeriod");
    return result;
};

PayPeriod.start = async function (y, callback) {
    for(m = 0; m < 12; m++){
        d = daysInMonth(m, y);
        const payPeriod = new PayPeriod({
            startDate: new Date(y, m, 1),
            endDate: new Date(y, m, 15),
        });
        const payPeriod2 = new PayPeriod({
            startDate: new Date(y, m, 16),
            endDate: new Date(y, m, d),
        });
        console.log(payPeriod)
        let res = await PayPeriod.create(payPeriod, function (err, result){
            console.log(result)
        });
        res = await PayPeriod.create(payPeriod2, function (err, result){
            console.log(result)
        });
    }
    callback(null, true);
}

PayPeriod.daysInMonth = daysInMonth;
function daysInMonth (month, year) {
    return new Date(year, month, 0).getDate();
}

module.exports = PayPeriod;
