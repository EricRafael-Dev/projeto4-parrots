
let amount_cards = prompt('Com quantas cartas gostaria de jogar? (Escolha um número par entre 4 a 14)')
let amount_cards_int = Number(amount_cards)
let amount_okay = 'false'




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



