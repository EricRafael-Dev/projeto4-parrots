
let amount_cards = prompt('Com quantas cartas gostaria de jogar? (Escolha um número par entre 4 a 14)')
let amount_cards_int = Number(amount_cards)
let amount_okay = 'false'
let jogadas = 0
let clock_count = 0




let firstCardFront;
let firstCardBack;
let firstCardSelected;
let classFirstCard;

let secondCardFront;
let secondCardBack;
let secondCardSelected;
let classSecondCard;




while (amount_okay == 'false'){
    if(amount_cards_int != NaN){

        if (amount_cards_int >= 4 && amount_cards_int <=14) {

            if (amount_cards_int % 2 === 0){

                build_deck(amount_cards_int)

                amount_okay = 'true'

            } else{
                amount_cards = prompt('Favor escolher um valor par entre 4 a 14')
                amount_cards_int = Number(amount_cards)

            }

        } else {
            amount_cards = prompt('Favor escolher um valor par entre 4 a 14')
            amount_cards_int = Number(amount_cards)

        }

    } else {
        amount_cards = prompt('Favor escolher um valor numérico entre 4 a 14')
        amount_cards_int = Number(amount_cards)
    }
}



function build_deck(amount_cards_int){

    array = ['bobrossparrot.gif',
    'explodyparrot.gif',
    'fiestaparrot.gif',
    'metalparrot.gif',
    'revertitparrot.gif',
    'tripletsparrot.gif',
    'unicornparrot.gif']

    const list = array.sort(()=> Math.random() - 0.5);

    var deck = document.querySelector(".cards")
    

    let array_combined =[]
    
    for(let i=0; i<=(amount_cards_int/2)-1; i++){

        //Adiciona os pares em relação a quantidade de cartas escolhidas

        array_combined.push(list[i])
        array_combined.push(list[i])
    }

    const list_combined = array_combined.sort(()=> Math.random() - 0.5);

    for(let j=0; j<list_combined.length; j++){
        
        //Mostra a quantidade de cartas embaralhadas

        deck.innerHTML += `<div onclick="virarCarta(this)" class="card">
            <div class="card_front face">
              <img src="./Assets/back.png">
            </div>
            <div class="${list_combined[j].slice(0,(list_combined[j].length)-4)} card_back back-face face" id=''>
              <img src="./Assets/Deck/${list_combined[j]}">
            </div>
        </div>`
    }

    setInterval(clock,1000)
    
}


function virarCarta(CardSelected) {
    
    
    if(firstCardSelected == null && CardSelected.classList[2] !== 'confirm_par'){

        jogadas++

        firstCardSelected = CardSelected
        classFirstCard = firstCardSelected.querySelector('.card_back').classList[0]

        firstCardFront = firstCardSelected.querySelector(".card_front");
        firstCardFront.classList.add("front");

        firstCardBack = firstCardSelected.querySelector(".card_back");
        firstCardBack.classList.add("back");

        firstCardSelected.classList.add('card_up')

    }

    else if(secondCardSelected == null && CardSelected.classList[2] !== 'confirm_par'){

        jogadas++

        secondCardSelected = CardSelected
        classSecondCard = secondCardSelected.querySelector('.card_back').classList[0]

        secondCardFront = secondCardSelected.querySelector(".card_front");
        secondCardFront.classList.add("front");

        secondCardBack = secondCardSelected.querySelector(".card_back");
        secondCardBack.classList.add("back");

        secondCardSelected.classList.add('card_up')
        
        verificar_par(firstCardSelected, secondCardSelected, classFirstCard, classSecondCard)
        
    }

    if(document.querySelectorAll('.confirm_par').length == amount_cards_int){
        setTimeout(reset_game, 500)
    }

}

function verificar_par(firstCardSelected, secondCardSelected, classFirstCard, classSecondCard){

    if(classFirstCard == classSecondCard){
        firstCardSelected.classList.add('confirm_par')
        secondCardSelected.classList.add('confirm_par')

        reset_cards(true)

    } else{

        const confirm_par = false
        setTimeout(reset_cards, 1000, confirm_par)

    }

}

function clock(){

    clock = document.querySelector('.clock')
    clock_count++
    clock.innerHTML = clock_count
    console.log(clock_count)
}

function reset_cards(confirm_par){
    if(confirm_par == false){
       firstCardFront.classList.remove("front");
        firstCardBack.classList.remove("back");

        secondCardFront.classList.remove("front");
        secondCardBack.classList.remove("back"); 
    }

    firstCardFront = null
    firstCardBack = null
    firstCardSelected = null

    secondCardFront = null
    secondCardBack = null
    secondCardSelected = null

    
}
