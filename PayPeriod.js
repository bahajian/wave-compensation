const sql = require("./connection.js");

// constructor
const PayPeriod = function(payPeriod) {
    this.startDate = payPeriod.startDate;
    this.endDate = payPeriod.endDate;
};

PayPeriod.create = async function(payPeriod) {
    //console.log(payPeriod)
    let result = await sql.query("INSERT INTO PayPeriod SET ?", payPeriod);
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

function daysInMonth (month, year) {
    return new Date(year, month, 0).getDate();
}


module.exports = PayPeriod;

