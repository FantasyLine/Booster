'use strict'
let seconde = 0;
let minute = 0;
let ds = 0;
let chrono = document.querySelector('#chrono');
let startstop = document.querySelector('#startstop');
let reset = document.querySelector('#reset')
let lag;

// bonus1
startstop.addEventListener('click', () => {
    if(startstop.textContent === 'Start'){
        timer()
        startstop.textContent = (`Stop`)
    }else{
        clearTimeout(lag)
        startstop.textContent = (`Start`)
    }
        
})
reset.addEventListener('click', () => {
    seconde = 0;
    minute = 0;
    ds = 0;
    chrono.textContent = (`${minute} : ${seconde} : ${ds}`)  
})
function timer(){
        
    if (seconde === 60){
        minute ++ ;
        seconde = 0
    }
    if (ds === 111){
        seconde ++;
        ds = 0
    }
        
        chrono.textContent = (`${minute} : ${seconde} : ${ds}`)
        ds++;
        lag=setTimeout(timer, 10)

}





// document.addEventListener('DOMContentLoaded', function () {

//     function timer(){
    
//     if (seconde === 60){
//         minute ++ ;
//         seconde = 0
//     }
    
//     document.querySelector('#chrono').textContent = (`${minute} : ${seconde}`)
//     seconde++;
//     setTimeout(timer, 1000)
//     }
    
// timer()
// });
