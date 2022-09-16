//Student name and id


//identify the element by using element id and calling the SVG Box
var svg=document.getElementById("svgBox");
//storing the poko
var poko=document.createElementNS("http://www.w3.org/2000/svg","rect");
//storing the prey

var prey=document.createElementNS("http://www.w3.org/2000/svg","rect");
// set up the position of box (X axis)
var oldPositionX=0;
// set up the position of box (y axis)
var oldPositionY=0;
// set up the position of new box (X axis) after moving
var newPositionX=2;
// set up the position of  new box (y axis)
var newPositionY=2;

//in this function creating  a poko..
function createPoko(){
    poko.setAttribute("width","40");
    poko.setAttribute("height","40");
    poko.setAttribute("fill","yellow");
    poko.setAttribute("x",newPositionX);
    poko.setAttribute("y",newPositionY);
    svg.appendChild(poko);
}


// creating  a prey

function createPrey(){
    prey.setAttribute("width","20");
    prey.setAttribute("height","20");
    prey.setAttribute("fill","black");
    oldPositionX=5+Math.random()*560;
    oldPositionY=5+Math.random()*360;
    prey.setAttribute("x",oldPositionX);
    prey.setAttribute("y",oldPositionY);
    svg.appendChild(prey);
}

// const animatePoko=setInterval(function(){
//     newPositionX+=1;
//     newPositionY+=1;
//     createPoko();
//     checkBorder(newPositionX,newPositionY)
//     console.log("sdf");
    
// },10);
createPrey();
//storing the score value as zero
var score=0;
//is a method used to set the interval time
// weather poko catch prey
setInterval(function(){
    let r=0;
    let d=0
    for(r=0;r<40;r++){
        for(d=0;d<20;d++){
            if(parseInt(oldPositionX+d)==parseInt(newPositionX+r) && parseInt(oldPositionY+d)==parseInt(newPositionY+r)){
                createPrey();
                score=score+5;
                scoreChange();
                break;
            }}     
    }
},1);
// storing sc as score id 
var sc=document.getElementById("score");
scoreChange();
// changing the score based on the poko catch prey
function scoreChange(){
    sc.innerText="Score = "+score; 
}
//set up the timing for the game
function setTimer(){
    boool=false;
    clearInterval(pokodown);
    sc.innerText="Your Score = "+score+" .Please restart the game"; 
}
window.setTimeout(setTimer,40000);


// function checking the border
function checkBorder(x,y){
    if(x>=560){
        newPositionX=0;
    }
    if(x<=0){
        newPositionX=560;
    }
    if(y<=0){
        newPositionY=360;
    }
    if(y>=360){
        newPositionY=0;
    }
}
//store the speed of poko
var speed=10;
var bool=true;
var boool=true;
//Animation
var pokodown=()=>setInterval(function(){
    
    if(boool==true && bol==true){
        if(direction=="down"){
        newPositionX=newPositionX;
        newPositionY+=1;
        createPoko();
        checkBorder(newPositionX,newPositionY);   
    }

    else if (direction=="up") {
        newPositionX=newPositionX;
        newPositionY-=1;
        createPoko();
        checkBorder(newPositionX,newPositionY);
        
    } 

    else if (direction=="left") {
        newPositionX-=1;
        newPositionY=newPositionY;
        createPoko();
        checkBorder(newPositionX,newPositionY);
    } 

    else if (direction=="right") {
        newPositionX+=1;
        newPositionY=newPositionY;
        createPoko();
        checkBorder(newPositionX,newPositionY);

    }
    else{
        newPositionX+=1;
        newPositionY=newPositionY;
        createPoko();
        checkBorder(newPositionX,newPositionY);

    }
    
    }},5);

var direction="";
function directionUp(){direction="up";}
function directionDown(){direction="down";}
function directionLeft(){direction="left";}
function directionRight(){direction="right";}



var bol=false;
function SetSubmit(){
    if(document.getElementById("name").value!=""){
        var name=document.getElementById("name").value;
        bol=true;
        document.getElementById("heading").innerHTML="Welcome to SVG Style @  "+name;
    
    }
   
}

/**
 * reatart fuction to restart the game
 */
function setRestart(){
    document.location.reload();
}
// adding the events to pokodown
document.addEventListener("DOMContentLoaded",pokodown);
// adding the events to directionUp
document.getElementById("up").addEventListener("mouseover",directionUp);
// adding the events to directiondown
document.getElementById("down").addEventListener("mouseover",directionDown);
// adding the events to directionleft
document.getElementById("left").addEventListener("mouseover",directionLeft);
// adding the events to directionRight
document.getElementById("right").addEventListener("mouseover",directionRight);
// adding the events to Restart
document.getElementById("restart").addEventListener("click",setRestart);

document.getElementById("Submit").addEventListener("click",SetSubmit);



