let result=document.querySelector('#result');
let button=document.querySelectorAll("button");
let form1=document.querySelector('form');
// --------------------------------------------------------------
for (let i = 0; i < button.length; i++) {
    button[i].addEventListener("click",function(){
        switch (this.innerHTML) {
            case "AC":
                result.value ='';
                break;
            case "DE":
                result.value = result.value.toString().slice(0,-1);
                break;
            case ".":
                result.value +='.';
                break;
            case "/":
                result.value +='/';
                break;
            case "7":
                result.value +='7';
                break;
            case "8":
                result.value +='8';
                break;
            case "9":
                result.value +='9';
                break;
            case "*":
                result.value +='*';
                break;
            case "4":
                result.value +='4';
                break;
            case "5":
                result.value +='5';
                break;
            case "6":
                result.value +='6';
                break;
            case "-":
                result.value +='-';
                break;
            case "1":
                result.value +='1';
                break;
            case "2":
                result.value +='2';
                break;
            case "3":
                result.value +='3';
                break;
            case "+":
                result.value +='+';
                break;
            case "00":
                result.value +='00';
                break;
            case "0":
                result.value +='0';
                break;
            case "=":
                result.value =eval(result.value);
                break;
        
            default:
                break;
        }
    })
    
}