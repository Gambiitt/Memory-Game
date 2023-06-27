alert('Start');
const gameContainer = document.getElementById("game");

//Make the game board

const colors = ["red", "blue", "green", "orange",
 "purple", "red", "blue", "green", "orange", "purple"];

function shuffle(arr){
    let counter = arr.length;

    while (counter > 0){
        let index = Math.floor(Math.random() * counter);

        counter--;

        let temp = arr[counter];
        arr[counter] = arr[index];
        arr[index] = temp;
    }
    return arr;
};

let shuffledColors = shuffle(colors);
let clickCounter = 0

function createDivsForColors(colorArray){
    for(let color of colorArray){
        const newDiv = document.createElement("div");
        newDiv.classList.add(color);
        newDiv.addEventListener("click", handleCardClick);
        gameContainer.append(newDiv);
    }
}

//click card

function handleCardClick(event){
    let cardColor = event.target.className;
    clickCounter ++;
    console.log("you just clicked", cardColor, clickCounter);

    if(clickCounter === 1){
    event.target.style.backgroundColor = cardColor
       
    }
    if(clickCounter === 2){
        event.target.style.backgroundColor = cardColor
        clickCounter -= 2
    }
 
};

createDivsForColors(shuffledColors);