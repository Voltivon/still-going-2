'use strict';

const startBtn = document.querySelector('.start')

startBtn.addEventListener('click', function(){

setInterval(function(){
const now = new Date()
const hours = now.getHours()
const mins = now.getMinutes()
const secs = now.getSeconds()
console.log(`${hours}:${mins}:${secs}`)

},1000 )



})

console.log(setInterval())