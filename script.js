let value = "";
let number = 1;
let num1 = undefined;
let num2 = undefined;
function addZero() {
    if (value.length) {
        value+="0";
        actualNumber();
    }
    else {
        document.getElementById("info").innerHTML = "Vous ne pouvez pas mettre un zéro en tant que premier nombre";
    };
};
function addOne() {
    value+="1";
    actualNumber();
};
function addTwo() {
    value+="2";
    actualNumber();
}
function addThree() {
    value+="3";
    actualNumber();
}
function addFour() {
    value+="4";
    actualNumber();
}
function addFive(){
    value+="5";
    actualNumber();
}
function addSix() {
    value+="6";
    actualNumber();
}
function addSeven() {
    value+="7";
    actualNumber();
}
function addEight() {
    value+="8";
    actualNumber();
}
function addNine() {
    value+="9"
    actualNumber();
}

function actualNumber(){
    console.log(value);
    document.getElementById("number").innerHTML = `Nombre Actuel : ${value}`;
    document.getElementById("info").innerHTML = "";
}

function saveNumber() {
    switch(number) {
        case 1:
            num1 = parseInt(value);
            document.getElementById("num1").innerHTML = `Nombre Numéro 1 : ${num1}`;
            break;
        case 2:
            num2 = parseInt(value);
            document.getElementById("num2").innerHTML = `Nombre Numéro 2 : ${num2}`;
            document.getElementById("number").innerHTML = ""
            break;
    }
    value = ""
    number++
}