var itemRow = '<div class="row"><div class="col"><div class="label">Equip</div><div style="margin: 5px; line-height: 30px; vertical-align: middle;"><input class="input short" type="checkbox" ></div></div><div class="col"><div class="label">Qty.</div><input class="input short" type="text"></div><div class="col"><div class="label">Item Name</div><input class="input" type="text"></div><div class="col"><div class="label">Bulk</div><select class="input"><option value="0.01">Tiny (100 to 1)</option><option value="0.1">Small (10 to 1)</option><option value="1">Normal (1)</option><option value="2">Weighty (2)</option><option value="5">Massive (5)</option></select></div><div class="col"><div class="label">Total Bulk</div><input class="input short" type="text" readonly></div></div></div>'

function addNewRow(id){
    let div = document.getElementById(id);

    div.innerHTML += itemRow;
}