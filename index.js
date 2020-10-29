
const { v4: uuidv4 } = require('uuid');
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const fileUpload = require('express-fileupload');
const PayPeriod = require('./controllers/PayPeriod');
const Report = require('./controllers/report');
const UploadAndIndert = require('./controllers/uploadAndInsert');
const path = require('path')

app.use(fileUpload({
    createParentPath: true,
    limits: {
        fileSize: 2 * 1024 * 1024 * 1024 //2MB max file(s) size
    },
}));
// parse requests of content-type: application/json
app.use(bodyParser.json());

// parse requests of content-type: application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/form', express.static(__dirname + '/index.html'));

app.post('/compensation/upload', async (req, res) => {
    try {
        if(!req.files) {
            res.send({
                status: false,
                message: 'No file uploaded'
            });
        } else {
            //Use the name of the input field (i.e. "avatar") to retrieve the uploaded file
            let single_file = req.files.single_file;
            let fileName = uuidv4();
            let filePath = path.join( __dirname , '/uploads/', fileName);
            await single_file.mv(filePath);
            await UploadAndIndert.insertRecords(filePath);
            //send response
            res.send({
                status: true,
                message: 'File is uploaded',
                data: {
                    name: single_file.name,
                    mimetype: single_file.mimetype,
                    size: single_file.size
                }
            });
        }
    } catch (err) {
        res.status(500).send(err);
    }
});


// simple route
app.get("/compensation/start/:year", (req, res) => {
    PayPeriod.start(req.params.year, function (err, result){
        res.json({ message: "start has successfully done: " + result });
    });
});

app.get("/compensation/report", async (req, res) => {
    var result = await Report.selectAll();
    res.json(result);
});

// set port, listen for requests
app.listen(3000, () => {
    console.log("Server is running on port 3000.");
});
