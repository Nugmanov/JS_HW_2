
//-----------------------------------task-1--------------------------------
//

var age = +prompt('Yoshingizni kiriting: ')
// alert('Sizning yoshingiz: ' + age)

if (0 < age && age <= 18) {
    alert('Sizning yoshingiz: ' + age + '! Siz hali yoshsiz. O\'qishingiz kerak!!!')
}else if (18 < age && age <= 50){
    alert('Sizning yoshingiz: ' + age + '! Siz ishlashingiz kerak!!!')
}else if (50 < age && age <= 59){
    alert('Sizning yoshingiz: ' + age + '! Siz yaqinda nafaqaga ketasiz!!!')
}else if (59 < age && age <= 150){
    alert('Sizning yoshingiz: ' + age + '! Siz nafaqaxorsiz!!!')
}else {
    alert('Nimadir noto\'gri ketdi!!!')
}

//-----------------------------------task-2--------------------------------
//

var time = +prompt('Soatni 0 dan 24 gacha son kiriting!!!')

if (time >= 21 && time <= 24){
    alert('Tungi soat: ' + (time - 12))
}
else if (time >= 0 && time <= 3){
    alert('Tungi soat: ' + time)
}
else if (time > 3 && time <= 12){
    alert('Ertalabgi soat: ' + time)
}
else if (time > 12 && time <= 18){
    alert('Kunduzgi soat: ' + (time - 12))
}
else if (time > 18 && time < 21){
    alert('Kechgi soat: ' + (time - 12))
}else {
    alert('Nimadir noto\'gri kiritdiz!!!')
}


// ----------------------------------------task-3--------------------

var num1 = +prompt('Birinchi sonni kiriting: ')
var num2 = +prompt('Ikkinchi sonni kiriting: ')
var num3 = +prompt('Uchinchi sonni kiriting: ')

if ((num1 > num2 && num1 < num3) || (num1 > num3 && num1 < num2)) {
    alert(num1)
}
else if ((num1 < num2 && num2 < num3) || (num3 < num2 && num2 < num1)) {
    alert(num2)
}
else if ((num1 < num3 && num3 < num2) || (num2 < num3 && num3 < num1)) {
    alert(num3)
}
else {
    if (isNaN(num1) && isNaN(num2) && isNaN(num3)) {
        alert('Siz umuman son kiritmadingiz!!!')
    }
    else if (isNaN(num1)) {
        alert('birinchisi son emas!!!')
    }
    else if (isNaN(num2)){
        alert('ikkinchisi son emas!!!')
    }
    else{
        alert('Uchinchisi son emas!!!')
    }
}










