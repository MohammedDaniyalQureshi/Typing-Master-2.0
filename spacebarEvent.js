function spacebarEvent(e, spans){

    // No need to check for empty just space hanled in the inputEvent function
    if (e.target.value.slice(-1) === ' ') {
        if (e.target.value === spans[i].innerText) {
            // console.log(e.target.value + 'x', spans[i].innerText + 'x')
            spans[i].classList.add('correct')
            correctWords++
        } else {
            spans[i].classList.remove('wrong-typed')
            spans[i].classList.add('mistake')
            wrongWords++
        }
        e.target.value = ''
        spans[i].classList.toggle('highlight')
        spans[i + 1].classList.toggle('highlight')
        i++
        console.log(spans[i].offsetTop)
    }
}