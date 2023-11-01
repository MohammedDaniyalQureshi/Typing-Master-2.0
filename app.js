const textarea = document.querySelector('.textarea')
const input = document.querySelector('input')
const allSpan = document.querySelector('.allSpan')
const timer = document.querySelector('.timer')
let i = 0


document.querySelector('i')
    .addEventListener('click', () => window.location.reload(true))


function createSpans(words) {
    for (let i = 0; i < words.length; i++) {
        const span = document.createElement('span')
        span.innerText = `${words[i]} ` //space included
        // console.log(span, allSpan)
        allSpan.appendChild(span)

    }
}


let seconds = 59
let timerstart = false
async function startTimer() {
    let tt = setInterval(() => {
        if (seconds === 0) clearInterval(tt)
        timer.innerText = `0:${seconds--}`
    }, 1000)
}


//https://random-word-api.vercel.app/api?words=10
async function fetchData() {
    const response = await fetch('https://random-word-api.vercel.app/api?words=200')
    const words = await response.json()
    createSpans(words)
}

fetchData().then(() => {
    const spans = document.querySelectorAll('span')
    spans[i].classList.toggle('highlight')
    input.addEventListener('input', (e) => {
        if (!timerstart) {
            startTimer()
            timerstart = true
        }
        // let re = new RegExp(pattern, `/^${spans[i].innerText.trim()}$/`);
        let re = new RegExp(`^${spans[i].innerText.trim()}$`);    // will match <XYZ>

        // var input = "<XYZ> Some text </XYZ>";
        // var output = regexObj.test(input);
        if (!(spans[i].innerText.trim().includes(e.target.value.trim()))) {
            // console.log
            spans[i].classList.add('wrong-typed')
            // console.log(re, e.target.value.trim())
            console.log(re.test(e.target.value.trim()))
        } else {
            spans[i].classList.remove('wrong-typed')
            // console.log(re.test(e.target.value.trim()))
            console.log(re, e.target.value.trim())
        }
    })
    input.addEventListener('keydown', (e) => {
        // console.log(spans)
        if (e.code === 'Space') {
            if (spans[i].innerText.trim().includes(e.target.value.trim())) {
                //console.log('x'+spans[i].innerText.trim()+'x','x'+e.target.value.trim()+'x')
                spans[i].classList.add('correct')
            } else {
                // console.log('error')

                spans[i].classList.remove('wrong-typed')
                spans[i].classList.add('mistake')
            }
            e.target.value = ''
            //console.log(e)
            spans[i].classList.toggle('highlight')
            spans[i + 1].classList.toggle('highlight')
            i++
            //spans[i].classList.toggle('back')
            //console.log(allSpan)
            console.log(spans[i].offsetTop)
        }
    })
})



