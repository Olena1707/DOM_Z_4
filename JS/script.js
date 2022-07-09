
let a = prompt("Введите одно из математических действий add, sub, mult, div");
let b = +prompt("введите первое число");
let c = +prompt("введите второе число");

let d = +(b + c);
let e = +(b - c);
let f = +(b * c);
let j = +(b / c);

if (a == add) {
    alert(`${b} + ${c} = ${d}`);
} else if (a == sub) {
    alert(`${b} - ${c} = ${e}`);
} else if (a == mult) {
    alert(`${b} * ${c} = ${f}`);
} else {
    alert(`${b} / ${c} = ${j}`);
}
   
