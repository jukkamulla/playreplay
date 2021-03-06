var timer = 0;
var playerWins = 0;
var rightValueCounter = 0;
var sequenceTime = 5000;
var maxRightValue = 10;
var interval;
var setNumber1;
var setNumber2;


function go() {
    interval = setInterval(sequence, sequenceTime);
    setRandomNumbers();
    removeBlinking();
}

function setRandomNumbers() {
    if (rightValueCounter >= maxRightValue){
        return false;
    }
    setNumber1 = Math.floor((Math.random() * 99) + 1);
    setNumber2 = Math.floor((Math.random() * 99) + 1);
    displayNumber();
}

function displayNumber() {
    var number1 = document.getElementById("number1");
    var number2 = document.getElementById("number2");
    number1.innerHTML = setNumber1.toString();
    number2.innerHTML = setNumber2.toString();
}

function checkResult() {
    if (interval) {
        var resultElement = document.getElementById("result");
        if (resultElement.value == setNumber1 + setNumber2) {
            rightValueCounter++;
            setHtmlValue("player", rightValueCounter);
            resultElement.value = "";
            setRandomNumbers();
            removeSignal();
        }else {
            addSignal();
        }
        isPlayerWins()
    }
}

function isPlayerWins() {
    if (rightValueCounter === maxRightValue) {
        if (timer < 10) {
            playerWins++;
            setHtmlValue("counter", playerWins);
        }
        resetRound();
        addBlinking();
    }
}

function resetRound() {
    clearInterval(interval);
    interval = false;

    timer = 0;
    setNumber1 = 0;
    setNumber2 = 0;
    rightValueCounter = 0;

    addBlinking();
    displayNumber();
    setHtmlValue("sequence", timer);
    setHtmlValue("player", rightValueCounter);
    removeSignal();
}

function setHtmlValue(id, value) {
    var element = document.getElementById(id).firstChild;
    element.innerHTML = value.toString();
}

function sequence() {
    timer++;
    setHtmlValue("sequence", timer);
    if (timer === 11) {
        resetRound();
    }
}

function keyCode(event) {
    var key = event.which || event.keyCode;
    if (key === 13) {
        checkResult();
    }
}

function addBlinking() {
    var start = document.getElementById("start");
    start.classList.add("blink");
}

function removeBlinking() {
    var start = document.getElementById("start");
    start.classList.remove("blink");
}

function addSignal() {
    var signal = document.getElementById("result");
    signal.classList.add("signal");
}

function removeSignal() {
    var signal = document.getElementById("result");
    signal.classList.remove("signal");
}

