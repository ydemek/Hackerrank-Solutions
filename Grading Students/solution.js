function gradingStudents(grades) {
    let res = []
    grades.forEach(grade => {
        
        if (grade >= 38 && grade % 10 > 2 && grade % 10 < 5 || grade >= 38 && grade % 10 > 7) {
                res.push(grade + (5 - grade % 5))
        }else {
            res.push(grade)
        }
    });
    return res;

}

console.log(gradingStudents([73,67,38,33]));