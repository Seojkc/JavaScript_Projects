/**
 * George Cherian , 000864794
 * 
 */

//used to get identify the BOX id (white color line )
var svg=document.getElementById("Box"); 
var cc;
// positionY is the Y axiz 
var positionY=100;
// arr is variable to store values
var arr = [0,100,200];
         
      


var myCar=document.createElementNS("http://www.w3.org/2000/svg","rect");
/**
 * used to craete car with width , height and color and position
 */
function createMyCar(){
    
    myCar.setAttribute("id","myCar");
    myCar.setAttribute("x","20");
    myCar.setAttribute("y",positionY);
    myCar.setAttribute("width","150");
    myCar.setAttribute("height","100");
    myCar.setAttribute("fill","red");
    svg.appendChild(myCar);
    
}
/**
 * function used to move the car 
 * @param {*} idVal id of the car
 * @param {*} y is a coordinate of the car
 */
function moveCar(idVal,y){
    if(document.getElementById("myCar"+idVal)!=null){
        var newX=700;
        setInterval(function(){
            if(booool==true){
                newX-=2;
                if(document.getElementById("myCar"+idVal)!=null){
                    document.getElementById("myCar"+idVal).setAttribute("x",newX);

                }
                if(newX==170 && positionY==y || newX==170 && positionY==y){
                    booool=false;
                }
                if(newX<60){
                    clearCar(idVal);
                }
            }
            
            
        },10);
    }

}
var score=0;
/**
 * function used to store the score of the game.
 * if the car hit then it show the meaasage like game over and score also
 */
setInterval(function(){
    if(booool==true){
        score+=5;
        document.getElementById("score").innerText="Your Score is : "+score;
    }
    else{
        document.getElementById("score").innerText="Game Over. Your Score is : "+score; 
    }
},1000);
/**
 * used to remove the generated car .
 */
function clearCar(idVal){
    if(document.getElementById("myCar"+idVal)!=null){
        svg.removeChild(document.getElementById("myCar"+idVal));}
}
 
    
    
var booool=true;
var idValue=0;
/**
 * used to craete the right side cars
 */
setInterval(function(){
    if(booool==true){
        cc=document.createElementNS("http://www.w3.org/2000/svg","rect");
        let positionX=700;
        let y=arr[Math.floor(Math.random() * arr.length)];
        cc.setAttribute("id","myCar"+idValue);
        cc.setAttribute("x",positionX);
        cc.setAttribute("y",y);
        cc.setAttribute("width","100");
        cc.setAttribute("height","100");
        cc.setAttribute("fill","rgb("+Math.floor(Math.random()*200)+5+","+Math.floor(Math.random()*200)+5+","+Math.floor(Math.random()*200)+5+")");
        svg.appendChild(cc);
        moveCar(idValue,y);
        idValue+=1;
    }},4000);


createMyCar();

/**
 * set up the new positon up
 */
function newPositionUp(){
    if(positionY!=0){
        positionY=positionY-100;
        createMyCar();

    }
}
/**
 * giving name to the header part while typing on the input button
 */
function name(){
    document.querySelector(".welcome").innerHTML="Welcome to SVG Animation!  "+document.querySelector("#username").value;
    console.log(document.querySelector("#username").value);
}
setInterval(name,2000);
/**
 * set up the new positon up
 */
function newPositionDown(){
    if(positionY!=200){
        positionY+=100;
        createMyCar();
    }
   
}
      
    


//calling event to newPositionUp button
document.getElementById("forward").addEventListener("click",newPositionUp);
//event to newPositionDown button
document.getElementById("backward").addEventListener("click",newPositionDown);
//calling event to newPositionUp button mosue over action given here
document.getElementById("forward").addEventListener("mouseover",newPositionUp);
//calling event to newPositionDown button mosue over action given here
document.getElementById("backward").addEventListener("mouseover",newPositionDown);



