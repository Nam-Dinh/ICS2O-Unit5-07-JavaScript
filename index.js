// JavaScript File
function input(){
   var number1 = document.getElementById("textbox1").value;
   var number2 = document.getElementById("textbox2").value;
   var counter= 0;
   var answer = 0;
   
   while(counter < number2){
      counter++;
      answer= parseInt(answer) + parseInt(number1);
   }
   alert("The product of this equation is "+ answer);
}