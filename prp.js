var i = 1;
var j = 0;
var interval;

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
    var setNumber1 = Math.floor((Math.random() * 99) + 1);
    var number2 = document.getElementById("number2");
    var setNumber2 = Math.floor((Math.random() * 99) + 1);
    number1.innerHTML = setNumber1.toString();
    number2.innerHTML = setNumber2.toString();
}

function go() {
    interval = setInterval(sequence, 1000);
    setRandomNumbers();
}

function checkResult() {
    console.log('test');
}