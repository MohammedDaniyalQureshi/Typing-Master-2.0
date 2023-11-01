const textarea = document.querySelector('.textarea')
const input = document.querySelector('input')
const allSpan = document.querySelector('.allSpan')
const icon = document.querySelector('i')
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






// allSpan[i].classList.add('back')
