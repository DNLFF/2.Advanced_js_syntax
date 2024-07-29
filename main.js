"use strict"

function calculateQuadraticEquation() {
    let a = Number.parseInt(document.getElementById("a").value);
    let b = Number.parseInt(document.getElementById("b").value);
    let c = Number.parseInt(document.getElementById("c").value);
    if(!a||!b||!c){
        alert("Введите все коэффиценты");
    }
    let resTask1 = [];
    resTask1.push(getResult(a,b,c));
    document.getElementById("result").innerText = resTask1;
}

function calculateAverageRating() {
    let marksInput = document.getElementById("marks").value;
    let resTask2 =[];
    resTask2.push(getAverageMark(marksInput));
    document.getElementById("averageMark").innerText = resTask2;
}

function calculateDrinkTask(){
    let username = document.getElementById("personName").value;
    let dateOfBirthday = document.getElementById("dateOfBirthday").value;
    let resTask3 = askDrink(username, dateOfBirthday);
    document.getElementById("drink").innerText = resTask3;
}