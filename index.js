// 1.Креирај варијабла наречена carName и додели и ја вредноста Volvo на истата.

var carName = 'Volvo';
console.log('Car name is', carName)

// 2.Креирај варијабла наречена x и додели и ја вредноста 75 на истата.

var x = 75;
console.log('X is', x)

// 3.Со помош на document.write испринтај го збирот на варијаблите x = 5 и y = 23.

var x = 5;
var y = 23;

var sum = x + y;
document.write('Sum is', '', sum);
console.log('Sum is', '', sum); // ova si go staviv za mene koga si proveruvam mi e dobro da vidam i na ovaj nacin

// 4. Креирај варијабла z  и во истата сметете го збирот од x = 43 и y = 72, а потоа резултaтот испечатете го користејќи alert( ).

var x = 43;
var y = 72;

var z = x + y;
alert(x + y);
console.log('alert gives sum', z);


// 5.Со alert( ) ипечати го остатокот при делење кога 15 ќе биде поделен со 9.
const numA = 15;
const numB = 9;
const remainder = numA % numB; // 6 ostatok;
alert(numA % numB)
console.log('alert gives remainder', remainder);

//6. Доколку x = 10, a y = 5, во празното место напиши оператор што на x ќе му ја додели вредноста 15:
//   x  +  y;     
//     ___    addition
//        

//7. Доколку x = 10, a y = 5, во празното место напиши оператор што на x ќе му ја додели вредноста 50:
//   x  *  y;    
//     ___    multiplication


// 8. Декларирај променлива godini, а потоа користејќи if услов доколу godini е поголема од 18 да се испечати alert(“polnoleten si”), во спротивно alert(“ne si polnoleten”).

let godini = prompt('godini')

if (godini >= 18) {
    alert('polnoleten si')
}
else {
    alert('ne si polnoleten')
}


//9.Декларирај променлива x. Користејќи if услов доколку x е парен број испринтај на екран “X e paren broj”, во спротивно “X e neparen broj”.
// *Помош: Некој број е парен, доколку остатоток при делење со 2 на истиот ќе биде 0!

x = prompt('Broj')
if (x % 2 == 0) {
    console.log('X e paren broj')
} else {
    console.log('X ne e paren broj')
}


//10.	Декларирај променлива meseci, во која ќе сместиш вредност од 1 до 12. Употреби услов else if за на екран да го испечати месецот на кој му одговара тој број. Доколку бројот е поголем од 12 или помал од 1, на искран да се испечати “Ne postoi takov mesec”.
//*Пример: Доколку meseci = 3, на екран треба да се испечати Mart.

let mesec = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

mesec = prompt('Broj na mesec');

if (mesec == 1) {
    console.log('Januari');
} else if (mesec == 2) {
    console.log('Fevruari');
} else if (mesec == 3) {
    console.log('Mart');
} else if (mesec == 4) {
    console.log('April');
} else if (mesec == 5) {
    console.log('Maj');
} else if (mesec == 6) {
    console.log('Juni');
} else if (mesec == 7) {
    console.log('Juli');
} else if (mesec == 8) {
    console.log('Avgust');
} else if (mesec == 9) {
    console.log('Septemvri');
} else if (mesec == 10) {
    console.log('Oktomvri');
} else if (mesec == 11) {
    console.log('Noemvri');
} else if (mesec == 12) {
    console.log('Dekemvri');
} else {
    console.log('Nema takov mesec')
};


// 11.
let meseci = [1, 2, 3, 4,];
meseci = prompt("koj mesec");

switch (meseci) {
    case '1':
        console.log('Januari');
        break;
    case '2':
        console.log('Fevruari');
        break;
    case '3':
        console.log('Mart');
        break;
    case '4':
        console.log('April');
        break;
    case '5':
        console.log('Maj');
        break;
    case '6':
        console.log('Juni');
        break;
    case '7':
        console.log('Juli');
        break;
    case '8':
        console.log('Avgust');
        break;
    case '9':
        console.log('Septemvri');
        break;
    case '10':
        console.log('Oktomvri');
        break;
    case '11':
        console.log('Noemvri');
        break;
    case '12':
        console.log('Dekemvri');
        break;
    default:
        console.log('Nema takov mesec');
        break;
}
