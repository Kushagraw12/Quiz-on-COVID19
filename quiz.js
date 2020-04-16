let count=0;


function age(){
    let x=document.getElementById("q1");
    let b1=document.getElementById("b1");
    let b2=document.getElementById("b2");
    let b3=document.getElementById("b3");
    if(!b3){
        count++;
    }
}
function qu3(){
    let y=document.getElementById("q2");
    let c1=document.getElementById("c1");
    let c2=document.getElementById("c2");
    let c3=document.getElementById("c3");
    let c4=document.getElementById("c4");
    if(!c1){
        count++;
    }
    if(!c2){
        count++;
    }
    if(!c3){
        count++;
    }
    if(!c4){
        count++;
    }
}
function qu4(){
    let z=document.getElementById("q3");
    let a1=document.getElementById("a1");
    let a2=document.getElementById("a2");
    let a3=document.getElementById("a3");
    let a4=document.getElementById("a4");
    let a5=document.getElementById("a5");
    let a6=document.getElementById("a6");
    if(!a1){
        count++;
    }
    if(!a2){
        count++;
    }
    if(!a3){
        count++;
    }
    if(!a4){
        count++;
    }
    if(!a5){
        count++;
    }
}
function trav(){
    let w=document.getElementById("q4");
    let e1=document.getElementById("e1");
    if(!e1){
        count+=2;
    }
}
function chck()
{
    if(count>1){
        console.log("Please visit the nearest COVID19 hospital and get your checkup done!");
        alert('For more details, visit LIST OF ALL COVID19 HOSPITALS AND TEST CENTERS');
    }
    else{
        console.log("You are safe for now!");
        console.log("Please re-take this quiz next week and take all the necessary precautions");
    }
}