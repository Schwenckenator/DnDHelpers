var initComplete = false;
var itemRowHtml;
var itemRowDiv;

var tableList = [];

function initRow(){
    itemRowHtml = document.getElementById("row_proto").innerHTML;
    initComplete = true;

}

function Init(){
    itemRowHtml = document.getElementById("row_proto").innerHTML;
    initComplete = true;
}

function addNewRow(tableId){
    
    let table = document.getElementById(tableId);
    let newRow = document.createElement("div");
    newRow.setAttribute("class", "trow");
    newRow.innerHTML = itemRowHtml;
    table.append(newRow);
}

window.onload = function(){
    itemRowHtml = document.getElementById("row_proto").innerHTML;
    initComplete = true;
}