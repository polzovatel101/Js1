/**
 * Created by Илья Яновой on 11.03.2016.
 */

function degree()
{
    'use strict';
    var num = prompt("Введите число: ");
    var degreeOfNum = prompt("Введите степень: ");

    var numFirst = num;
    for(var i = 0; i < degreeOfNum-1; i++){
        num *= numFirst;
    }

    if(degreeOfNum < 0) {
        console.log('result = ', 1/num);
    }
    else {
        console.log('result = ', num);
    }


}

function searchName()
{
    'use strict';
    var arrOfName = ['', '', '', '', ''];
    var userName;
    for(var i = 0; i < 5; i++){
        arrOfName[i] = prompt("Введите имя: ");
    }

    userName = prompt("Введите имя пользователя: ");
    for(i = 0; i < 5; i++)
    {
        if(arrOfName[i] == userName) {
            alert(userName + ', вы успешно вошли!');
            return 0;// успешно пройдена проверка безопасности
        }
    }
    alert("Error 404, name not found!");

}

degree();
//searchName();