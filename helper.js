
//Input 'hey' ----> Output ^(h(e(y)?)?)?$
function patternGen(str){
    let result = ''
    let length = str.length
    
    for(let atIndex = 0; atIndex<length; atIndex++){
        result+=`(${str[atIndex]}`
    }

    // for(let i=0; i<str.length; i++){
    //     result+=`)?`
    // }

    //Instead of below statement we can use the above commented loop
    result+= `)?`.repeat(length);

    result = '^' + result + '$'
    return result
}
