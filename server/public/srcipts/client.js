$(onReady);

function onReady(){
    console.log('IN READY');

    //equal button click listener
    $('.equalBtn').on('click', equalBtn);

    //clear button click listener
    $('.clearBtn').on('click', clearBtn);

};

//create function for calculate button
function equalBtn(){
    console.log('IN EQUAL');
};

//function for clearing flieds 
function clearBtn(){
    console.log('IN CLEAR');

    $('.numOne').val('');
    $('.numTwo').val('');
};

//make variable for inputs
//append sum to DOM
//append HX calculation to DOM
//clear inputs field 