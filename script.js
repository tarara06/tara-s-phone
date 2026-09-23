let enteredCode = "";

const correctCode = "0803";

function press(number) {
    if (enteredCode.length >= 4) {
        return;
    }

    enteredCode += number;

    updateDots();
}

function updateDots() {
    const dots = document.querySelectorAll(".dots span");

    dots.forEach((dot, index) => {
        if (index < enteredCode.length) {
            dot.style.background = "#000000";
        } else {
            dot.style.background = "#ffffff";
        }
    });
}

function clearCode() {
    enteredCode = "";
    updateDots();
}

function checkCode() {

    if (enteredCode === correctCode) {

        alert("ACCESS GRANTED!");

        // We'll replace this with your actual phone screen later.

    } else {

        alert("WRONG PASSCODE");

        clearCode();
    }
}
