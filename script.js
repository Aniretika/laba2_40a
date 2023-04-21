var output = document.getElementById('output');
function GetSelectedItem() {
    var average = 0.0;
    var tables = document.getElementsByTagName('table');
for(var tableIt = 0; tableIt < tables.length; tableIt++) 
{
    var table = tables[tableIt];
    
        var columns = table.getElementsByClassName('exp');
        for(columnIt = 0; columnIt < columns.length; columnIt++) {
            var column = columns[columnIt];
            if(!isNaN(column.innerHTML))
            {
                average += parseFloat(column.innerHTML);
            }
            else
            {
                alert("Undefined value");
            }
        }
    }
  output.innerHTML = average/5.0; 
  return (average/5.0);
};
var table = document.querySelector('table');  
var dataCells = table.querySelectorAll('tr > td');  
var rows = table.querySelectorAll('tr');  
var code = document.querySelector('code');  
var resetButton = document.querySelector('.reset');  
rows = Array.prototype.slice.call(rows, 1);  
var ncols = rows[0].children.length - 1;  
var initialData = {0:[1,2,3,4,5],1:[6,7,8,9,10],2:[11,12,13,14,15]};  
function parseTable () {  
  var d = {};
  Array.prototype.forEach.call(rows, function (row, i) {  
    var rowrowCells = row.querySelectorAll('td');  
    return Array.prototype.map.call(rowCells, function (cell, j) {  
      if (!d[j]) d[j] = [];  
      d[j].push(parseInt(cell.textContent, 10));  
    });  
  });
  return d;  
}  
function setTableData (data) {  
  Array.prototype.forEach.call(rows, function (row, i) {  
    var rowrowCells = row.querySelectorAll('td');  
    return Array.prototype.map.call(rowCells, function (cell, j) {  
      cell.textContent = initialData[j][i];
    });  
  });  
}  
Array.prototype.forEach.call(dataCells, function (cell) {  
  cell.contentEditable = true;  
});  
table.addEventListener('keyup', function (e) {  
  if (e.target.tagName === 'TD') {  
    setTimeout(function () {  
      code.innerText = JSON.stringify( parseTable().d ); 
    }, 0);  
  }  
});
