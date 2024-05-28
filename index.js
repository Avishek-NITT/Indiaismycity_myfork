console.log("This is DELTA WEBDEV TASK1")
const gridContainer = document.querySelector(".grid-container")
const gridItems = []  //Pointer to all the individual cells
// represented by griditem_${i}_${j}

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
    //Order of pieces is important
    pieces = []
    

    draw(){
        this.pieces.forEach((piece) => {
            let pos = [piece.pos[0], piece.pos[1]];
            let item = document.getElementById(`griditem_${pos[0]}_${pos[1]}`)
            item.innerHTML = piece.text
        })

    }

}




// Piece objects
class Titan {
    pos = []
    constructor(){
        this.text = "Titan"
    }
}

class Tank {
    pos = []
    constructor(){
        this.text = "Tank"
    }
}

class Ricochet {
    pos = []
    constructor(){
        this.text = "Ricochet"
    }
}

class Semi_Ricochet {
    pos = []
    constructor(){
        this.text = "Semi_Ricochet"
    }
}

class Canon {
    pos = []
    constructor(){
        this.text = "Canon"
    }
}









//Game logic   ----> Temporary idea
let p1 = new Player;

function fillGrid() {
    // Loop to create grid items and fill the grid
    for (let i = 0; i < ROW ; i++) {
        let temp = []
        for(let j = 0; j < COLUMN; j++){
            const gridItem = document.createElement('div');
            gridItem.classList.add('grid-item');
            gridItem.id = `griditem_${i}_${j}`
            gridContainer.appendChild(gridItem);

            //Store it in global array

            temp.push(gridItem)
        }
        gridItems.push(temp)
    }
}


function spawnPlayers() {

    //Order of pieces is important
    p1.pieces.push(new Titan);
    p1.pieces.push(new Tank);
    p1.pieces.push(new Ricochet);
    p1.pieces.push(new Semi_Ricochet);
    p1.pieces.push(new Canon);


    //Initial position of the pieces
    p1.pieces[0].pos = [0,0];
    p1.pieces[1].pos = [0,1];
    p1.pieces[2].pos = [0,2];
    p1.pieces[3].pos = [0,3];
    p1.pieces[4].pos = [0,4];


    

}



//For testing purposes
function draw(){
    // gridItems.forEach((items) =>{
    //     console.log(items)
    // })
    p1.draw()
}


window.onload = function() {
    fillGrid()
    spawnPlayers()
    draw()
}

