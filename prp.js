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

function go() {
    interval = setInterval(sequence, 1000);
}

function checkResult() {
    console.log('test');
}