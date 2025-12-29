let user_click=[];
let random_click=[];
let level=0;

function gameOver(){
    let wrong=new Audio("sounds/wrong.mp3");
    wrong.play();
    level=0;
    document.getElementById("level-title").innerText="Game Over, Press any Key to Restart";
    started=false;
    user_click.length=0;
    random_click.length=0;
}

function randomClick(n){
    level++;
    document.getElementById("level-title").innerText = "Level " + level;
    switch(n){
        case 1:
            document.getElementById("green").classList.add("active");
            setTimeout(function(){
                document.getElementById("green").classList.remove("active");
            },500);
            random_click.push("green");
            return;
        case 2:
            document.getElementById("red").classList.add("active");
            setTimeout(function(){
                document.getElementById("red").classList.remove("active");
            },500);
            random_click.push("red");
            return;
        case 3:
            document.getElementById("yellow").classList.add("active");
            setTimeout(function(){
                document.getElementById("yellow").classList.remove("active");
            },500);
            random_click.push("yellow");
            return;
        case 4:
            document.getElementById("blue").classList.add("active");
            setTimeout(function(){
                document.getElementById("blue").classList.remove("active");
            },500);
            random_click.push("blue");
            return;
    }
}

function checkAns(index){
    if(random_click[index]===user_click[index]){
        if(random_click.length-1===index){
            let n=Math.floor(Math.random()*4)+1;
            user_click.length=0;
            setTimeout(function(){
                randomClick(n);
            },1000);
        }
    }
    else{
        gameOver();
        return;
    }
}

let buttons = document.getElementsByClassName("btn");

for (let btn of buttons) {
    btn.addEventListener("click", function (event) {
        let clicked = event.target.id;
        document.getElementById(clicked).classList.add("active");
        setTimeout(function(){
            document.getElementById(clicked).classList.remove("active");
        },500);
        user_click.push(clicked);
        checkAns(user_click.length - 1);
    });
}

let started=false;
document.addEventListener("keydown",()=>{
    if(!started){
        started=true;
        let n=Math.floor(Math.random()*4)+1;
        randomClick(n);
        console.log(user_click,random_click);
    }
});
