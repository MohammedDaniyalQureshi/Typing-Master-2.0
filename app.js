const input = document.querySelector('input')


// document.querySelector('button').addEventListener('click', () => {
//     document.querySelector('.allSpan').style.top = '100px';
// })

let i = 0
let correctWords = 0
let wrongWords = 0

//Refreshing page when refresh icon is clicked
document.querySelector('i')
    .addEventListener('click', () => window.location.reload(true))


// Generate multiple span with list of words which is fetched which api
function createSpans(words) {
    for (let i = 0; i < words.length; i++) {

        const span = document.createElement('span')
        //space included at end for words to wrap properly and word wrap normal to work as all span is treated as one word
        span.innerText = `${words[i]} `

        document.querySelector('.allSpan')
            .appendChild(span)
    }
}

async function fetchData() {
    const response = await fetch('https://random-word-api.vercel.app/api?words=200')
    const words = await response.json()
    createSpans(words)
}


// After data is done fetching then add Event listeners
fetchData().then(() => {
    const spans = document.querySelectorAll('span')
    spans[i].classList.toggle('highlight')

    // On every keystroke we need to check if input matches span that in in correct order
    //for ex:- if we want to match hello - h, he, hel, hell, hello should only match nothing else
    //we need to continue check if it does not add wrongly typed class
    //if corrected remove wrongly typed class
    input.addEventListener('input', (e) => inputEvent(e, spans))
    
    // If spacebar is entered we need to check does input matches our highlighted span's innertext
    // If it does give the highlighted span correct class which makes text green
    // If it does not give it class mistake which makes text red
    // Note:- keydown event is not working on android so input event is used instead to check spaces
    input.addEventListener('input', (e) => spacebarEvent(e, spans))
})



