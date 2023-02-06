let gameField = document.querySelector('.gameField')
let maxCount = document.querySelector('.maxCount')

let value = [2, 2, 4, 4]

let maxValue = 0

let field = [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0]
]

function gameStart() {
    console.log(field)

    field = [
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0]
    ]

    insertNumber()
}

function keyUp(){
    console.log('up')
    for (let countUp = 0; countUp < 4; countUp++){
        for (let k = 0; k < field.length-1; k++){
            for (let l = 0; l < field[k].length; l++){
                if (field[k][l] == 0){
                    field[k][l] = field[k+1][l]
                    field[k+1][l] = 0
                }
                if (field[k][l] == field[k+1][l]){
                    field[k][l] = field[k][l] + field[k+1][l]
                    field[k+1][l] = 0
                }
            }
        }
    }
    randomCell(0, 3)

    console.log(field)
}

function keyLeft(){
    console.log('left')

    for (let countLeft = 0; countLeft < 4; countLeft++){
        for (let n = 0; n < field.length; n++){
            for (let m = 0; m < field[n].length-1; m++){
                if (field[n][m] == 0){
                    field[n][m] = field[n][m+1]
                    field[n][m+1] = 0
                }
                if (field[n][m] == field[n][m+1]){
                    field[n][m] = field[n][m] + field[n][m+1]
                    field[n][m+1] = 0
                }
            }
        }
    }
    randomCell(0, 3)
    console.log(field)
}

function keyDown(){
    console.log('down')

    for (let countDown = 0; countDown < 4; countDown++){
        for (let g = field.length-1; g > 0; g--){
            for (let h = 0; h < field[g].length; h++){
                if (field[g][h] == 0){
                    field[g][h] = field[g-1][h]
                    field[g-1][h] = 0
                }
                if (field[g][h] == field[g-1][h]){
                    field[g][h] = field[g][h] + field[g-1][h]
                    field[g-1][h] = 0
                }
            }
        }
    }
    randomCell(0, 3)
    console.log(field)
}

function keyRight(){
    console.log('right')
    for (let countRight = 0; countRight < 4; countRight++){
        for (let y = 0; y < field.length; y++){
            for (let u = field[y].length-1; u > 0; u--){
                if (field[y][u] == 0){
                    field[y][u] = field[y][u-1]
                    field[y][u-1] = 0
                }
                if (field[y][u] == field[y][u-1]){
                    field[y][u] = field[y][u] + field[y][u-1]
                    field[y][u-1] = 0
                }
            }
        }
    }
    randomCell(0, 3)

    console.log(field)
}

function insertNumber(){
    gameField.innerHTML =' '
    for (let i = 0; i < field.length; i++){
        for (let j = 0; j < field[i].length; j++){
            if (field[i][j] != 0){
                gameField.innerHTML += '<div class="cell" style="background: rgb('+field[i][j]*10+', '+field[i][j]*(-.3)+', '+field[i][j]*.5+', 1);" id="'+i+','+j+'">'+field[i][j]+'</div>'
            }
            else {
                gameField.innerHTML += '<div class="cell" id="'+i+','+j+'"></div>'
            }
        }
    }
}

function randomCell(min, max) {
    let x = Math.floor(Math.random() * (max - min + 1)) + min
    let y = Math.floor(Math.random() * (max - min + 1)) + min

    let values = Math.floor(Math.random() * (max - min + 1)) + min
    
    insertCell(x, y, values)
}

function insertCell(x, y, values) {
    if (field[x][y] == 0){
        field[x][y] = value[values]
        insertNumber()
    }
    else {
        randomCell(0, 3)
    }

    getMax()
}

function getMax() {
    for (let p = 0; p < field.length; p++){
        for (let q = 0; q < field[p].length; q++){
            if (maxValue < field[p][q]){
                maxValue = field[p][q]
                maxCount.innerHTML = 'Рекорд: ' + maxValue
            }
        }
    }
}