var i = 1;
var j = 0;
var rightValueCounter = 0;
var interval;
var setNumber1;
var setNumber2;


function setCounter() {
    var counterElement = document.getElementById("counter");
    var counterParagraph = counterElement.firstChild;
    j++;
    counterParagraph.innerHTML = j.toString();
}

function sequence() {
    var sequenceElement = document.getElementById("sequence");
    var sequenceParagraph = sequenceElement.firstChild;
    sequenceParagraph.innerHTML = i.toString();
    i++;

    if (i === 11) {
        clearInterval(interval);
        setCounter();
        i = 0;
    }
}

function setRandomNumbers() {
    var number1 = document.getElementById("number1");
    setNumber1 = Math.floor((Math.random() * 99) + 1);
    var number2 = document.getElementById("number2");
    setNumber2 = Math.floor((Math.random() * 99) + 1);
    number1.innerHTML = setNumber1.toString();
    number2.innerHTML = setNumber2.toString();
}

function go() {
    interval = setInterval(sequence, 1000);
    setRandomNumbers();
}

function checkResult() {
    var resultElement = document.getElementById("result");
    console.log(resultElement.value);
    var playerElement = document.getElementById("player").firstChild;
    if (resultElement.value == setNumber1 + setNumber2) {
        rightValueCounter++;
        playerElement.innerHTML = rightValueCounter.toString();
        resultElement.value = "";
        setRandomNumbers();
    }
}

function keyCode(event) {
    var key = event.which || event.keyCode;
    if (key === 13) {
        console.log("press enter");
        checkResult();
    }

}