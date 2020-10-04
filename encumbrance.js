var itemRow;

var tableList = [];

function initRow(){
    itemRow += '<div class="trow">';
    itemRow += '<div class="tcell">';
    itemRow += '<input class="input short" type="checkbox">';
    itemRow += '';
    itemRow += '';
    itemRow += '';
    itemRow += '';
    itemRow += '';
    itemRow += '';
    itemRow += '';


    // <div class="trow">
    //     <div class="tcell">
    //         <input class="input short" type="checkbox" >
    //     </div>
    //     <div class="tcell">
    //         <input class="input short" type="text">
    //     </div>
    //     <div class="tcell">
    //         <input class="input" type="text">
    //     </div>
    //     <div class="tcell">
    //         <select class="input">
    //             <option value="0.01">Tiny (100 to 1)</option>
    //             <option value="0.1">Small (10 to 1)</option>
    //             <option value="1" selected>Normal (1)</option>
    //             <option value="2">Weighty (2)</option>
    //             <option value="5">Massive (5)</option>
    //         </select>
    //     </div>
    //     <div class="tcell">
    //         <input class="input short" type="text" readonly>
    //     </div>
    // </div>
}

function addNewRow(id){
    let div = document.getElementById(id);

    div.innerHTML += itemRow;
}