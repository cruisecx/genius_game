let order = [];
let clickedOrder = [];
let score = 0;
const red = document.querySelector('.red');
const green = document.querySelector('.green');
const blue = document.querySelector('.blue');
const yellow = document.querySelector('.yellow');

// 0-green 1-red 2-yellow 3-blue


//cria ordem aleatória de cores
let shuffleOrder = () => {
    let colorOrder = Math.floor(Math.random() * 4)
    order[order.length] = colorOrder;
    clickedOrder = [];

    for(let i in order){
        let elementColor = createColorElement(order[i]);
        lightColor(elementColor, Number(i) + 1)
    }
}

//acende a próxima cor
let lightColor = (element, number) => {
    number = number * 500;
    setTimeout(() => {
        element.classList.add('selected');
    }, number - 250)
    setTimeout(() => {
        element.classList.remove('selected');
    })
}

//checa a ordem
let checkOrder = () => {
    for(let i in clickedOrder){
        if(clickedOrder[i] != order [i]){
            gameOver();
            break
        }
    }

    if(clickedOrder.length == order.length){
        alert(`Score: ${score}\nVamos ao próximo nível`)
        nextLevel();
    }
}

//função para clique do usuário
let click = (color) => {
    clickedOrder[clickedOrder.length] = color;
    createColorElement(color).classList.add('selected')

    setTimeout(() => {
        createColorElement(color).classList.remove('selected');
        checkOrder();
    }, 250)
}

//função que retorna a cor
let createColorElement = (color) => {
    if(color == 0){
        return green;
    } else if(color == 1){
        return red;
    } else if(color == 2){
        return yellow;
    } else if(color == 3){
        return blue;
    }
}

// função para próximo nível do jogo
let nextLevel = () => {
    score++;
    shuffleOrder();
}

// função game over
let gameOver = () => {

    alert(`Pontuação: ${score}!\nVocê perdeu o jogo! :(\nClique em OK para reiniciar a partida!`);
    order = [];
    clickedOrder = [];

    playGame();
}

// função que inicia o jogo
let playGame = () => {

    alert('Bem vindo ao Genius! Iniciando partida!')
    score = 0;

    nextLevel();
}

//eventos de clique
green.onclick = () => click(0);
red.onclick = () => click(1);
yellow.onclick = () => click(2);
blue.onclick = () => click(3);

playGame();