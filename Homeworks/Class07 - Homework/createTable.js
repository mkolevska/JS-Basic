document.body.style.color = "white";
document.body.style.backgroundColor = "maroon";
document.body.style.zoom = "200%";


function createTable(){
    let table =  document.getElementById('table');
    let numRows = document.getElementById('numrows').value;
    let numCols = document.getElementById('numcols').value;

    for(let i = 0; i < numRows; i++){
        let tr = document.createElement('tr');
       for(let j = 1; j <= numCols; j++){
           let td = document.createElement('td');
           let text = document.createTextNode(i+1 + ""+j)
           td.appendChild(text);
          tr.appendChild(td);
       }
       table.appendChild(tr);
    }

}




document.getElementById('createTable').addEventListener('click', createTable);