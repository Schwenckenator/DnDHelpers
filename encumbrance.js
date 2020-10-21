
var itemRowHtml;
var itemRowDiv;

var tableHtml;

var tableLengths = [];

var tableCount = 1;

function addRow(tableId){
    
    let table = document.getElementById(tableId);
    let newRow = document.createElement("div");
    let rowId = tableId+"_"+tableLengths[tableId];

    newRow.setAttribute("class", "trow");
    newRow.setAttribute("id", rowId);
    newRow.innerHTML = itemRowHtml;
    table.append(newRow);

    newRow.children[0].children[0].id = rowId + "_equipped";
    newRow.children[1].children[0].setAttribute("onchange", "onChangeRow('" + tableId + "', '" + rowId + "')");

    newRow.children[1].children[0].id = rowId + "_qty";
    newRow.children[1].children[0].setAttribute("onchange", "onChangeRow('" + tableId + "', '" + rowId + "')");

    newRow.children[3].children[0].id = rowId + "_bulk";
    newRow.children[3].children[0].setAttribute("onchange", "onChangeRow('" + tableId + "', '" + rowId + "')");

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

function addTable(){

    let container = document.getElementById("tableContainer");
    let newTable = document.createElement("div");
    let tableId = "t" + tableCount;

    newTable.setAttribute("class", "table");
    newTable.setAttribute("id", tableId);
    newTable.innerHTML = tableHtml;
    container.append(newTable);

    newTable.children[0].children[0].id = tableId + "_name";
    newTable.children[0].children[1].id = tableId + "_totalBulk";
    newTable.children[0].children[2].id = tableId + "_bulkLimit";
    newTable.children[0].children[3].id = tableId + "_encumbered";

    newTable.children[2].id = tableId;
    let rowId = tableId + "_0";
    
    addRow(tableId);


    tableCount++;
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
        document.getElementById(tableId +  "_encumbered").style.display = "inline";
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
    tableHtml = document.getElementById("tableContainer").children[0].innerHTML;
    tableLengths["onPerson"] = 1;
    tableCount = 1;


}