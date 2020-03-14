//clock
const time = document.getElementById('time'),
greeting = document.getElementById('welcome'),
//user name
name = document.getElementById('name'),
//asking about his plans
plans = document.getElementById('plans'),
button = document.getElementById('button');




//clock function
function showTime(){
    let today = new Date(),
        hour = today.getHours(),
        min = today.getMinutes(),
        sec = today.getSeconds();
     
        time.innerHTML = `${hour}<span>:</span>${addZero(min)}<span>:</span>${addZero(sec)}`;

    setTimeout(showTime, 1000);
    
}
//adding 0 if the number is single digit
function addZero(number){
    return(parseInt(number, 10) < 10 ? '0' : '') + number;
}
function getGreet(){
    
    let today = new Date();
        hour = today.getHours();
    if(hour < 12){
        //Morning Text and img
        document.body.style.backgroundImage = "url('img/morning.jpg')";
        greeting.textContent = 'Good Morning';
        
        
    }else if(hour < 18){
        //Afternoon Text and img
        document.body.style.backgroundImage = "url('img/tree.jpg')";
        greeting.textContent = 'Good Afternoon';
        document.body.style.color ='white'
    } else {
        //Evening Text and img
        document.body.style.backgroundImage = "url('img/evening.jpg')";
        greeting.textContent = "Good Evening";
        document.body.style.color = 'white';

    }


}
// making enter being registered as a break
function setName(i){
    if(i.type === 'keypress'){
        if(i.which == 13 || i.keyCode == 13){
            localStorage.setItem('name', i.target.innerText);
            name.blur();
        }
    } else {
        localStorage.setItem('name', i.target.innerText);
    }
}
function setPlans(i){
    if(i.type === 'keypress'){
        if(i.which == 13 || i.keyCode == 13){
            localStorage.setItem('plans', i.target.innerText);
            plans.blur();
        }
    } else {
        localStorage.setItem('plans', i.target.innerText);
    }
}
// storing the name and plans in local storage
function getName() {
    if(localStorage.getItem('name') === null){
        name.textContent = '[Enter Name]';
    } else {
        name.textContent = localStorage.getItem('name');
    }
}
function getPlans() {
    if(localStorage.getItem('plans') === null){
        plans.textContent = '[Enter Plans]';
    } else {
        plans.textContent = localStorage.getItem('plans');
    }
}

name.addEventListener('keypress', setName);
name.addEventListener('blur', setName);
plans.addEventListener('keypress', setPlans);
plans.addEventListener('blur', setPlans);

showTime();
getGreet();
getName();
getPlans();