/* =========================
   PASSCODE
========================= */

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


/* =========================
   SHOW HOME SCREEN
========================= */

function showHomeScreen() {

    document.getElementById("lockScreen").style.display = "none";

    document.getElementById("homeScreen").style.display = "block";

    updateHomeTime();

}


/* =========================
   CLOCK
========================= */

function updateHomeTime() {

    const now = new Date();

    let hours = now.getHours();

    const minutes = String(now.getMinutes()).padStart(2, "0");

    const ampm = hours >= 12 ? "PM" : "AM";

    hours = hours % 12;

    if (hours === 0) {
        hours = 12;
    }

    const timeText = `${hours}:${minutes} ${ampm}`;

    document.getElementById("homeTime").textContent = timeText;

    document.getElementById("lockTime").textContent = timeText;
}


setInterval(updateHomeTime, 1000);

updateHomeTime();


/* =========================
   DAILY WISDOM
========================= */

const wisdoms = [

    "A little reminder: you are doing better than you think.",

    "Take things one little step at a time.",

    "Your story is still being written.",

    "Rest is allowed. You don't have to do everything today.",

    "Make today a little softer for yourself.",

    "Small progress is still progress.",

    "Something lovely might be waiting around the corner."

];


function changeWisdom() {

    const randomIndex =
        Math.floor(Math.random() * wisdoms.length);

    document.getElementById("dailyWisdom").textContent =
        `"${wisdoms[randomIndex]}"`;
}


changeWisdom();


/* =========================
   APP BUTTONS
========================= */


/* MESSAGES */

function openMessages() {

    alert("💌 MESSAGES\n\nSuhaha: where tf are you.\n\nH.Pookies: 4+ messages\n\nSami: Guess what 😛\n\nSeph: I'm done with this.");
}


/* PINTEREST */

function openPinterest() {

    alert("📌 PINTEREST\n\nStargirl\nBook aesthetic\nOutfits\nPlaces");
}


/* MUSIC */

function openMusic() {

    window.open(
        "https://open.spotify.com/playlist/4u1hES959RIj1zK1UxdCVc",
        "_blank"
    );
}


/* NOTES */

function openNotes() {

    alert("📝 NOTES\n\nBook reviews\nTBR\nEdit ideas");
}


/* BOOKS */

function openBooks() {

    alert("📚 BOOKS\n\nYour bookshelf is coming soon!");
}


/* MINI GAME */

function openGame() {

    alert("🎮 MINI GAME\n\nYour little game is coming soon!");
}


/* JOURNAL */

function openJournal() {

    alert("📔 JOURNAL\n\nYour writable journal is coming soon!");
}


/* COFFEE */

function openCoffee() {

    alert("☕ COFFEE MACHINE\n\nYour coffee-making game is coming soon!");
}
