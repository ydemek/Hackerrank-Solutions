function timeInWords(h, m) {
    let hours = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'one']
    let main = ['', ...hours.slice(0, 12), 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen', 'twenty'];
    let result = '';
    let junkWord = 'past';
    if (m > 30) {
        m = 60 - m;
        junkWord = 'to'
    } else {
        h = h - 1;
    }
    switch (m) {
        case 30:
            result = `half past ${hours[h]}`
            break;
        case 15:
            result = `quarter ${junkWord} ` + hours[h]
            break;
        case 1:
            result = `one minute ${junkWord} ` + hours[h]
            break;
        case 0:
            result = `${hours[h]} o' clock`
            break;
        default:
            if (m > 20) {
                result = `${main[20]} ${main[m - 20]} minutes ${junkWord} ` + hours[h]
            } else {
                result = main[m] + ` minutes ${junkWord} ` + hours[h]
            }
            break;
    }
    return result;
}

console.log(timeInWords(1, 31));