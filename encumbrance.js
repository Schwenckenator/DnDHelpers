
var itemRowHtml;
var itemRowDiv;

var tableLengths = [];

function addRow(tableId){
    
    let table = document.getElementById(tableId);
    let newRow = document.createElement("div");
    let rowId = tableId+"_"+tableLengths[tableId];

    newRow.setAttribute("class", "trow");
    newRow.setAttribute("id", rowId);
    newRow.innerHTML = itemRowHtml;
    table.append(newRow);

    newRow.children[1].children[0].id = rowId + "_qty";
    newRow.children[1].children[0].setAttribute("onchange", "onChangeRow('onPerson', 'onPerson_" + tableLengths[tableId] + "')");

    newRow.children[3].children[0].id = rowId + "_bulk";
    newRow.children[3].children[0].setAttribute("onchange", "onChangeRow('onPerson', 'onPerson_" + tableLengths[tableId] + "')");

    newRow.children[4].children[0].id = rowId + "_totalBulk";

    onChangeRow(tableId, rowId);

    tableLengths[tableId]++;
}

function deleteRow(tableId, index=-1){
    if(index < 0){
        index = tableLengths[tableId] -1;
    }
    let id = tableId + "_" + index.toString();
    let row = document.getElementById(id);
    document.getElementById(tableId).removeChild(row);

    tableLengths[tableId] -= 1;
}

function calculateRowBulk(rowId){
    let quantity = document.getElementById(rowId + "_qty").value;
    let singleBulk = document.getElementById(rowId + "_bulk").value;

    //console.log(quantity);
    //console.log(singleBulk);

    return Math.ceil(singleBulk * quantity);
}

function calculateTableBulk(tableId){
    let bulk = 0;
    for(let i=0; i<tableLengths[tableId]; i++){
        let id= tableId + "_" + i + "_totalBulk";
        bulk += Number.parseFloat(document.getElementById(id).value);
    }
    console.log("Table bulk is "+bulk);
    return bulk;
}

function calculateOverload(tableId){
    let totalBulk = Number.parseFloat(document.getElementById(tableId + "_totalBulk").innerHTML);
    let bulkLimit = Number.parseFloat(document.getElementById(tableId +  "_bulkLimit").innerHTML);

    console.log("Total bulk = " + totalBulk + ". Bulk limit = " + bulkLimit);

    if(totalBulk > bulkLimit){
        document.getElementById(tableId +  "_encumbered").style.display = "block";
    }else{
        document.getElementById(tableId +  "_encumbered").style.display = "none";
    }
}

function onChangeRow(tableId, rowId){
    console.log("on Change Row Called!");
    let bulk = calculateRowBulk(rowId);

    console.log("New Bulk is " + bulk);

    let totalBulkId = rowId + "_totalBulk";
    document.getElementById(totalBulkId).value = bulk;

    let tableBulk = calculateTableBulk(tableId);

    document.getElementById(tableId + "_totalBulk").innerHTML = tableBulk;

    calculateOverload(tableId);
}

function onChangeStrength(strength){
    let bulkLimit = document.getElementById("onPerson_bulkLimit");
    if(strength >= 0){
        bulkLimit.innerHTML = strength;
    }
}


window.onload = function(){
    itemRowHtml = document.getElementById("onPerson_0").innerHTML;
    let row = document.getElementById("onPerson_0");
    tableLengths["onPerson"] = 1;
}