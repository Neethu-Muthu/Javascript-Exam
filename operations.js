function operations(){
    let  x=document.getElementById("num1").value;
    let  y=document.getElementById("num2").value;
    let result=0;
    let operator=document.getElementById("operator").value;
    x=parseFloat(x);
    y=parseFloat(y);
    result=parseFloat(result);
    if(operator==='+'){
      result=x+y;
    }
    else if(operator==='-'){
      result=x-y;
    }
   
   
    else if(operator==='*'){
      result=x*y;
    }
    else if (operator === '/') {
      if (y !== 0) {
          result = x / y;
      } else {
          result = 'Error: Division by zero';
      }
   }
   
   
   document.getElementById("result").innerHTML = 'Result: ' + result;
   }
   


