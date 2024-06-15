var timer;
var score=0;
var hitrn=0;
const hitAudio=new Audio('C:\\Users\\aryan\\OneDrive\\Documents\\vs2june\\webd\\projetcs\\proj1\\hit.mp3');
const wrong=new Audio('C:\\Users\\aryan\\OneDrive\\Documents\\vs2june\\wrong.mp3');
const time_up=new Audio('C:\\Users\\aryan\\OneDrive\\Documents\\vs2june\\webd\\projetcs\\proj1\\time_up.mp3');
const startAudio=new Audio('C:\\Users\\aryan\\OneDrive\\Documents\\vs2june\\start.mp3');


// For timer default
document.getElementById("setTime").defaultValue=60;
//adding front page class
var box= document.getElementById("pbtm")
box.classList.add("pbtm-outro");
// frontSound.play();

function load(){
//     const frontSound=new AudioContext('C:\\Users\\aryan\\OneDrive\\Documents\\vs2june\\frontSound.mp3')
//     console.log(AudioContext.state)
//     time_up.play();
 }
function getVal(){
    timer=document.getElementById("setTime").value;
}

function makeBubble(){
    box.classList.remove("pbtm-outro");
        var clutter= "";
    for (var i=1;i<=70;i++){
        var rn=Math.floor(Math.random()*10)
        clutter+=`<div class="bubble" >${rn}</div>`;
    }
    document.querySelector("#pbtm").innerHTML  = clutter;
}

function setTimer(timer){
    
    var timeint=setInterval(function(){
        if(timer>0){
            timer--;
            document.querySelector("#timer").textContent=timer;
        }
        else{
            clearInterval(timeint);
            time_up.play();
            document.querySelector("#pbtm").innerHTML=`<h1>Game Over!! Score:${score}</h1>`
        }
        
    },1000);
    

}

function hit(){
   hitrn=Math.floor(Math.random()*10)
    document.querySelector("#hitVal").textContent=hitrn
}

function increaseScore(){
    score+=10;
    document.querySelector("#scoreVal").textContent=score;
}

document.querySelector("#pbtm").addEventListener("click",function(dets){
    var target=Number(dets.target.textContent)
    
    if (target===hitrn){
        hitAudio.play();
        increaseScore();
        makeBubble();
        hit()
        
        } 
    else {
        wrong.play();
        document.querySelector("#pbtm").innerHTML=`<h1>Game Over!! Score:${score}</h1>`
    } 
})




document.querySelector("#start-bu").addEventListener("click",function(){
    startAudio.play();
    document.querySelector("#timer").innerHTML=timer;
    setTimer(timer);
    hit();
    makeBubble();
    score=0;
    document.querySelector("#scoreVal").textContent=score;

})

