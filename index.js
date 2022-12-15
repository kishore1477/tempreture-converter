
 



function F_to_C(Fahrenheit) {
    Fahrenheit = parseFloat(Fahrenheit);
    document.getElementById("FtoC").innerHTML=(Fahrenheit-32)/1.8;
  }
function C_to_F(Celsius) {
    Celsius = parseFloat(Celsius);
    document.getElementById("CtoF").innerHTML=(Celsius * 9.0/5.0) + 32.0;
  }

 
function C_to_K(Celsius) {
    Celsius = parseFloat(Celsius);
    document.getElementById("CtoK").innerHTML=Celsius + 273.15
  }
function K_to_C(Kelvin) {
    valNum = parseFloat(Kelvin);
    document.getElementById("KtoC").innerHTML=Kelvin - 273.15
  }
  
function K_to_F(Kelvin) {
    valNum = parseFloat(Kelvin);
    document.getElementById("KtoF").innerHTML= ((Kelvin - 273.15) * 1.8 )+ 32
  }
function F_to_K(Fahrenheit) {
    Fahrenheit = parseFloat(Fahrenheit);
    document.getElementById("FtoK").innerHTML=  ((Fahrenheit - 32) * 5 / 9) + 273.15
  }