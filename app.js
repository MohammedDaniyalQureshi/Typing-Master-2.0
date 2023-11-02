const textarea = document.querySelector('.textarea')
const input = document.querySelector('input')
const allSpan = document.querySelector('.allSpan')
const dummy = document.querySelector('.dummy')
const timer = document.querySelector('.timer')
let i = 0
let correctWords = 0
let wrongWords = 0


document.querySelector('i')
    .addEventListener('click', () => window.location.reload(true))



let seconds = 59
let timerstart = false
async function startTimer() {
    let tt = setInterval(() => {
        if (seconds === 0) {
            console.log(correctWords, wrongWords)
            clearInterval(tt)
        }
        timer.innerText = `0:${seconds--}`
    }, 1000)
}


//https://random-word-api.vercel.app/api?words=10
async function fetchData() {
    const response = await fetch('https://random-word-api.vercel.app/api?words=200')
    const words = await response.json()
    createSpans(words)
}

// Generate multiple span with list of words
function createSpans(words) {
    for (let i = 0; i < words.length; i++) {
        const span = document.createElement('span')
        span.innerText = `${words[i]} ` //space included
        // console.log(span, allSpan)
        allSpan.appendChild(span)

    }
}

fetchData().then(() => {
    const spans = document.querySelectorAll('span')
    spans[i].classList.toggle('highlight')
    input.addEventListener('input', (e) => {
        if (!timerstart) {
            startTimer()
            timerstart = true
        }

        if(e.target.value.slice(0)=== ' ') e.target.value = ''
        
        // if(e.target.value.slice(-1) === ' ') dummy.append('hey')
        // let re = new RegExp(pattern, `/^${spans[i].innerText.trim()}$/`);
        //patternGen(spans[i].innerText.trim())
        let re = new RegExp(patternGen(spans[i].innerText.trim()));    // will match <XYZ>
            // will match <XYZ>

        // var input = "<XYZ> Some text </XYZ>";
        // var output = regexObj.test(input);
        if (!(re.test(e.target.value.trim()))) {
            // console.log
            spans[i].classList.add('wrong-typed')
            // console.log(re, e.target.value.trim())
            // console.log(re.test(e.target.value.trim()))
        } else {
            spans[i].classList.remove('wrong-typed')
            // console.log(re.test(e.target.value.trim()))
            // console.log(re, e.target.value.trim())
        }
    })
    // input.addEventListener('keydown', (e) => {
    //     // console.log(spans)
    //     let re = new RegExp(patternGen(spans[i].innerText.trim()));
    //     // console.log(e.code)
    //     // dummy.append(e.code)
    //     if (e.code === 'Space') {
    //         if (re.test(e.target.value.trim())) {
    //             //console.log('x'+spans[i].innerText.trim()+'x','x'+e.target.value.trim()+'x')
    //             spans[i].classList.add('correct')
    //             correctWords++
    //         } else {
    //             // console.log('error')

    //             spans[i].classList.remove('wrong-typed')
    //             spans[i].classList.add('mistake')
    //             wrongWords++
    //         }
    //         e.target.value = ''
    //         //console.log(e)
    //         spans[i].classList.toggle('highlight')
    //         spans[i + 1].classList.toggle('highlight')
    //         i++
    //         //spans[i].classList.toggle('back')
    //         //console.log(allSpan)
    //         console.log(spans[i].offsetTop)
    //     }
    // })
    input.addEventListener('input', (e) => {
        // console.log(spans)
        let re1 = new RegExp(patternGen(spans[i].innerText.trim()));
        let re2 = new RegExp(`^${spans[i].innerText.trim()}$`);
        // console.log(e.code)
        // dummy.append(e.code)
        if (e.target.value.slice(-1) === ' ' && e.target.value.trim()) {
            if (re1.test(e.target.value.trim()) && re2.test(e.target.value.trim())) {
                console.log(e.target.value.trim(),re1.test(e.target.value.trim()), re2.test(e.target.value.trim()), re1, re2 )
                //console.log('x'+spans[i].innerText.trim()+'x','x'+e.target.value.trim()+'x')
                spans[i].classList.add('correct')
                correctWords++
            } else {
                // console.log('error')

                spans[i].classList.remove('wrong-typed')
                spans[i].classList.add('mistake')
                wrongWords++
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



