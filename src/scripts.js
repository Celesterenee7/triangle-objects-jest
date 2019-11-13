import $ from 'jquery';
import 'bootstrap';
import './css/bootstrap.min.css';
import './css/styles.css';


// var number1 = $("#side1").val();
// var number2 = $("#side2").val();
// var number3 = $("#side3").val();
$(document).ready(function(){
  $("form#generator").submit(function(){
    event.preventDefault()
    var number1 = parseInt($("#side1").val());
    var number2 = parseInt($("#side2").val());
    var number3 = parseInt($("#side3").val());
    if(number1 === number2 && number2 === number3){
      $("form").append("<h1> We Generated an 'Equilateral' triangle for you</h1>")
    } else if (number1 + number2 <= number3 ||
              number2 + number3 <= number1 ||
              number1 + number3 <= number2) {
      $("form").append("<h1>This is not a triangle!!</h1>")
    }
    else if (number1 === number2 || number2 === number3 || number1 === number3){
      $("form").append("<h1>We generated an 'Isosceles' triangle for you</h1>")
    }
    else if (number1 != number2 && number2 != number3){
      $("form").append("<h1>We generated a 'Scalene' triangle for you</h1>")
    }
  });
})
