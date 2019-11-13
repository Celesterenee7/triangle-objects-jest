import $ from 'jquery';
import 'bootstrap';
import './css/bootstrap.min.css';
import './css/styles.css';
import { Triangle } from './triangle.js';


// const number1 = $("#side1").val();
// const number2 = $("#side2").val();
// const number3 = $("#side3").val();
$(document).ready(function(){
  $("form#generator").submit(function(){
    event.preventDefault();
    const number1 = parseInt($("#side1").val());
    const number2 = parseInt($("#side2").val());
    const number3 = parseInt($("#side3").val());
    const thisTriangle = new Triangle(number1, number2, number3);
    if(thisTriangle.type === 'equilateral') {
      $("form").append("<h1> We Generated an 'Equilateral' triangle for you</h1>");
    } else if (thisTriangle.type === 'not a triangle') {
      $("form").append("<h1>This is not a triangle!!</h1>");
    }
    else if (thisTriangle.type === 'isosceles') {
      $("form").append("<h1>We generated an 'Isosceles' triangle for you</h1>");
    }
    else if (thisTriangle.type === 'scalene') {
      $("form").append("<h1>We generated a 'Scalene' triangle for you</h1>");
    }
  });
});
