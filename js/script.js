/**
 * Created by Илья Яновой on 11.03.2016.
 */

function degree()
{
    var num = prompt("Введите число: ");
    var degreeOfNum = prompt("Введите степень: ");

    for (var i = 0; i < degreeOfNum - 1; i++) {
        num *= num;
    }

    console.log('result = ', num);
}

function searchName()
{
    var arrOfName = ['', '', '', '', ''];
    var userName;
    for(var i = 0; i < 5; i++) {
        //arrOfName.push( prompt("Введите имя: ") );
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
searchName();