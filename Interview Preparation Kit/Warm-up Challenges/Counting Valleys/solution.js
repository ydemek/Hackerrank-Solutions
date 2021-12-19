function countingValleys(steps, path) {

    
    let valleyCount = 0;
    let currentLevel = 0;
    for (let index = 0; index < path.length; index++) {
        currentLevel = path[index] == 'U' ? currentLevel + 1 : currentLevel - 1;

        if (currentLevel == -1 && path[index + 1] == 'U') {
            valleyCount++;
        }
        
    }
    return valleyCount;

}


countingValleys(8, "UDDDUDUU");
