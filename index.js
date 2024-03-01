function updateCR1(inputElement, rowNumber) {
   
    var drValue = parseFloat(inputElement.innerText) || 0;

    
    var row = inputElement.parentNode;

    
    row.cells[3].innerText = drValue;

   
    updateTotalDR();
}

function updateTotalDR1() {
    
    var drCells = document.querySelectorAll('#financialTable tbody td:nth-child(3)');

  
    var totalDR = 0;
    drCells.forEach(function (cell) {
        totalDR += parseFloat(cell.innerText) || 0;
    });

    
    document.getElementById('totalDR').innerText = totalDR;
}

function updateCR_SL1(element) {
   
    var drCellIndex = 2;
    var crCellIndex = 3;

    
    var table = document.getElementById('financialTable');

    
    var rowNumber = element.parentElement.rowIndex;

   
    var row = table.rows[rowNumber];

   
    var drValue = parseFloat(element.innerText) || 0;

    
    row.cells[crCellIndex].innerText = drValue;

    
    updateTotalCR_SL1(rowNumber);
}

function updateTotalCR_SL1(rowNumber) {
   
    var table = document.getElementById('financialTable');

   
    var rows = [];
    for (var i = 1; i < table.rows.length - 1; i++) {
        if (i === rowNumber) {
            rows.push(table.rows[i]);
        }
    }

    
    var totalCR = 0;
    for (var j = 0; j < rows.length; j++) {
        var crValue = parseFloat(rows[j].cells[3].innerText) || 0;
        totalCR += crValue;
    }

   
    rows[rows.length - 1].cells[3].innerText = totalCR;

   
    updateGrandTotal();
}
function updateCR_SL2(element) {
   
    var drCellIndex = 2;
    var crCellIndex = 3;

    
    var table = document.getElementById('financialTable');

    
    var rowNumber = element.parentElement.rowIndex;

   
    var row = table.rows[rowNumber];

    
    var drValue = parseFloat(element.innerText) || 0;

   
    row.cells[crCellIndex].innerText = drValue;

    
    updateTotalCR_SL2(rowNumber);
}

function updateTotalCR_SL2(rowNumber) {
   
    var table = document.getElementById('financialTable');

   
    var rows = [];
    for (var i = 1; i < table.rows.length - 1; i++) {
        if (i === rowNumber) {
            rows.push(table.rows[i]);
        }
    }

    
    var totalCR = 0;
    for (var j = 0; j < rows.length; j++) {
        var crValue = parseFloat(rows[j].cells[3].innerText) || 0;
        totalCR += crValue;
    }

    
    rows[rows.length - 1].cells[3].innerText = totalCR;

    
    updateGrandTotal();
}


function calculateTotalCR() {
    var crElements = document.getElementsByClassName('crAmount');
    var totalCR = 0;

    for (var i = 0; i < crElements.length; i++) {
      var crValue = parseFloat(crElements[i].textContent) || 0;
      totalCR += crValue;
    }

    document.getElementById('totalCR').textContent = totalCR;
  }

  function calculateTotalCR2() {
    var crElements = document.getElementsByClassName('crAmount2');
    var totalCR2 = 0;
  
    for (var i = 0; i < crElements.length; i++) {
      var crValue = parseFloat(crElements[i].textContent.replace('₹', '')) || 0;
      totalCR2 += crValue;
    }
  
    document.getElementById('totalCR2').innerHTML = `<i class="fas fa-rupee-sign"></i>${totalCR2}`;
  }

  function calculateTotalCR3() {
    var crElements = document.getElementsByClassName('crAmount3');
    var totalCR3 = 0;
  
    for (var i = 0; i < crElements.length; i++) {
      var crValue = parseFloat(crElements[i].textContent.replace('₹', '')) || 0;
      totalCR3 += crValue;
    }
  
    document.getElementById('totalCR3').innerHTML = `<i class="fas fa-rupee-sign"></i>${totalCR3}`;
  }

  function calculateTotalCR4() {
    var crElements = document.getElementsByClassName('crAmount4');
    var totalCR4 = 0;
  
    for (var i = 0; i < crElements.length; i++) {
      var crValue = parseFloat(crElements[i].textContent.replace('₹', '')) || 0;
      totalCR4 += crValue;
    }
  
    document.getElementById('totalCR4').innerHTML = `<i class="fas fa-rupee-sign"></i>${totalCR4}`;
  }

  function calculateTotalCR5() {
    var crElements = document.getElementsByClassName('crAmount5');
    var totalCR5 = 0;
  
    for (var i = 0; i < crElements.length; i++) {
      var crValue = parseFloat(crElements[i].textContent.replace('₹', '')) || 0;
      totalCR5 += crValue;
    }
  
    document.getElementById('totalCR5').innerHTML = `<i class="fas fa-rupee-sign"></i>${totalCR5}`;
  }
  