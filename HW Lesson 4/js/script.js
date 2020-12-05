// Задача 1.
//
function Task1script(){
    var max = 999;
    var digit = {
      number: Math.round(Math.random() * max), /*запрос у пользователя +prompt('Введите число от 0 до 999'),*/
      units: 0,
      tens: 0,
      hundreds: 0,
    };
    if (digit.number <= 9){
      digit.units = digit.number;
    } else if (digit.number <= 999){
      digit.units = Math.floor(digit.number % 10);
      digit.tens = Math.floor(digit.number / 10 % 10);
      digit.hundreds = Math.floor(digit.number / 100 % 10);
    }else {
        digit.number = 0;
        console.log('Вы ввели число за диапазоном 0 - 999');
    }
    console.log(digit);
}


// Задача 2.
//
function Task2script(){
    var number = [];
    var attempts = 0;

    generateNumber();
    guessNumber();

    function generateNumber(){
      number = [];
      var min = 0;
      var max = 9;

      for(var i = 0; i < 4; i++){
        var part = Math.round(min + Math.random() * (max - min));

        if(i == 0){
          number[i] = part;
        }
        else{
          while(number.indexOf(part) != -1){
            part = Math.round(min + Math.random() * (max - min));
          }
          number[i] = part;
        }
      }
    }

    function guessNumber(){
      var result = prompt("Введите число (-1 - закончить игру)", 0);
      var gameIsRunning = true;
   /*   создал массив для записи резельтата хода*/
      var stroke = [];
      stroke.push(result);
   /*   создал массив для записи резельтата хода*/
      while(gameIsRunning){
        // выход из игры
        if(parseInt(result) == -1){
          gameIsRunning = false;
        }
        else if(parseInt(result) == 0 || isNaN(parseInt(result))){
          alert("Вы не ввели число");
          result = prompt("Введите число (-1 - закончить игру)", 0);
        }
        else{
          var answer = checkNumber(result);

          if(answer[0]){
/*            Число угадано, поменял alert на prompt для ввода номера хода*/
            var history = prompt ("Поздравляем! Вы угадали число. Кол-во попыток: " + attempts +
                     ". Введите номер хода чтобы узнать его результат (0 вывести всю историю)");
/*            Выводим результат хода*/
            if (history > 0){
              history -= 1;
              alert("Результат хода: " + stroke[history]);
              }
/*              Если выбран ноль выводим всю историю*/
              else {
                a = [];
                b = 0;
                for(i = 1;i < stroke.length;i++){
                  b++;
                  c = "Ход " + i + " Результат: " + stroke[b]+'\r\n';
                  a.push(c);
                }
                alert(a.join(''));
            }
            // останавливаем игру
            gameIsRunning = false;
          }
          else{
            // следующий ход
/*            Если число не угадано продолжаем записывать результаты*/
            result = prompt("Быки: " + answer[1] + " Коровы: " + answer[2] + " Введите число (-1 - закончить игру)", 0);
            stroke.push(result);
            console.log(stroke);
          }
        }
      }
    }

    function checkNumber(myresult){
      attempts++;
      var answer = [false, 0, 0];
      console.log(myresult);
      console.log(number);
      var ranks = myresult.split("");

      for(var i = 0; i < ranks.length; i++){
        if(parseInt(ranks[i]) == number[i]){
          answer[1]++;
        }
        else if(number.indexOf(parseInt(ranks[i])) != -1){
          answer[2]++;
        }
      }

      if(answer[1] == 4){
        answer[0] = true;
      }

      return answer;
    }
}

// Задача 3.
//
function Task3script(){
   
    alert("Добро пожаловать в игру «Кто хочет стать миллионером?»");

    var questionList = [
      'Что выносит в зал распорядитель в телепередаче «Что? Где? Когда?»?',
      'Что обычно лежит на столе у офисных работников?',
      'Что у болтливого человека без костей, если верить поговорке?',
      'Чему или кому в песне из советского фильма не призывают порадоваться мушкетеры?',
      'Что помогает дачнику вспахать огород?',
      'Что в русском языке пишется после приставок, оканчивающихся на согласную перед буквами Е, Ё, Ю, Я?',
      'С помощью какого оружия библейский Давид поразил Голиафа?',
      'Какой газ не является инертным?',
      'Кто, как считается, подсказал Николаю Васильевичу Гоголю идею «Ревизора»?',
      'Музей какого бытового устройства находится в городе Переславль-Залесский?'];

    var gain = [1000, 3000, 5000, 'первую несгораемую сумму 10000', 20000, 60000, 80000,
                'вторую несгораемую сумму 100000', 500000, 1000000];

    var answers = [['A: черный ящик B: черную метку C: вердикт  D: мусор '],['A: ступор B: штопор C: стопор D: степлер '],['A: ухо B: язык C: нос D: руки'],
                  ['A: кубку B: королеве C: клинку D: красавице'],['A: сатуратор B: элеватор C: ирригатор D: культиватор'],
                  ['A: мягкий знак B: твердый знак C: удвоенная согласная D: дефис'],['A: лук B: копье C: топор D: праща'],
                  ['A: криптон B: радон C: пропан D: гелий'],['A: Александр Сергеевич Пушкин B: Владимир Иванович Даль C: Иван Андреевич Крылов D: Александр Сергеевич Грибоедов'],
                  ['A: мясорубка B: прялка C: утюг D: маслобойка']];
                  
    var correct = ['A','D','B','B','D','B','D','C','A','c'];

    var a = 0;
    var b = 1;
    for(var i = 0; i < 10; i++) {
    var answer = prompt('Вопрос ' + b + ': ' + questionList[i]+'\r\n'+ 'Варианты ответа: \r\n' + answers[0] + '\r\n' + 'Ваш ответ?');
    if(answer.toUpperCase() == correct[0]) {
    alert('Поздравляю вы выиграли ' + gain[a] + ' рублей');
    a++;
    b++;
    answers.shift(0);
    correct.shift(0);
    }else if (gain[a] >= 100000){
    alert('Ответ неверный. Вы выиграли ' + gain[7] + ' рублей'); 
    break;
    }else if (gain[a] >= 10000){
    alert('Ответ неверный. Вы выиграли ' + gain[3] + ' рублей'); 
    break;
    }else{
    alert('Ответ неверный');
    break;
    }
    }
}