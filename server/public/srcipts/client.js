$(onReady);

function onReady() {
    console.log('IN READY');
    getMath();
    //equal button click listener
    $('.equalBtn').on('click', equalBtn);

    $('.clearBtn').on('click', clearBtn);
    $('.add').on('click', addBtn);
    $('.subtract').on('click', subtractBtn);
    $('.multiply').on('click', multiplyBtn);
    $('.divide').on('click', divideBtn);




};


let newResults = {
    a: '',
    b: '',
    operator: '',
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

//function for equal button
//sends client input to server
function equalBtn() {
    console.log('IN EQUAL');

    newResults.a = $('.numOne').val();
    newResults.b = $('.numTwo').val();

    $.ajax({
        url: "/result",
        method: "POST",
        data: newResults
    }).then(function (response) {
        console.log(response);
        addBtn();
        subtractBtn();
        multiplyBtn();
        divideBtn();
        
        getMath();
    }).catch(function(error){
        console.log(error);
        alert('ERROR IN POST')
    })

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
        alert('ERROR IN GET')
    })
    console.log('END getMath');
}

function render(resultList) {
    //empty the result field
    $('.total').empty();
    $('.list').empty();
    //for of loop to append HX to DOM
    for (let result of resultList) {
        $('.list').append(`<li> ${result.a} ${result.operator} ${result.b} = ${result.sum}</li>`)
    }
    //there's a buuuug. Not sure where.
    $('.total').append(`${resultList[resultList - 1].sum}`);

    $('.numOne').val('');
    $('.numTwo').val('');
}
