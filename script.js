// f1(parametr){
//     console.log(parametr);
// }

var matrix = [
[1,2,3],
[4,5,6],
[7,8,9],
];

function f1() {
    // document.getElementById()
    console.log("privet Dimulik");
}

// console.log(matrix(0, 1));



function f2(a) {
    if (true) {
        f1();
    }
        if (false) {
        f3();   
        }
}

function f3() {
    console.log("сработала функция 3");
}


var salary = 100;
var oldSalary = salary;
// обе переменные указывают на одно и то же значение
console.log(salary);
console.log(oldSalary);
salary = 200000;
// oldSalary = salary;
// значение salary стало 200000, а oldSalary осталось 100!
console.log(salary);
console.log(oldSalary);