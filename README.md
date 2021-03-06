# wave-compensation

## How to install the software
For running the server please follow the instructions to create a database, install libraries and run the script. After that you can test api.

1- Download and install the mysql server and run the script to create tables. you can find the sql creation script in “schema.sql” in the compensationProject folder. 

2- install the node.js.

3- In the “helper” folder, open “db.config.js” and update Mysql username and password.

4- In the terminal window, open the project folder and run “npm install” or “sudo npm install”.

5- Run the server by this command: “node index.js”

6- For configuring the years, open a browser and run: `http://localhost:3000/compensation/start/2015` and the same way to create and configure for other year (2016 and 2017).

7- In this step, needed to upload the csv file. For upload, we have 3 ways:
localhost:3000/form
Postman: for post man use “Post” method and `http://localhost:3000/compensation/upload` url,
And set “single_file” key and value as the CSV file.
Curl: 
`curl --location --request POST 'http://localhost:3000/compensation/upload' \ --form 'single_file=@/Users/Desktop/time-report-42.csv'`

8- Running the address in a browser or postman or curl, to get a report from API.
	“localhost:3000/report”

## How to test the software
### Unit test
for running unit tests, first need to install some libraries.
1- run this command line in terminal `npm install mocha chai newman sinon --save-dev`
2- Be sure the project is running. run the project by `node index.js`
3- running this command line in the terminal in the project root folder. If you can see the “2 passing” message it means everything is working perfectly.

```
NODE_ENV=test mocha ./test/unit-test/payPeriod-test.js
```

### Regression test
1- Be sure the project is running. run the project by `node index.js`
2- run this command line in the terminal in the project root folder.

```
node test/regression-test/regression.js

```
By running this command line you can see the test results and passed or failed steps.
