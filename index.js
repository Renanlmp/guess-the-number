let computerNumber
let userNumbers = []
let attempts = 0
let maxGuesses = 10

function newGame() {

    window.location.reload()
}

function init() {

    computerNumber = Math.floor(Math.random() * 100 + 1)
    // console.log(computerNumber)
}

function compareNumbers() {

    const userNumber= Number(document.getElementById('inputBox').value)
    userNumbers.push(userNumber)
    document.getElementById('guesses').innerHTML=userNumbers.join('-')

    if(attempts < maxGuesses) {
        
        if(userNumber > computerNumber) {
            document.getElementById('textOutput').innerHTML='Você digitou um número maior'
            document.getElementById('inputbox').value = ''
            attempts++
            document.getElementById('attempts').innerHTML = attempts
        }

       else if(userNumber < computerNumber) {
            document.getElementById('textOutput').innerHTML='Você digitou um número menor'
            document.getElementById('inputbox').value = ''
            attempts++
            document.getElementById('attempts').innerHTML = attempts
        }

        else {
            document.getElementById('textOutput').innerHTML = 'Parabéns, você acertou o número misterioso'
            attempts++
            document.getElementById('inputBox').setAttribute('readonly', 'readonly')
        }
    }

    else {
        document.getElementById('textOutput').innerHTML = 'Sem mais tentativas para você... O número misterioso era' + computerNumber
    }
}