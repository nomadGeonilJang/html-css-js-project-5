const getNumberLength = (number) => {
    return String(number).length
}

function create2DArray(rows, columns) {
    var arr = new Array(rows);
    for (var i = 0; i < rows; i++) {
        arr[i] = new Array(columns);
    }
    return arr;
}

function draw(table){
    console.log(T)

}

function solution(A, K) {


    let maxLength = 0;
    
    A.forEach(number => {
        if(getNumberLength(number) > maxLength){
            maxLength = getNumberLength(number)
        }
    })

    const row = Math.ceil( A.length / K );
    const col = K > A.length ? A.length : K;
    
    const table = Array.from(Array(row), () => Array(col).fill(0))
    let index = 0;
    for(let j = 0 ; j < row ; j++){
        for(let i = 0 ; i < col ; i++){
            table[j][i] =  A[index] 
            index++;
        }
    }

    console.log(row, col)
    console.log(table)

    // process.stdout.write( `
    // +-----+-----+-----+-----+-----+-----+-----+-----+
    // |    4|   35|   80|  123|12345|   44|    8|    5|
    // +-----+-----+-----+-----+-----+-----+-----+-----+
    // `)
}


solution([4, 35, 80, 123, 12345, 44, 8, 5, 24, 3], 4)