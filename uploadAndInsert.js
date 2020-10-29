const sql = require("./connection.js");
const readline = require('readline');
var fs = require('fs')

const UploadAndIndert = function(payPeriod) {
    this.startDate = payPeriod.startDate;
    this.endDate = payPeriod.endDate;
};

UploadAndIndert.insertRecords = async function(path) {
    var rd = readline.createInterface({
        input: fs.createReadStream(path),
        output: process.stdout,
        console: false
    });

    rd.on('line', function(line) {
        console.log(line);

        let result = sql.query("INSERT INTO PayPeriod SET ?", payPeriod);
    });
    //console.log(payPeriod)
    let result = "";
    return result;
};

function buikdObject(line) {
    arr = line.split(',');
    var obj = {
        date: arr[0],
        hoursWorked : arr[1],
        employeeId: arr[2],
        employeeGroup : [3]
    }
}

module.exports = UploadAndIndert;