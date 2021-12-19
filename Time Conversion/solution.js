function timeConversion(s) {
    let time = s.split(':')[2].slice(2, 4);
    if (s.split(':')[0] == 12) {
        if (time == 'PM') {
            return `${s.split(':')[0]}:${s.split(':')[1]}:${s.split(':')[2].slice(0, 2)} `
        }
        return `00:${s.split(':')[1]}:${s.split(':')[2].slice(0, 2)} `
    }
    if (time == 'PM') {
        return `${Number(s.split(':')[0]) + 12}:${s.split(':')[1]}:${s.split(':')[2].slice(0, 2)} `
    }
    return `${s.split(':')[0]}:${s.split(':')[1]}:${s.split(':')[2].slice(0, 2)} `
}


console.log(timeConversion('12:40:22PM'));