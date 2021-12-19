function repeatedString(s, n) {
    
    let stringLength = s.length;
    let countOnSub = s.split('').filter(element => element == 'a').length;
    let finalRemain = n % stringLength;
    let countOfSubs = Math.floor(n / stringLength);
    let countOnRemain = (s.split('').slice(0, finalRemain)).filter(element => element == 'a').length;

    
    return countOfSubs * countOnSub + countOnRemain; 
    

}

console.log(repeatedString('aba', 10));