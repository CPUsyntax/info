function checkDriverAge() {
    var age = prompt("What is your age?");

    if (Number(age) < 18) {
        alert("Too young");
    } else if (Number(age) > 18) {
        alert("Powering On.");
    } else if (Number(age) === 18) {
        alert("First Year");
    }
}

var checkDriverAge2 = function () {
    var age = prompt("What is your age?");

    if (Number(age) < 18) {
        alert("Too young");
    } else if (Number(age) > 18) {
        alert("Powering On.");
    } else if (Number(age) === 18) {
        alert("First Year");
    }
}

var checkDriver = function (age) {
//    var age = prompt("What is your age?");

    if (Number(age) < 18) {
        console.log("Too young");
    } else if (Number(age) > 18) {
        console.log("Powering On.");
    } else if (Number(age) === 18) {
        console.log("First Year");
    }
}