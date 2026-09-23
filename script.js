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
        showHomeScreen();
    } else {
        alert("WRONG PASSCODE");
        clearCode();
    }
}

function showHomeScreen() {

    document.body.innerHTML = `
        <div class="home-screen">

            <div class="home-time">
                12:00 PM
            </div>

            <h1>STARGIRL</h1>

            <div class="apps">

                <button onclick="openMessages()">
                    💬
                    <span>MESSAGES</span>
                </button>

                <button onclick="openPinterest()">
                    📌
                    <span>PINTEREST</span>
                </button>

                <button onclick="openNotes()">
                    📝
                    <span>NOTES</span>
                </button>

                <button onclick="openMusic()">
                    🎵
                    <span>MUSIC</span>
                </button>

            </div>

        </div>
    `;
}
