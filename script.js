var boardElement = document.getElementsByTagName("body")[0];
var distributorElement = document.getElementsByTagName("body")[0];
var turn = -1

var board = [
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0]
];

var distributor = [
    [0, 0, 0, 0, 0, 0, 0]
];

function render() {

    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[i].length; j++) {
            
            var cellElement = document.createElement("div");
            
            boardElement.appendChild(cellElement);
            cellElement.className = "cell";
            cellElement.setAttribute("id", i + "-" + j)

        }
        
    }
    
}


for (let l = 0; l < distributor.length; l++) {
    for (let k = 0; k < distributor[l].length; k++) {
        
        var cell2Element = document.createElement("section");
        distributorElement.appendChild(cell2Element);
        cell2Element.className = "cell2";
        cell2Element.setAttribute("id", k + "-" + l)
        
        var counter = document.createElement("div");
        counter.classList.add("counter");
        cell2Element.appendChild(counter)
        counter.style.backgroundColor = "blue";

        cell2Element.addEventListener("click", play)

        
        }
    
    }


render();

function play() {
    var idAttribute = this.getAttribute("id");
    var splitAttribute = idAttribute.split("-");
    var row = splitAttribute[0];
    var column = splitAttribute[0];

    
    currentColumnCells = document.querySelectorAll("div[id$='-"+column+"']:not(.played)");
    if(currentColumnCells.length > 0) {
        currentCell = currentColumnCells[currentColumnCells.length - 1]
        currentCell.classList.add("played")
        // currentCell.appendChild(counter)
        // counter.style.backgroundColor = "blue";
        currentCell.innerHTML ="";
        if(turn == -1){
            turn = 1
            counter.querySelectorAll(counter.style.backgroundColor = "red");
            currentCell.style.backgroundColor ="blue";

        }else{
            turn = -1
            counter.querySelectorAll(counter.style.backgroundColor = "blue");
            currentCell.style.backgroundColor = "red";

        }


    }

    

    
    
        
    
    
   

        // pour trouver la case vide avant use selector avec le .not.counter

    
    
    
    
}