function sockMerchant(n, ar) {

    let totalPair = 0;
    let sortedList = ar.sort((a,b) => a - b);
    
    for (let index = 0; index < sortedList.length; index++) {
        if (sortedList[index] == sortedList[index + 1]) {
            totalPair++;
            index++;
        }
        
    }
    return totalPair;

}

sockMerchant(9, [10, 20, 20, 10, 10, 30, 50, 10, 20])