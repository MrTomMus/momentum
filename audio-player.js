import playList from "./playList.js";

const play = document.querySelector('.play');
const prevBtn = document.querySelector('.play-prev');
const nextBtn = document.querySelector('.play-next');

let audio = document.createElement('audio');
let isPlay = false;
let numAudio = 0;

for(let i = 0; i<playList.length; i++){
    const li = document.createElement('li');
    li.classList.add('play-item');
    document.querySelector('.play-list').appendChild(li)
    li.appendChild(audio)
    li.textContent = playList[i].title
}

const arrLi = document.querySelectorAll('li');

function playAudio() {
    if(!isPlay){
        audio.src = playList[numAudio].src
        audio.currentTime = 0;
        audio.play();
        isPlay = true;
        console.log('play')
        play.classList.toggle('pause')
        arrLi[numAudio].classList.toggle('item-active')
        
    }else{
        audio.pause();
        isPlay = false;
        console.log('stop')
        play.classList.toggle('pause')
        arrLi[numAudio].classList.toggle('item-active')
    }
}

function nextAudio(e) {
    let btn = e.target;
    if(btn.className === 'play-prev player-icon'){
        arrLi[numAudio].classList.remove('item-active')
        numAudio--
        if(numAudio == -1){
            numAudio = playList.length - 1
        }
        audio.src = playList[numAudio].src
        audio.currentTime = 0;
        console.log(numAudio)
        
        if(isPlay){
            audio.play()
            arrLi[numAudio].classList.add('item-active')
        }
    }else if(btn.className === 'play-next player-icon'){
        arrLi[numAudio].classList.remove('item-active')
        numAudio++;
        if(numAudio == playList.length){
            numAudio = 0
        }
        audio.src = playList[numAudio].src
        audio.currentTime = 0;
        console.log(numAudio)
        
        if(isPlay){
            audio.play()
            arrLi[numAudio].classList.add('item-active')
        }
    }
}

play.addEventListener('click', playAudio);
prevBtn.addEventListener('click', nextAudio)
nextBtn.addEventListener('click', nextAudio)