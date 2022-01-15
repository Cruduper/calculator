
function calculate(number1, number2, calcType)
{
  if (calcType === "add") {
    return number1 + number2;
  } 
  else if (calcType === "subtract") {
    return number1 - number2;
  }
  else if (calcType === "multiply") {
    return number1 * number2;
  }
  else if (calcType === "divide") {
    return number1 / number2;
  }
}
$(document).ready(function() {
  $("form#calculator").submit(function(event) {
    event.preventDefault();
    const number1 = parseInt($("#num1").val());
    const number2 = parseInt($("#num2").val());
    const calcType = $("input:radio[name=operator]:checked").val();
    const result = calculate(number1, number2, calcType);
    $("div#output").children("h2").text(result);
  });

});
