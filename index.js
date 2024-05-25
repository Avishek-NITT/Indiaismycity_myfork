console.log("This is DELTA WEBDEV TASK1")
const gridContainer = document.querySelector(".grid-container")


const ROW = 7
const COLUMN = 7



//PROPOSED GAME LOGIC


// -> All pieces are represented by their respective classes.
// -> Thier instances will contain all info about them (position, direction anol)
// -> The grid will be a grid, containing "divs" as individual cells.
// -> the information in the game state will keep on updating the cells of the grid 
// accordingly




class Game {
    //This might be the instance of the game to store the full game state.
    //this might be useful in hacker++ in loading a saved game 
}



class Player {
    // This will store the positions, stats and all for the each class.
    // Two instances will be spawned for two player mode

    // pieces is an array which will have the instances of the pieces
    pieces = []
    


}




// Piece objects
class Titan {
    constructor(){
        this.text = "Titan"
    }
}

class Tank {
    constructor(){
        this.text = "Tank"
    }
}

class Ricochet {
    constructor(){
        this.text = "Ricochet"
    }
}

class Semi_Ricochet {
    constructor(){
        this.text = "Semi_Ricochet"
    }
}

class Canon {
    constructor(){
        this.text = "Canon"
    }
}









//Game logic   ----> Temporary idea
let p1 = new Player;

function fillGrid() {
    // Loop to create grid items and fill the grid
    for (let i = 0; i < ROW * COLUMN; i++) {
        const gridItem = document.createElement('div');
        gridItem.classList.add('grid-item');
        gridContainer.appendChild(gridItem);
    }
}


function spawnPlayers() {
    p1.pieces.push(new Titan);
    p1.pieces.push(new Tank);
    p1.pieces.push(new Ricochet);
    p1.pieces.push(new Semi_Ricochet);
    p1.pieces.push(new Canon);

}



//For testing purposes
function test(){
    p1.pieces.forEach((instance) => {
        console.log(instance.text)
    })
}


window.onload = function() {
    fillGrid()
    spawnPlayers()
    
}

