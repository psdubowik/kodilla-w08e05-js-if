var a = 10;
var b = -10;
var value=(a * a) - (2 * a * b) + (b * b);
console.log(value);

if (value>0) {
    console.log("Wynik dodatni");
} else if (value==0) {
    console.log("Wynik równy zero");
} else if (value<0) {
    console.log("Wynik ujemny");
} else {
    console.log("Wprowadź wartości liczbowe");
}
