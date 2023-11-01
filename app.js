const textarea = document.querySelector('.textarea')
const input = document.querySelector('input')
const allSpan = document.querySelector('.allSpan')
const icon = document.querySelector('i')
const timer = document.querySelector('.timer')
let i = 0


icon.addEventListener('click',() => {
    location.reload(true)
})

function createSpans(words){
    for(let i = 0; i< words.length; i++){
        const span = document.createElement('span')
        span.innerText = `${words[i]} `
        // console.log(span, allSpan)
        allSpan.appendChild(span)

    }
}


let seconds = 59
let timerstart = false
async function startTimer(){
     let tt = setInterval(() => {
            if(seconds === 0) clearInterval(tt)
            timer.innerText = `00.${seconds--}`           
        },1000)
    }


//https://random-word-api.vercel.app/api?words=10
async function fetchData(){
    const response = await fetch('https://random-word-api.vercel.app/api?words=100')
    const words = await response.json()
    createSpans(words)
}

fetchData().then(() => {
    const spans = document.querySelectorAll('span')
    input.addEventListener('keydown', (e) => {
        // console.log(spans)
        if(e.code==='Space'){
            
            e.target.value = ''
            //console.log(e)
            spans[i].classList.toggle('back')
            spans[i].classList.toggle('back')
            i++
            spans[i].classList.toggle('back')
            //console.log(allSpan)
            console.log(spans[i].offsetTop)
        }
    })
})

input.addEventListener('input',() => {
    if(!timerstart){
        startTimer()
        timerstart = true
    }
})






// allSpan[i].classList.add('back')
