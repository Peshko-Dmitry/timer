const plus = document.querySelector('.fa-square-plus')
const minus = document.querySelector('.fa-square-minus')
const start = document.querySelector('.fa-circle-play')
const rotate = document.querySelector('.fa-arrows-rotate')

const minuts = document.querySelector('.minuts')
const seconds = document.querySelector('.seconds')

const audio = document.querySelector('.audio')
let audiObj = new Audio('music.mp3')


let countMinPlus = 0


function plusCounter(){
    countMinPlus++
    if(countMinPlus < 10){
        minuts.textContent = '0' + countMinPlus
    }
    else{
        minuts.textContent = countMinPlus
    }

}

plus.addEventListener('click', plusCounter)

function minusCounter(){
    countMinPlus--
    if(countMinPlus < 0) {
        countMinPlus = 0
    }
    if(countMinPlus < 10){
        minuts.textContent = '0' + countMinPlus
    }
    else{
        minuts.textContent = countMinPlus
    }
    
}
minus.addEventListener('click', minusCounter)


let counter = 60
let count = 0
function timer(){

    start.style.color = 'red'
    if(+minuts.textContent > 0 && +minuts.textContent < 10){
        minuts.textContent = '0' + (minuts.textContent - 1)
    }
    if(+minuts.textContent > 10){
        minuts.textContent = minuts.textContent - 1
    }
    
    if(counter != 0 && +minuts.textContent >= 0){
                
        let interval = setInterval(function(){
            if(+minuts.textContent >=  0){
                counter--
                
            }
            if(counter <0 && +minuts.textContent > 0){
                counter = 59
                minuts.textContent = '0' + (minuts.textContent - 1)
            }
            if(counter <=0 && +minuts.textContent == 0){
                counter = 0
                minuts.textContent = '00' 
                clearInterval(interval, 0)

                audiObj.play()
            }
            if(counter < 10){
                seconds.textContent = '0' + counter
            }
            if(counter >= 10){
                seconds.textContent = counter
            }

            console.log(counter)
            
        },1000)

        console.log(seconds.textContent)
        
    
}
}

start.addEventListener('click', timer)

rotate.addEventListener('click', function(){
    location.reload()
})

