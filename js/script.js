/**
 * Created by Илья Яновой on 11.03.2016.
 */

function degree()
{
    'use strict';
    var num = prompt("Введите число: ");
    var degreeOfNum = prompt("Введите степень: ");
    if(degreeOfNum == 0) {
        console.log('result = 1');
    }
    else {
        var numFirst = num;

        if (degreeOfNum < 0) {
            degreeOfNum *= -1;
            for (var i = 0; i < degreeOfNum - 1; i++) {
                num *= numFirst;
            }
            console.log('result = ', 1 / num);
        }
        else {
            for (i = 0; i < degreeOfNum - 1; i++) {
                num *= numFirst;
            }
            console.log('result = ', num);
        }
    }


}

function searchName()
{
    'use strict';
    var arrOfName = [],
        userName;
    for(var i = 0; i < 5; i++) {
        arrOfName[i] = prompt("Введите имя: ");
    }

    userName = prompt("Введите имя пользователя: ");
    for(i = 0; i < arrOfName.length; i++) {
        console.log(arrOfName);
        if(arrOfName[i] == userName) {
            alert(userName + ', вы успешно вошли!');
            return 0;// успешно пройдена проверка безопасности
        }
    }
    alert("Error 404, name not found!");
}

degree();
searchName();