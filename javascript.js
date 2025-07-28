let display=document.getElementById("display");
function append(element){
    if (display.innerHTML==0){
        display.innerHTML=element;
    }
    else{
        display.innerHTML+=element;
    }
    if (display.innerHTML=="="){
        try{
            display.innerHTML=eval(display.innerHTML.slice(0,-1));
        } catch(error){
            display.innerHTML="Error";
        }
    }
}
function clearDisplay(){
    display.innerHTML=0;
}
function calculate(){
    let expression=display.innerHTML;
    try {
    let result = eval(expression);
    display.innerText = result;
  } catch (error) {
    display.innerText = "Error";
  }
}
function backspace(){
    if (display.innerHTML.length > 1) {
        display.innerHTML = display.innerHTML.slice(0, -1);
    } else {
        display.innerHTML = 0;
    }
}