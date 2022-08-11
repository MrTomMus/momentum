let greetingDIv = document.querySelector('.greeting');

function greetings(time) {
   if(time <= 5){
    return 'night'
   }else if(time <= 11){
    return 'morning'
   }else if(time <= 17){
    return 'day'
   }else if(time <= 23){
    return 'evening'
   }
}

let time = new Date().getHours()
let result = greetings(time);
greetingDIv.textContent = `Good ${result}`;