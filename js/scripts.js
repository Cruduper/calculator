function fahrConvert(celcius) {
  return ( celcius * 9/5 ) + 32;
}

//const fahrenheit = fahrConvert(parseFloat(prompt("Enter a celcius temp: ")));

//alert(fahrenheit);




function fahrConvert(celcius) {
  return ( parseFloat(celcius) * 9/5 ) + 32;
}

const celcius = prompt("Enter a celcius temp: ");
alert(fahrConvert(celcius));