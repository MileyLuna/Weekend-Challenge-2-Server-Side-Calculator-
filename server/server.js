//import GET
const express = require('express');
//import POST
const bodyParser = require('body-parser');

const resultList = require('./modules/result.js');

const app = express();
const PORT = 5000;



//Serve Static Files
//to run/show HTML side
app.use(express.static('server/public'));

//setup middlewares for app.post
app.use(bodyParser.urlencoded({ extended: true }));//for add.post. helps find data sent to client


//client request
app.get('/result', function (req, res) {
    console.log('IN RESULT LIST');
    res.send(resultList);
})

//client dynamatic (new) request
app.post('/result', (req, res) => {
    console.log('POST /resultList', req.body);
    // push new array/variable/function to old array/variable/function

    let equation = req.body;
    let operator = equation.operator;
    let numOne = Number(equation.a);
    let numTwo = Number(equation.b);
    
    let sum = 0;
    switch (operator) {
        case "+":
            sum = numOne + numTwo;
            break;

        case "-":
            sum = numOne - numTwo;
            break;

        case "/":
            sum = numOne / numTwo;
            break;

        case "*":
            sum = numOne * numTwo;
            break;

        default:
            break;
    }
    equation.sum = sum;
    resultList.push(equation);
    res.sendStatus(201);
});

//function to run port on server we want
app.listen(PORT, function () { //call back function --- click listener
    console.log('server running on port', PORT);
}); 