//import GET
const express = require('express'); 
//import POST
const bodyParser = require('body-parser');


const app = express();
const PORT = 5000; 

//Serve Static Files
//to run/show HTML side
app.use(express.static('server/public'));

//setup middlewares for app.post
app.use(bodyParser.urlencoded({extended:true}));//for add.post. helps find data sent to client


//client request
app.get('/quotes', function(req, res) {
    console.log('IN GET QUOTES');
    //res.send(------);
})

//client dynamatic (new) request
app.post('/quotes', (req, res) => { 
    console.log('POST /quotes', req.body);
    // push new array/variable/function to old array/variable/function
    //-----.push(req.body);

});



//function to run port on server we want
app.listen(PORT,function(){ //call back function --- click listener
    console.log('server running on port', PORT);
}); 