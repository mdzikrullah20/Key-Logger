const capsbtn = document.querySelector('.caps')
const keydonbtn = document.querySelector('.keyup')
const start = document.querySelector('.start')
const stop = document.querySelector('.stop')


start.addEventListener('click',()=>{
    document.addEventListener('keydown',handalDown)
    document.addEventListener('keyup',handalup);
    start.disabled = true; 
    stop.disabled = false;
})
stop.addEventListener('click',()=>{
    document.removeEventListener('keydown',handalDown)
    document.removeEventListener('keyup',handalup)
    capsbtn.textContent = ''
    keydonbtn.textContent = ''
    start.disabled = false;
    stop.disabled = true;
})
function handalDown(e){
 capsbtn.textContent = `key ${e.key} pressed down`;
 keydonbtn.textContent = 'key is down'
 
}
function handalup(e){
    capsbtn.textContent = `key ${e.key} pressed up`;
    keydonbtn.textContent = 'key is up'
   
   }