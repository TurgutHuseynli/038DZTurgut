//прошлые тесты
// 7)
//обьясни своими словами, что такое res и rej?
let count7 = new Promise(function(res, rej) {
    let a = 4;
    if (a > 3) {
        res('Число подходит');
    } else {
        rej('Число неподходит');
    }

    count7.then (
        function(value) {console.log(value);},
        function(error) {console.log(error);}
    );
});
//res - функция, которая "принимает" ответы для промисов.
//rej - функция, которая выдаёт ошибку в качестве ответа и "отклоняет" промис.

// 8)
//обьясни своими словами, что такое .then?
let count8 = new Promise(function(res, rej) {
    let a = 4;
    if (a > 3) {
        res('Число подходит');
    } else {
        rej('Число неподходит');
    }

    count8.then (
        function(value) {console.log(value);},
        function(error) {console.log(error);}
    );
});
//Это метод промисов, созданный для обработки промисов. Влкючает две функции: одна принимает нормальные ответы, а другая - ошибки.

// 9)
//обьясни своими словами, что такое .then?
let count9 = new Promise(function(res, rej) {
    let a = 4;
    if (a > 3) {
        res('Число подходит');
    } else {
        rej('Число неподходит');
    }

    count9.then (
        function(value) {console.log(value);},
        function(error) {console.log(error);}
    );
});
//см 8 вопрос

// 11)
//что делает async?
//async - ключевое слово для создания асинхронной функции, возвращающей промис.

// 12)
//что делает await?
//await - аналог .then(), но работает только внутри async функции. Заставляет JS остановить выполнение кода, пока промис, к которому он относится, не получит ответ.