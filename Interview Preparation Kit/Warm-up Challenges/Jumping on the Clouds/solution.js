function jumpingOnClouds(c) {
    
    let jumpCount = 0;
    for (let index = 0; index < c.length;) {
        
        if (c[index + 2] == 0) {
            index = index + 2
        } else {
            index = index + 1;
        }
        jumpCount++
    }
    return jumpCount - 1;
    
}


jumpingOnClouds([0, 0, 0, 0, 1, 0])