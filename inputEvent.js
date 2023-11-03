const timer = document.querySelector('.timer')
let shouldStartTimer = true

async function startTimer() {
    let seconds = 59
    let tt = setInterval(() => {
        if (seconds === 0) {
            document.querySelector('.result').style.display = 'block'
            console.log(correctWords, wrongWords)
            clearInterval(tt)
        }
        timer.innerText = `0:${seconds--}`
    }, 1000)
}



function inputEvent(e,spans){
        if (shouldStartTimer) {
            startTimer()
            shouldStartTimer = false
        }

        // highlighted element should not increment if only space is pressed
        if(e.target.value.slice(0)=== ' ') e.target.value = ''
        
        let re = new RegExp(patternGen(spans[i].innerText));    
           
        if (!(re.test(e.target.value))) { 
            spans[i].classList.add('wrong-typed')
        } else {
            spans[i].classList.remove('wrong-typed')
        }
    
}