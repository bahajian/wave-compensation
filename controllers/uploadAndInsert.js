const sql = require("../helpers/connection.js");
const readline = require('readline');
var fs = require('fs')
const PayPeriod = require('./PayPeriod');
var payPeriodList = {};

const UploadAndIndert = function() {
};

UploadAndIndert.insertRecords = async function(path) {
    payPeriodList = await PayPeriod.selectAll();
    var rd = readline.createInterface({
        input: fs.createReadStream(path),
        output: process.stdout,
        console: false
    });
    var i=0;
    rd.on('line', async function(line) {
        if(i > 0){
            let timeObj = buildObject(line)
            timeObj.payPeriodId = findPayPeriodId(timeObj.date, payPeriodList);
            let result = await sql.query("INSERT INTO EmployeeTimeReport SET ?", timeObj);
        }
        i++;
    });
    let result = "";
    return result;
};

function findPayPeriodId(date, payPeriodList) {
    for(var i = 0; i <= payPeriodList.length; i++){
        if (date < payPeriodList[i].endDate && date > payPeriodList[i].startDate){
            return payPeriodList[i].id;
        }
    }
}

function buildObject(line) {
    arr = line.split(',');
    dateArr = arr[0].split('/');
    var obj = {
        date: new Date(dateArr[2], dateArr[1], dateArr[0]),
        hoursWorked : parseFloat(arr[1]),
        employeeId: arr[2],
        jobGroup : arr[3],
    }
    return obj;
}

module.exports = UploadAndIndert;