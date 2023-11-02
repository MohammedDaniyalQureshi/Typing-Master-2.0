function patternGen(str){
    let ans = ''
    for(let i=0; i<str.length; i++){
        ans+=`(${str[i]}`
    }
    for(let i=0; i<str.length; i++){
        ans+=`)?`
    }
    ans = '^' + ans + '$'
    return ans
}

// console.log(typeof patternGen('hel'))

// let re = new RegExp(`${patternGen('hel')}`);

// console.log(re.test)