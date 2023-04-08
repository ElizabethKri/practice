const min = 0;
const max = 100;
const attCount = 10;
function getUserName(){
    const userName = prompt("Привет! Как тебя зовут?");
    return userName;
}
const userName = getUserName();
console.log(userName);

const getRandomNumber = maxLimit => Math.round(Math.random() * maxLimit);

const randomNumber = getRandomNumber(max);
console.log(randomNumber);

const playGame = (minLimit, maxLimit, attsNumber, number, name) => {
    alert(`Здравствуйте, ${name}!
  Я загадал число больше, чем ${minLimit} и меньше, чем ${maxLimit}
  У тебя ${attsNumber} попыток отгадать его. Удачи тебе!`)
    for (let i = 0; i < attCount; i++){
        const answer = prompt(`Что думаешь?`);
        if(answer > number){
            alert(`Число, которое я загадал - меньше.
      У тебя осталось ${attsNumber - i} попыток`);
        }
        else if(answer < number){
            alert(`Число, которое я загадал - больше.
      У тебя осталось ${attsNumber - i} попыток`);
        }
        else {
            alert( `${name}, поздравляю! Ты выиграл!
      Всё отгадал с ${i}-ой попытки.`)
            return;
        }
    }
    alert('${name}, ты проиграл...Сегодня не твой день.')
}
playGame(min, max, attCount, randomNumber, userName)