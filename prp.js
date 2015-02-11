var i = 1;
var interval;

function sequence() {
    var sequenceElement = document.getElementById("sequence");
    var sequenceParagraph = sequenceElement.firstChild;
    sequenceParagraph.innerHTML = i.toString();
    i++;
    if (i === 11) {
        clearInterval(interval);
        i = 0;
    }
}

function go(){
    interval = setInterval(sequence, 1000);
}