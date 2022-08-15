let body = document.querySelector('body');
let btnPrev = document.querySelector('.slide-prev');
let btnNext = document.querySelector('.slide-next');

let arrayBtn = [btnPrev, btnNext];

let randomNum;

body.style.backgroundImage = "url('https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/evening/18.jpg')"

function getRandomNum(){
    return Math.floor(Math.random() * (21 - 1) + 1);
}


function setBg(time, number) {
    randomNum = number;
    number = String(number);
    if(number.length == 1){
        number = '0' + number
    }
    console.log(number)
    const img = new Image();
    img.src = `https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/${time}/${number}.jpg`
    img.onload = () => {      
        body.style.backgroundImage = `url('https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/${time}/${number}.jpg')`
  }; 
   
}

setBg(greeting(new Date().getHours()), getRandomNum())

arrayBtn.forEach(elem => elem.addEventListener('click', (e) => {
    if(e.currentTarget.className == 'slide-prev slider-icon'){
        randomNum--
        if(randomNum == 00){
            randomNum = 20;
            setBg(greeting(new Date().getHours()), randomNum)
        }
       
        setBg(greeting(new Date().getHours()), randomNum)
    }else if(e.currentTarget.className == 'slide-next slider-icon'){
        randomNum++
        if(randomNum == 21){
            randomNum = 01;
            setBg(greeting(new Date().getHours()), randomNum)
        }
        
        setBg(greeting(new Date().getHours()), randomNum)
    }
    
}))