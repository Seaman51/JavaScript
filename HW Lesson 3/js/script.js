// Задача 1.
//
function demoTask1script(){
    let i = 0;
    while (i < 100) {
        if (isPrimeNumber(i)) {
            console.log(i);
        }
        i++;
    }

    function isPrimeNumber(number) {
        for (let i = 2; i < number; i++) {
            if (number % i == 0) {
                return false;
            }
        }
        if (number > 1) {
            return true;
        }
        return false;
    }
}


// Задача 2, 3a.
//
var price = [1000, 300, 400, 200];
var item = ['Телефон', 'Зарядка', 'Наушники', 'Чехол'];

function goodsList() {
    console.log(item[0] + ' стоит ' + price[0]);
    console.log(item[1] + ' стоит ' + price[1]);
    console.log(item[2] + ' стоит ' + price[2]);
    console.log(item[3] + ' стоит ' + price[3]);
}

//Задача 3b. 
//
function totalCost() {
    let summ = 0;
    for (let x = 0; x < price.length; x++) {
        summ += price[x];
    }
    console.log('Стоимость всех товаров ' + summ);

}

// Задача 4.*
//
function demoTask3script(){
    for (let i=0; i<10; alert(i++)){};
}


// Задача 5.*
//
function demoTask4script(){
    let string=''

    for (let i = 1; i < 21; i++) {
        string = string + 'x'
        console.log(string);
    }
}
