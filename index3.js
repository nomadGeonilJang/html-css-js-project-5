// function solution() {
//     let answer = ""
//     const tds = document.querySelectorAll("td");
//     tds.forEach(td => {
//         if(td.style.color !== td.style.backgroundColor){
//             answer += td.textContent
//         }
//     })
// }

// solution();




function solution() {

    const getOpenTypeFromCloseType = (type) => {
        if(type === "</ul>"){
            return "<ul>"
        }else if(type === "</ol>"){
            return "<ol>"
        }
    }

    
    const counts = [];
    let count = 0;
    const targetList = document.querySelector("body").innerHTML.match(/((<ul>))|(<ol>)|(<\/ul>)|(<\/ol>)/g)

    const stack = [targetList[0]];
    console.log(targetList)
    for(let i = 1 ; i < targetList.length; i++){
        console.log(count, "stack : ", stack)
        const item = targetList[i]
    
        if(getOpenTypeFromCloseType(item) && (stack[stack.length - 1] === getOpenTypeFromCloseType(item))){
            stack.pop();
            count++;
            if(stack.length === 0){
                counts.push(count)
                count = 0;
                continue;
            }
        }else{
            stack.push(item)
        }
    }
    console.log(counts.sort((a,b)=>a-b))
    console.log("->->",stack)
    const answer = counts.sort((a,b)=>a-b)[counts.length - 1]
    console.log(answer)
    return answer
}

solution();