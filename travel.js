var season;
var depart = 0;
var arrive = 0;

var poolIds = ["pool_dawn", "pool_morning", "pool_afternoon", "pool_evening", "pool_night", "pool_predawn", "pool_full"];

var seasonDict = {polar_summer: 5, "summer" : 4, "autumn":3, "spring":3, "winter":2,"polar_winter":1};

function onChangeSeason(input){
    season = input;
}

function onChangeDepart(input){
    depart = Number.parseFloat(input);

}

function onChangeArrival(input){
    arrive = Number.parseFloat(input);
}

function travel(){
    console.log("Travelling!");
    let travelLen = arrive - depart + 1;
    console.log("Travel length is "+travelLen);
    if(travelLen <= 0){
        console.log("You can't travel back in time.");
        return;
    }
    if(season == ""){
        console.log("Please select a season.");
        return;
    }

    seasonDict.polar_summer

    showElement("pool_full");
    for(let i=0; i<6;i++){
        hideElement(poolIds[i]);
    }
}

function showElement(id){
    document.getElementById(id).style.display = 'block';
}

function hideElement(id){
    document.getElementById(id).style.display = 'none';
}