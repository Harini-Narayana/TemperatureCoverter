const textbox=document.getElementById("textbox");
const toFahrenheit=document.getElementById("toFahrenheit");
const toCelsius=document.getElementById("toCelsius");
const result=document.getElementById("result");
let temp;

function Convert(){
    temp=Number(textbox.value);
    if(toFahrenheit.checked){
        result.textContent=(temp*(9/5)+32).toFixed(3)+" °F";
    }
    else if(toCelsius.checked){
        result.textContent=(5/9*(temp-32)).toFixed(3)+" °C";
    }
    else{
        result.textContent="Select a Unit to Convert";
    }
}