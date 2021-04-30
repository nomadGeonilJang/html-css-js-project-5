let counter1 = 0;
let counter2 = 1;

const sections = document.querySelectorAll("section");
const progress = document.querySelector(".progress h2");
const cirlcles = document.querySelectorAll('.circle');

const progressCounter = () => {
    progress.textContent = `${counter2} / ${sections.length}`
    cirlcles.forEach(circle => {
        circle.style.backgroundColor = "transparent";
    })
    document.querySelector(`.circle-${counter2}`).style.backgroundColor = "#ddd"
}

const pageController = () => {

    if(counter1 === 5){
        sections.forEach((section)=>{
            section.style.left = '0'
        })
        counter1 = 0;
        counter2 = 1;
        progressCounter();
        return ;
    }

    if(counter1 === -1){
        sections.forEach(section => {
            if(section.classList[0] === 'section-5'){
                return;
            }
            section.style.left = `-100vw`
        })
        counter1 = 4;
        counter2 = 5;
        progressCounter()
    }
    progressCounter();
}

window.addEventListener('wheel',(e)=>{
    const deltaY = e.deltaY > 0;
    
    if(deltaY){
        counter1++;
        counter2++;
    }else{
        counter1--;
        counter2--;
    }
    pageController();
    if(counter1 === 0) return;
    document.querySelector(`.section-${deltaY ? counter1 : counter2}`).style.left = `${deltaY ? "-100vw" : "0"}`
})



document.querySelector('.left-btn').addEventListener("click",()=>{
    document.querySelector(`.section-${counter1}`).style.left = '0'
    counter1--;
    counter2--;
    
    pageController();
})

document.querySelector('.right-btn').addEventListener("click",()=>{
    counter1++;
    counter2++;
    document.querySelector(`.section-${counter1}`).style.left = '-100vw'
    pageController();
})