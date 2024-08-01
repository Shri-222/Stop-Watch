
var min = 0;
var sec = 0;
var Msec = 0;

var Minets = document.getElementById("min");

var Second = document.getElementById("sec");

var MSecods = document.getElementById("Msec");

var SetInter;

// TStart.addEventListener('click', startTimer());


function Timer() {
    Msec++;
    MSecods.innerHTML = Msec;
    if(Msec > 100) {
        sec++;
        Second.innerHTML = sec;
        Msec = 0;
    }

    else if(sec > 60){
        min++;
        Minets.innerHTML = min;
        sec = 0;
    }
   
}

function Start() {
    SetInter = setInterval(Timer , 20);
    document.getElementById("start").disabled = true;
    // document.getElementById("start").classList.add("btn");
    // document.getElementById("start").classList.remove("btn:hover");
}

function Pause() {
    clearInterval(SetInter);
    document.getElementById("start").disabled = false;
}

function Reset() {
    displayHistry();

    min = 0;
    sec = 0;
    Msec = 0;

    Minets.innerHTML = min;
    Second.innerHTML = sec;
    MSecods.innerHTML = Msec;
}

function displayHistry() {
    document.getElementById("timeOutHistry").classList.add("active");

    var HistryMin = document.createElement("h2");
    var HistrySec = document.createElement("h2");
    var HistryMSec = document.createElement("h2");
    var Break = document.createElement("br");

    var Hm = document.createTextNode(min);
    var Hs = document.createTextNode(sec);
    var HMs = document.createTextNode(Msec);

    HistryMin.appendChild(Hm);
    HistrySec.appendChild(Hs);
    HistryMSec.appendChild(HMs);

    if(Msec == ""){
        alert("Can't add empty Value")
    }

    else{
        document.getElementById("timeOutHistry").appendChild(HistryMin);
        document.getElementById("timeOutHistry").appendChild(HistrySec);
        document.getElementById("timeOutHistry").appendChild(HistryMSec);
        document.getElementById("timeOutHistry").appendChild(Break);
    }
}

// document.getElementById("start").addEventListener('click', Start());
// document.getElementById("pause").addEventListener('click', Pause());
// document.getElementById("reset").addEventListener('click', Reset());
