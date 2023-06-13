alert('Start');
const gameContainer = document.getElementById("game");

const colors = ["red",
"blue",
"green",
"orange",
"purple",
"red",
"blue",
"green",
"orange",
"purple"
];

function shuffle(array){
    let counter = array.length;

    while (counter > 0){
        let index = Math.floor(Math.random() * counter);

        counter--;

        let temp = array[counter];
        array[counter] = array[index];
        array[index] = temp;
    }
    return array;
}

let shuffledColors = shuffle(colors);
let revealedCount = 0;
let activeCard = null;
let waitingEndOfTurn = false;
let cardsSelected = 0;



function createDivsForColors(colorArray){
    for(let color of colorArray){
        const newDiv = document.createElement("div");
        newDiv.classList.add(color);
        newDiv.addEventListener("click", handleCardClick);
        gameContainer.append(newDiv);
    }
}

function handleCardClick(event) {
  //  cardsSelected += 1;
    event.target.setAttribute("data-color", event.target.className);
    event.target.setAttribute("data-revealed", "false");
    console.log("you just clicked", event.target);
    event.target.style.backgroundColor = event.target.className;
    const revealed = event.target.getAttribute("data-revealed");
    waitingEndOfTurn = true;
    

    if(
        waitingEndOfTurn
        || revealed === "true"
        || event.target === activeCard
      //  || waitingEndOfTurn === "true"  I dont understand why this wont stop
      // you from clicking another card
        ){
        return;
    }
// Or this
    //if(cardsSelected === 2){ 
    //    return;
    //}

    if(!activeCard){
        activeCard = event.target;

        return;
    }

    const colorToMatch = activeCard.getAttribute("data-color");

    if(colorToMatch === event.target.className){
        activeCard.setAttribute("data-revealed", "true");
        event.target.setAttribute("data-revealed", "true");


        waitingEndOfTurn = false;
        activeCard = null;
        revealedCount += 2;

        if(revealedCount === colors.length){
            alert("You Win!")
        }

        return;
    }

    //waitingEndOfTurn = true;
    setTimeout(() => {
        event.target.style.backgroundColor = null;
        activeCard.style.backgroundColor = null;

        waitingEndOfTurn = false;
        activeCard = null;
    },750);

    
  };

createDivsForColors(shuffledColors);