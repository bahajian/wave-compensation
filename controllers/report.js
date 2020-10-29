const sql = require("../helpers/connection.js");

// constructor
const Report = function(report) {
    this.startDate = report.startDate;
    this.endDate = report.endDate;
};

Report.selectAll = async function(callback) {
    var payrollReport = {employeeReports:[]}
    let result = await sql.query("select * from (SELECT employeeId, payPeriodId, sum(hoursWorked) as totalHours, jobGroup \n" +
        "FROM compensation.EmployeeTimeReport \n" +
        "group by employeeId, payPeriodId, jobGroup ) as tb1 join compensation.PayPeriod as tb2 \n" +
        "on tb1.payPeriodId = tb2.id");
    result.forEach(el => {
        var report = {
            employeeId: el.employeeId,
            payPeriod: {
                startDate: el.startDate,
                endDate: el.endDate
            },
            amountPaid: (el.jobGroup == 'A' ? el.totalHours * 20 : el.totalHours * 30)
        }
        payrollReport.employeeReports.push(report);
    })
    return payrollReport;
};

module.exports = Report;
