let a = 0, b = 2;
if (a>=0 && b>=0) {
    alert (a-b);
}else if (a<0 && b<0) {
    alert (a*b);
}else if (a<0 && b>=0 || a>=0 && b<0) {
    alert(a+b);
}


a=Number(prompt("Введите число в диапазоне от 0 до 15: "));
switch(a){
        case 0:
            alert("a="+a);
            a=++a;
        case 1:
            alert("a="+a);
            a=++a;
        case 2:
            alert("a="+a);
            a=++a;
        case 3:
            alert("a="+a);
            a=++a;
        case 4:
            alert("a="+a);
            a=++a;
        case 5:
            alert("a="+a);
            a=++a;
        case 6:
            alert("a="+a);
            a=++a;
        case 7:
            alert("a="+a);
            a=++a;
        case 8:
            alert("a="+a);
            a=++a;
        case 9:
            alert("a="+a);
            a=++a;
        case 10:
            alert("a="+a);
            a=++a;
        case 11:
            alert("a="+a);
            a=++a;
        case 12:
            alert("a="+a);
            a=++a;
        case 13:
            alert("a="+a);
            a=++a;
        case 14:
            alert("a="+a);
            a=++a;
        case 15:
            alert("15!");
            break;
        default:
            alert("Неверное зачение a");
}


let x = 10, y = 5;
function sum(x, y)
{
return(x + y);
} 
summa = sum (x, y);
alert ("Сумма " + x + " и " + y + " =  " + summa);

function rasn(x, y)
{
return(x - y);
} 
rasnost = rasn (x, y);
alert ("Разность " + x + " и " + y + " =  " + rasnost);

function proisv(x, y)
{
return(x * y);
} 
proisvedenie = proisv (x, y);
alert ("Произведение " + x + " и " + y + " =  " + proisvedenie);

function delen(x, y)

{
return(x / y);
} 
delenie = delen (x, y);
alert ("Деление " + x + " на " + y + " =  " + delenie);



function mathOperation(arg1, arg2, operation) {
    switch(operation) {
        case "+":
            alert (arg1+arg2);
            break;
        case "-":
            alert (arg1-arg2);
            break;
        case "*":
            alert (arg1*arg2);
            break;
        case "/":
            alert (arg1/arg2);
            break;
        default:
            alert("Некорректно введенная опция!");
    }
}
mathOperation(2,3,"/")


alert (null === 0); //false
alert (null == 0); //false


function power(val, pow) {
    if (pow != 1) {
        return val * power (val, pow-1);
    }else{
        return val;
    }
}
alert("2 в 4 степени = " + power(2,4));
