var number = "0";

$(document).ready(function(){
  $('.number').click(function(){
    storeNumber($(this).text()); 
  });
});

storeNumber = function(digit) {
  number += digit;
  display(getNum());
}

display = function(lcd){
  document.querySelector('.lcd').innerHTML = lcd;
}

getNum = function() {
  num = parseFloat(number);
  return num;
}
