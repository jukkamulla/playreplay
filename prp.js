var timer = 0;
var playerWins = 0;
var rightValueCounter = 0;
var sequenceTime = 5000;
var interval;
var setNumber1;
var setNumber2;


function setHtmlValue(id, value) {
    var element = document.getElementById(id).firstChild;
    element.innerHTML = value.toString();
}

function sequence() {
    timer++;
    setHtmlValue("sequence", timer);
    if (timer === 11) {
        timer = 0;
        setHtmlValue("sequence", timer);
        rightValueCounter = 0;
        setHtmlValue("player", rightValueCounter);
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
    interval = setInterval(sequence, sequenceTime);
    setRandomNumbers();
}

function checkResult() {
    var resultElement = document.getElementById("result");
    if (resultElement.value == setNumber1 + setNumber2) {
        rightValueCounter++;
        setHtmlValue("player", rightValueCounter);
        resultElement.value = "";
        setRandomNumbers();
    }
    function isPlayerWins() {
        if (rightValueCounter === 10) {
            if (timer < 10) {
                playerWins++;
                setHtmlValue("counter", playerWins);
            }
            clearInterval(interval)
            timer = 0;
            setHtmlValue("sequence", timer);
            rightValueCounter = 0;
            setHtmlValue("player", rightValueCounter);
        }
    }
    isPlayerWins()
}

function keyCode(event) {
    var key = event.which || event.keyCode;
    if (key === 13) {
        console.log("press enter");
        checkResult();
    }
}