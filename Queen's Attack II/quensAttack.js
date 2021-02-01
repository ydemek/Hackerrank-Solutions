let obstacles = [ [ 5, 5 ], [ 4, 2 ], [ 2, 3 ] ]


// Complete the queensAttack function below.
function queensAttack(n, k, r_q, c_q, obstacles) {
    let board = [];

    for (let i = 0; i < n; i++) {
        board[i] = [];
    }

    board[r_q - 1][c_q - 1] = 'q';
    quenposX = r_q - 1;
    quenposY = c_q - 1;

    for (let i = 0; i < obstacles.length; i++) {
        board[obstacles[i][0] - 1][obstacles[i][1] - 1] = 'o';
    }

    let counter = 0;

    var x = 1;
    var x1 = 1;
    var x2 = 1;
    var x3 = 1;
    // left down
    for (let j = quenposY - 1; j >= 0; j--) {

        if (board[quenposX + x] && board[quenposX + x][j] === undefined) {
            counter++;
        }
        if (board[quenposX + x] && board[quenposX + x][j] === 'o') {
            break;
        }
        x++;
    }
    // left up
    for (let j = quenposY - 1; j >= 0; j--) {

        if (board[quenposX - x1] && board[quenposX - x1][j] === undefined) {
            counter++;
        }
        if (board[quenposX - x1] && board[quenposX - x1][j] === 'o') {
            break;
        }
        x1++;
    }

    // right up
    for (let j = quenposY + 1; j <= n - 1; j++) {

        if (board[quenposX - x2] && board[quenposX - x2][j] === undefined) {
            counter++;
        }
        if (board[quenposX - x2] && board[quenposX - x2][j] === 'o') {
            break;
        }
        x2++;
    }

    // right down
    for (let j = quenposY + 1; j <= n - 1; j++) {

        if (board[quenposX + x3] && board[quenposX + x3][j] === undefined) {
            counter++;
        }
        if (board[quenposX + x3] && board[quenposX + x3][j] === 'o') {
            break;
        }
        x3++;
    }

    for (let j = quenposY; j >= 0; j--) {
        if (board[quenposX][j] === undefined) {
            counter++;
        }
        if (board[quenposX][j] === 'o') {
            break;
        }
    }
    for (let j = quenposY; j <= n - 1; j++) {
        if (board[quenposX][j] === undefined) {
            counter++;
        }
        if (board[quenposX][j] === 'o') {
            break;
        }
    }

    for (let j = quenposX; j >= 0; j--) {
        if (board[j][quenposY] === undefined) {
            counter++;
        }
        if (board[j][quenposY] === 'o') {
            break;
        }
    }

    for (let j = quenposX; j <= n - 1; j++) {
        if (board[j][quenposY] === undefined) {
            counter++;
        }
        if (board[j][quenposY] === 'o') {
            break;
        }
    }

    console.log("  counter", board)
    return counter;


}

queensAttack(5, 3, 4, 3, obstacles)