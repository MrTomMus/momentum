let greetingDIv = document.querySelector('.greeting');

function greeting(time) {
    if(time <= 5){
        return 'night'
       }else if(time <= 11){
        return 'morning'
       }else if(time <= 17){
        return 'afternoon'
       }else if(time <= 23){
        return 'evening'
       }
}

function showGreetings() {
    let time = new Date().getHours()
    let result = greeting(time);
    greetingDIv.textContent = `Good ${result}`;
}

showGreetings()