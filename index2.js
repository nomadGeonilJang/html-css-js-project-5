const getNumberLength = (number) => {
    return String(number).length
}
function create2DArray(rows, columns) {
    const arr = new Array(rows);
    for (var i = 0; i < rows; i++) {
        arr[i] = new Array(columns);
    }
    return arr;
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
    draw(table, maxLength)
}

function draw(table, maxLength){

    const star = () => "+"
    const line = () => {
        let l = ''
        for(let i = 0 ; i < maxLength ; i++){
            l += '-'
        }
        return l;
    }
    const bar = () => "|"
    const top = () => {
        let answer = ""
        for(let col = 0 ; col < table[0].length ; col++){
            answer += star();
            answer += line();
        }
        answer += star();
        return answer
    }
    const bottom = () => {
        let answer = ""
        for(let col = 0 ; col < table[table.length - 1].filter(item => item !== undefined).length ; col++){
            answer += star();
            answer += line();
        }
        answer += star();
        return answer
    }

    let answer = ``
    for(let row = 0 ; row < table.length ; row++){
        answer += top();
        answer += "\n"
        answer += bar();
        for(let col = 0 ; col < table[0].length ; col++){
            const currentNumber = table[row][col];
            if(!currentNumber){
                break;
            }
            const diff = maxLength - getNumberLength(currentNumber)
            for(let i = 0 ; i < diff; i++){
                answer += " "
            }
            answer += currentNumber
            answer += bar();
        }
        answer += "\n"
    }
    answer += bottom();
    process.stdout.write(answer)
}


// solution([4, 35, 80, 123, 12345, 44, 8, 5, 24, 3], 4)
solution([4, 35, 80, 123, 12345, 44, 8, 5,24,3,22,35], 4)