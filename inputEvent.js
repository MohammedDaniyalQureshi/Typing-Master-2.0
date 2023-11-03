const timer = document.querySelector('.timer')
let shouldStartTimer = true

async function startTimer() {
    let seconds = 5
    let tt = setInterval(() => {
        if (seconds === 0) {
            // document.querySelector('.result').style.display = 'block'
            console.log(correctWords, wrongWords)
            clearInterval(tt)
        }
        if(seconds<10){
            timer.innerText = `00:0${seconds--}`
        }else{            
            timer.innerText = `00:${seconds--}`
        }

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