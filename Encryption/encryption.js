let s = 'chillout'

function encryption(s) {
    s = s.replace(/ /g, "")
    let lengthOfString = s.length;
    let root = Math.sqrt(lengthOfString)
    console.log("  root", root)
    let numberOfRows = Math.floor(root)
    let numberOfColumns = 0

    if (( numberOfRows * numberOfRows ) >= lengthOfString) {
        numberOfColumns = numberOfRows
    } else {
        numberOfColumns = numberOfRows + 1
    }

    let splitted = s.split("")

    let result = ""

    for (let column = 0; column < numberOfColumns; column++) {
        splitted.forEach((char, index) => {
            if (index % numberOfColumns == column) {
                result += char;
            }
        });
        result += " ";
    }

    return result;
}

console.log(encryption(s));
