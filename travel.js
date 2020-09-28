var season = "";
var climate = "";
var depart = 0;
var arrive = 0;
var navigation = 0;

var poolIds = ["pool_dawn", "pool_morning", "pool_afternoon", "pool_evening", "pool_night", "pool_predawn", "pool_full"];

var seasonDict = {
    polar_summer: {
        light: ["day", "day", "day", "day", "day", "twilight"]
    },
    summer : {
        light: ["day", "day", "day", "day", "twilight", "night"]
    }, 
    autumn: {
        light: ["day", "day", "day", "twilight", "night", "night"]
    }, 
    spring: {
        light: ["day", "day", "day", "twilight", "night", "night"]
    }, 
    winter: {
        light: ["twilight", "day", "day", "twilight", "night", "night"]
    },
    polar_winter: {
        light: ["twilight", "day", "twilight", "night", "night", "night"]
    }
};

function onChangeSeason(input){
    season = input;
}

function onChangeClimate(input){
    climate = input;
}

function onChangeDepart(input){
    depart = Number.parseFloat(input);
}

function onChangeArrival(input){
    arrive = Number.parseFloat(input);
}

function onChangeNavigation(input){
    navigation = Number.parseFloat(input);
}

function travel(){
    hideError();
    console.log("Travelling!");
    let travelLen = arrive - depart + 1;
    console.log("Travel length is "+travelLen);

    //#region Error Handling  
    let failed = false;
    let errMsg = "";

    if(travelLen <= 0){
        console.log("You can't travel back in time.");
        errMsg += "Arriving before you depart. You can't travel back in time.";
        failed = true;
    }

    console.log("Season = '"+ season +"'");
    if(season == ""){
        console.log("Please select a season.");
        if(errMsg != ""){
            errMsg += "<br>";
        }
        errMsg += "Please select a season.";
        failed = true;
    }

    console.log("Climate = '"+ climate +"'");
    if(climate == ""){
        console.log("Please select a climate zone.");
        if(errMsg != ""){
            errMsg += "<br>";
        }
        errMsg += "Please select a climate.";
        failed = true;
    }

    if(failed){
        errorMessage(errMsg);
        return;
    }
    //#endregion
    
    let seasonObj = getSeason(season);
    let dicePoolRolls = [];

    for(let i=depart; i<=arrive; i++){
        if(seasonObj.light[i] != "day"){
            dicePoolRolls.push(i);
        }
    }

    showElement("pool_full");
    for(let i=0; i<6;i++){
        hideElement(poolIds[i]);
    }
    dicePoolRolls.forEach(x => showElement(poolIds[x]));
}

function errorMessage(s){
    showElement("error");
    document.getElementById("error").innerHTML = s;
}

function hideError(){
    hideElement("error");
}

function getSeason(str){
    if(str == ""){
        return;
    }else if(str=="polar_summer"){
        return seasonDict.polar_summer;
    }else if(str=="summer"){
        return seasonDict.summer;
    }else if(str=="autumn"){
        return seasonDict.autumn;
    }else if(str=="spring"){
        return seasonDict.spring;
    }else if(str=="winter"){
        return seasonDict.winter;
    }else if(str=="polar_winter"){
        return seasonDict.polar_winter;
    }
}

function showElement(id){
    document.getElementById(id).style.display = 'block';
}

function hideElement(id){
    document.getElementById(id).style.display = 'none';
}