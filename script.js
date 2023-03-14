console.log("Welcome to Tic Tac Toe")
let music = new Audio("music.mp3")
let turn_sound = new Audio("ting.mp3")
let gameover_sound = new Audio("gameover.mp3")
let turn = "X"
let gameover = false

// Funtion to change the turn 
const changeTurn = () => {

    return turn == "X" ? "O" : "X"
}

// Function to check win

const checkWin = () => {
    let boxtexts = document.getElementsByClassName('boxtext')
    let wins = [
        [0, 1, 2, 0, 5, 0],
        [3, 4, 5, 0, 15, 0],
        [6, 7, 8, 0, 25, 0],
        [0, 3, 6, -10, 15, 90],
        [1, 4, 7, 0, 15, 90],
        [2, 5, 8, 10,15, 90],
        [0, 4, 8, 1, 16, 45],
        [2, 4, 6, -1, 16 , 135],
    ]
    wins.forEach(e => {
        if((boxtexts[e[0]].innerText === boxtexts[e[1]].innerText) &&(boxtexts[e[1]].innerText === boxtexts[e[2]].innerText) && boxtexts[e[0]].innerText !== ''){
            document.querySelector('.info').innerText = boxtexts[e[0]].innerText + " Won"
            gameover = true;
            document.querySelector('.imagebox').getElementsByTagName('img')[0].style.width = "200px"
            document.querySelector('.line').style.width = "30vw"
            document.querySelector('.line').style.transform = `translate(${e[3]}vw , ${e[4]}vw)  rotate(${e[5]}deg)`
            
            gameover_sound.play();

        }
    })
}
// music.play();
// Game Logic
let boxes = document.getElementsByClassName("box")
Array.from(boxes).forEach(element => {
    let boxtext = element.querySelector('.boxtext')
    element.addEventListener('click', () => {
        if (boxtext.innerText === '') {
            boxtext.innerText = turn;
            turn = changeTurn();
            turn_sound.play();
            checkWin();
            if (!gameover) {
                document.getElementsByClassName("info")[0].innerText = " Turn for " + turn;
            }
        }
    })
})


reset.addEventListener('click',()=>{
    let boxtexts = document.querySelectorAll('.boxtext')
    Array.from(boxtexts).forEach(element =>{
        element.innerText = ""
    })
    turn = "X"
    gameover = false;
    document.querySelector('.line').style.width = "0vw"
    document.getElementsByClassName("info")[0].innerText = " Turn for " + turn;
    document.querySelector('.imagebox').getElementsByTagName('img')[0].style.width = "0px"
})