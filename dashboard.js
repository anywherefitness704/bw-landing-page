
function addRow() {

    var box = document.createElement("INPUT");
    box.type = "text";
  
    var box2 = document.createElement("INPUT");
    box2.type = "checkbox";
  
    var box3 = document.createElement("INPUT");
    box3.type = "checkbox";
  
    var box4 = document.createElement("INPUT");
    box4.type = "text";
  
    var getTableClass = document.getElementById("table");
    var insertRow = getTableClass.insertRow();
    var one = insertRow.insertCell(0);
    var two = insertRow.insertCell(1);
    var three = insertRow.insertCell(2);
    var four = insertRow.insertCell(3);
    one.appendChild(box);
    two.appendChild(box2);
    three.appendChild(box3);
    four.appendChild(box4);
  }
  