$(onReady);

function onReady() {
    console.log('IN READY');

    //equal button click listener
    $('.equalBtn').on('click', equalBtn);

    $('.clearBtn').on('click', clearBtn);
    $('.add').on('click', addBtn);
    $('.subtract').on('click', subtractBtn);
    $('.multiply').on('click', multiplyBtn);
    $('.divide').on('click', divideBtn);

    getMath();


};


let newResults = {
    a: '',
    b: '',
    operator: ''
};

function addBtn() {
    console.log('ADD BTN');
    newResults.operator = '+';
}
function subtractBtn() {
    console.log('SUBTRACT BTN');
    newResults.operator = '-';
}
function multiplyBtn() {
    console.log('MULTIPLY BTN');
    newResults.operator = '*';
}
function divideBtn() {
    console.log('DIVIDE BTN');
    newResults.operator = '/';
}
function clearBtn() {
    console.log('CLEAR BTN');
    $('.numOne').val('');
    $('.numTwo').val('');
}

//create function for calculate button
function equalBtn() {
    console.log('IN EQUAL');

    //     let sum = 0;
    //     let a = $('.numOne').val();
    //     let b = $('.numTwo').val();
    //     let buttonPressed = $(this).html();
    //     console.log(buttonPressed);

    //     if (buttonPressed === "+"){
    //         return a + b;
    //     }else if (buttonPressed === "-"){
    //         return a -b;
    //     }else if (buttonPressed === "*"){
    //         return a * b;
    //     }else if (buttonPressed === "/"){
    //         return a / b;
    //     }
    //     return sum;

    // };


    //function for clearing flieds 
}

function getMath() {
    console.log('START getMath');

    $.ajax({
        url: '/result',
        method: 'GET'
    }).then(function (response) {
        console.log(response);
        render(response);
        //set alert to catch errors
    }).catch(function (error) {
        console.log(error);
        alert('ERROR IN GET /result')
    })
    console.log('END getMath');
}

function render(resultList) {
    //empty the result field
    $('.total').empty();
    //for of loop to append HX to DOM
    for (let result of resultList) {
        $('.list').append(`<li> ${result.a} ${result.operator} ${result.b} = </li>`)
    }
}
