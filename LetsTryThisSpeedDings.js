var Bild = "https://upload.wikimedia.org/wikipedia/commons/f/ff/Pizigani_1367_Chart_10MB.jpg";
var Größe = "10174706";

//var StartZeit, EndZeit;
var Download = new Image();


function Berechnung(){
    var länge = (EndZeit - StartZeit) / 1000;
    console.log("länge: " + länge);
    var geladen = Größe * 8;

    var bps = ( geladen / länge ).toFixed(2);
    console.log("länge der Zeit: " + bps);
    console.log("geladene größe: " + bps);
    console.log("byte pro Sekunde: " + bps);
    var anzeigegeschw = speed(bps);
    console.log(anzeigegeschw);
    var ergebnis = "Your connection speed is" + anzeigegeschw.value + " " + anzeigegeschw.units;

    document.getElementById('ergebnis').innerHTML=ergebnis;
    console.log(ergebnis);
    //document.getElementById('label').innerHTML=ergebnis;
}

function speed( bitsProSekunde ){
    var kBps = (bitsProSekunde / 1024).toFixed(2);
    if ( kBps <= 1 ) return { value: bitsProSekunde, units: "Bps" };
    var mBps = (kBps / 1024).toFixed(2);
    if ( mBps <= 1 ) return { value: kBps, units: "KBps" };
    else return { value: mBps, units: "MBps" };
}


function go(){

    var download = new Image();
    download.onload = function () {
        EndZeit = (new Date()).getTime();
        console.log("endzeit: "+ EndZeit);
        Berechnung();
    }
    StartZeit = (new Date()).getTime();
    console.log("startzeit: "+ StartZeit);
    var cacheBuster = "?nnn=" + StartZeit;
    download.src = Bild + cacheBuster;
    
}