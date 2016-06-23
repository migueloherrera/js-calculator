var number = "0";
var current = "";
var op1 = true;
var op2 = false;
var operator = "";
var operand = [0, 0];
var dot = false;
var equal = false;

$(document).ready(function() {
  $('.number').click(function() {
    current = $(this).text();
    saveNumber();
  });
  
  $('#dot').click(function() {
    setDot();
  });
  
  $('.operator').click(function() {
    saveOperator($(this).text());
    equal = false;
  });
  
  $('#equal').click(function() {
    setEqual();
    equal = true;
  });
  
});

saveNumber = function() {
  if (equal) {
    operand = [0, 0];
    dot = false;
    operator = "";
    number = "0";
    op1 = true;
    op2 = false;
    equal = false;
  }
  
  if (op1) {
    number += current;
    operand[0] = getNum();
    display(operand[0]);
  } else {
    op2 = true;
    number += current;
    operand[1] = getNum();
    display(operand[1]);
  }
}

setDot = function() {
  if("0123456789".indexOf(current) != -1) {
    if (dot == false) {
      number += "."
      dot = true;
      display(getNum());
    }
  }
}

saveOperator = function(key) {
  if("0123456789".indexOf(current) != -1) {
    if (op2) { 
      r = setResult();     
      operand[0] = r;
      operand[1] = 0;
      display(r);
    } 
    number = "0";
    dot = false;
    op1 = false;
    op2 = false;
    operator = key;
  }
}

setEqual = function() {
  r = setResult();
  display(r);
  number = "0";
  dot = false;
  op1 = false;
  op2 = false;
  operand[0] = r;
  operand[1] = 0;
  operator = "";
  if("0123456789".indexOf(current) != -1) {
    
  }
}

setResult = function() {
  switch(operator) {
  case "+":
    r = add(operand[0], operand[1]);
    break;
  case "-":
    r = subtract(operand[0], operand[1]);
    break;
  case "x":
    r = multiply(operand[0], operand[1]);
    break;
  case "/":
    r = divide(operand[0], operand[1]);
    break;
  }
  return r;
}

display = function(lcd){
  document.querySelector('.lcd').innerHTML = lcd;
}

getNum = function() {
  number = number.replace(/^0+/, '');
  num = parseFloat(number);
  return num;
}

add = function(a, b) {
  return a + b;
};

subtract = function(a, b) {
  return a - b;
};

multiply = function(a, b) {
  return a * b;
};

divide = function(a, b) {
  return a / b;
};
