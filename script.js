var turn = -1

var board = [
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0]
];

var distributor = [0, 0, 0, 0, 0, 0, 0];

// -------------------- Rendu de la grille de jeu ------------------------------ //

function render() {
    var boardElement = document.body;
    var distributorElement = document.createElement("table");
    boardElement.appendChild(distributorElement)

// ------------------- Création Board / Distributor -------------------------- //

    var distributorRow = document.createElement("tr");
    distributorElement.appendChild(distributorRow)
    for (let l = 0; l < distributor.length; l++) {
        var distributorCell = document.createElement("td");
        distributorCell.className = "cell2"
        distributorRow.appendChild(distributorCell)

        // ---------- Create HTML element on board / Création counter on distributor -------------------------- //

        var counter = document.createElement("div");
        counter.classList.add("counter");
        counter.setAttribute("id", l)
        counter.style.backgroundColor = "blue";



// -------------------- Affichage conter ------------------------------------ //

        distributorCell.appendChild(counter)

    // ------------------- Event play -------------------------------------- //

        counter.addEventListener("click", play)
    }

// ----------------------- Boucle affichage cell --------------------------- //

    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[i].length; j++) {

            var cellElement = document.createElement("div");

            boardElement.appendChild(cellElement);
            cellElement.className = "cell";
            cellElement.setAttribute("id", i + "-" + j)

        }

    }

}


// ------------------------ Call function --------------------------------- //

render();

function play() {

    // --------------------------- Condition counter placement on board according to id------------ //

    var column = this.id;


    currentColumnCells = document.querySelectorAll("div[id$='-" + column + "']:not(.played)");

    if (currentColumnCells.length > 0) {
        currentCell = currentColumnCells[currentColumnCells.length - 1]
        currentCell.classList.add("played")

        var counterElements = document.getElementsByClassName("counter");

// ------------------------ Tour de jeu -------------------------------------------- //

        if (turn == -1) {
            turn = 1
            currentCell.style.backgroundColor = "blue";
            for (let i = 0; i < counterElements.length; i++) {
                counterElements[i].style.backgroundColor = "red";
            }

        } else {
            turn = -1
            currentCell.style.backgroundColor = "red";
            for (let i = 0; i < counterElements.length; i++) {
                counterElements[i].style.backgroundColor = "blue";
            }

        }

    }

}