var diceAvg = 2.5; //Default value
var diceSize = 4;

function changeDice(dice){
    diceAvg = Number.parseFloat(dice);
    diceSize = GetDiceSizeFromAvg(diceAvg);
    //console.log("Change Dice; incoming value = " + dice);
    //console.log("Change Dice; New DiceAvg = " + diceAvg);
}

function displayValues(){
    for(let i=-5; i <= 10; i++){
        calculate(i);
    }
}

function GetDiceSizeFromAvg(avg){
    return Math.round(avg * 2 - 1);
}

function calculate(con){
    let targetHP = document.getElementById("hp2Calc").value;
    let hpPerDice = diceAvg + con; 
    console.log(hpPerDice);
    let diceNeeded = targetHP / hpPerDice;
    diceNeeded = Math.round(diceNeeded);

    let diceCode;
    let hpAvg = Math.round((diceAvg + con) * diceNeeded);
    
    if(diceNeeded > 0){
        diceCode = diceNeeded + "d" + diceSize + "+" +(diceNeeded * con);
    }else{
        diceCode = "-----";
        hpAvg = "-----";
    }


    let hpStr;
    let diceStr;
    if(con >= 0){
        hpStr = "hp_con+" + con;
        diceStr = "code_con+"+ con;
    } else {
        hpStr = "hp_con" + con;
        diceStr = "code_con"+ con;
    }
    // console.log("HP string = " + hpStr);
    document.getElementById(diceStr).innerHTML = diceCode;
    document.getElementById(hpStr).innerHTML = hpAvg;
}