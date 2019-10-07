var boardElement = document.getElementsByTagName("body")[0];
var distributorElement = document.getElementsByTagName("body")[0];
var board = [
    [0 ,0 ,0 ,0 ,0 ,0 ,0],
    [0 ,0 ,0 ,0 ,0 ,0 ,0],
    [0 ,0 ,0 ,0 ,0 ,0 ,0],
    [0 ,0 ,0 ,0 ,0 ,0 ,0],
    [0 ,0 ,0 ,0 ,0 ,0 ,0],
    [0 ,0 ,0 ,0 ,0 ,0 ,0]
];
var distributor = [
    [0 ,0 ,0 ,0 ,0 ,0 ,0]
];

function render(){
    
        for (let i = 0; i < board.length ; i++) {
            for (let j = 0; j < board[i].length; j++) {
                for (let k = 0; k < distributor.length; k++) {
        
                    var cell2Element = document.createElement("section");
                    distributorElement.appendChild(cell2Element);
                    cell2Element.className = "cell2";
                    cell2Element.setAttribute("id", k)
                    
                }

                var cellElement = document.createElement("div");

                boardElement.appendChild(cellElement);
                cellElement.className = "cell";
                cellElement.setAttribute ("id", i + "-" + j)
                
            }
            
            
        }
    
    
    

}
render();