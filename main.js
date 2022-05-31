const clockEl = document.querySelector('.clock');
const buttons = document.querySelectorAll('.format button');
const intervalID = setInterval( generateTime, 1000)

//Clock
function generateTime (){
  let format = clockEl.getAttribute('data-format');
  let date = new Date;
  var hour = date.getHours();
  var timeStatus = '';
  var min = date.getMinutes();
  var sec = date.getSeconds();
  var day = date.getDay();
  if (format === '12') {
    timeStatus = (hour >= 12) ? 'PM' : 'AM';
    hour = (hour > 12) ? hour % 12 : hour;
  }
  clockEl.innerHTML = `<h1>${hour} : ${min} : ${sec} ${timeStatus} (GMT+1)</h1>`
}

//Format button
buttons.forEach((button)=>{
  button.addEventListener('click', ()=>{
    const format = button.getAttribute('data-format');
    clockEl.setAttribute('data-format', format);
    generateTime();
  })
})

let cycle = document.getElementById('cycle');

// document.getElementById('12hour').onclick = function(){
// 	cycle.style.animationPlayState = 'running';
// };

// document.getElementById('24hour').onclick = function(){
// 	cycle.style.animationPlayState = 'paused';
// };