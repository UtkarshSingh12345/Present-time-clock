
setInterval(setClock ,1000)

const hourhand= document.querySelector('[data-hour-hand]');
const minutehand= document.querySelector('[ data-minute-hand]');
const secondhand= document.querySelector('[ data-second-hand]');
  

function setClock(){
    const hello= new Date();
    const secondRatio=hello.getSeconds()/60;
    const minuteRatio= (secondRatio + hello.getMinutes())/60; 
    const hourRatio= (minuteRatio + hello.getHours())/12;
     rotateclock(secondhand,secondRatio);
     rotateclock(minutehand,minuteRatio);
     rotateclock(hourhand,hourRatio);

    
}

 
function rotateclock(element, rotationRatio)
{
    element.style.setProperty('--rotation',rotationRatio*360);
   



}