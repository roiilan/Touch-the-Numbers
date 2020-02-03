'use strict'
var gColSize = 4; //colum -- td
var gRowSize = 4; //tr
var gNums = randNums(gColSize * gRowSize);
var gBoard = createBoard(gColSize, gRowSize, gNums);
var gCurrNum = 1;
var gIsBegining = true;
var gMilliS = 0;
var gSeccond = 0;



function startGame() {
    gBoard;
}

function createBoard(colSize, rowSize, nums) {
    var idxNums = 0;
    var strHtml = '';
    var elBoard = document.querySelector('.board');
    elBoard.innerText = 'text';



    for (var i = 0; i < rowSize; i++) {
        strHtml += '<tr>';

        for (var j = 0; j < colSize; j++) {
            strHtml += `<td data-cell=${nums[idxNums]} onclick="cellClicked(this)" >`;
            strHtml += nums[idxNums];
            strHtml += '</td>';
            idxNums++;

        }
        strHtml += '</tr>';
    }
    elBoard.innerHTML = strHtml;
}



function randNums(arrLength) {
    var nums = [];
    var randNums = [];
    for (var i = 0; i < arrLength; i++) {
        nums[i] = i + 1;
    }
    for (var j = 0; j < arrLength; j++) {
        var idx = getRandomInt(0, nums.length - 1);
        randNums.push(nums[idx]);
        nums.splice(idx, 1);
    }
    return randNums;
}


function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}



function cellClicked(clickedNum) {
    var cellData = +clickedNum.dataset.cell;
    console.log(cellData);

    if (gCurrNum !== cellData) return;
    if (gIsBegining = true) {
        gIsBegining = false;
    //    var setInterval(timerOn, 1);
        
    }
    if (gCurrNum === cellData) {
        clickedNum.style.backgroundColor = "green";
        gCurrNum++;

    }
}



// function timerOn() {
//     gMilliS++;

//     if (gMilliS === 100) {
//         gSeccond ++;
//         gMilliS = 0;
//     }

//     console.log('s:',gSeccond,' ms: ', gMilliS);

// }
