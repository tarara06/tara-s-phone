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


/* =========================
   BOOKS
========================= */

function openBooks() {

    document.getElementById("homeScreen").style.display = "none";

    document.body.insertAdjacentHTML("beforeend", `

        <div class="books-screen" id="booksScreen">

            <button class="books-back" onclick="closeBooks()">
                ← BACK
            </button>

            <div class="books-title">
                ✦ BOOKS ✦
            </div>

            <div class="books-grid">

                <button class="book-category english"
                    onclick="openEnglishBooks()">

                    <div class="book-icon">📗</div>
                    <div>ENGLISH BOOKS</div>

                </button>


                <button class="book-category urdu"
                    onclick="openUrduBooks()">

                    <div class="book-icon">📕</div>
                    <div>URDU BOOKS</div>

                </button>


                <button class="book-category wattpad"
                    onclick="openWattpadBooks()">

                    <div class="book-icon">📙</div>
                    <div>WATTPAD</div>

                </button>

            </div>

        </div>

    `);
}


/* ENGLISH BOOKS */

function openEnglishBooks() {

    showBookList(
        "ENGLISH BOOKS",
        [
            "God of War",
            "Royal Elite Series",
            "I Hope This Doesn't Find You",
            "The Sweetest Oblivion",
            "Nocticadia"
        ]
    );

}


/* URDU BOOKS */

function openUrduBooks() {

    showBookList(
        "URDU BOOKS",
        [
            "Peer-e-Kamil",
            "Aab-e-Hayat",
            "Carpe Diem",
            "Usri Yusra"
        ]
    );

}


/* WATTPAD */

function openWattpadBooks() {

    showBookList(
        "WATTPAD",
        [
            "Entangled Vows",
            "Whispers of Eternity"
        ]
    );

}


/* BOOK LIST */

function showBookList(title, books) {

    const booksScreen =
        document.getElementById("booksScreen");

    booksScreen.innerHTML = `

        <button class="books-back"
            onclick="showBookCategories()">

            ← BACK

        </button>

        <div class="books-title">
            ✦ ${title} ✦
        </div>

        <div class="book-list">

            ${books.map((book, index) => `

                <button class="individual-book">

                    <span class="book-number">
                        ${String(index + 1).padStart(2, "0")}
                    </span>

                    <span>
                        ${book}
                    </span>

                </button>

            `).join("")}

        </div>

    `;
}


/* BACK TO CATEGORIES */

function showBookCategories() {

    const booksScreen =
        document.getElementById("booksScreen");

    booksScreen.innerHTML = `

        <button class="books-back"
            onclick="closeBooks()">

            ← BACK

        </button>

        <div class="books-title">
            ✦ BOOKS ✦
        </div>

        <div class="books-grid">

            <button class="book-category english"
                onclick="openEnglishBooks()">

                <div class="book-icon">📗</div>
                <div>ENGLISH BOOKS</div>

            </button>


            <button class="book-category urdu"
                onclick="openUrduBooks()">

                <div class="book-icon">📕</div>
                <div>URDU BOOKS</div>

            </button>


            <button class="book-category wattpad"
                onclick="openWattpadBooks()">

                <div class="book-icon">📙</div>
                <div>WATTPAD</div>

            </button>

        </div>

    `;
}


/* CLOSE BOOKS */

function closeBooks() {

    const booksScreen =
        document.getElementById("booksScreen");

    if (booksScreen) {
        booksScreen.remove();
    }

    document.getElementById("homeScreen").style.display =
        "block";
}



/* MINI GAME */

function openGame() {

    /* =========================
   CATCH THE STARS GAME
========================= */

let gameScore = 0;
let gameTime = 30;
let gameTimer;
let starTimer;
let highScore = 0;


function loadHighScore() {

    highScore =
        Number(localStorage.getItem("stargirlHighScore")) || 0;

    document.getElementById("highScore").textContent =
        highScore;
}


function startGame() {

    gameScore = 0;
    gameTime = 30;

    document.getElementById("score").textContent = "0";
    document.getElementById("gameTime").textContent = "30";

    document.getElementById("startMessage").style.display = "none";

    clearInterval(gameTimer);
    clearInterval(starTimer);

    spawnStar();

    starTimer = setInterval(spawnStar, 900);

    gameTimer = setInterval(() => {

        gameTime--;

        document.getElementById("gameTime").textContent =
            gameTime;

        if (gameTime <= 0) {

            endGame();

        }

    }, 1000);
}


function spawnStar() {

    const gameArea =
        document.getElementById("gameArea");

    if (!gameArea) return;

    const oldStar =
        document.querySelector(".falling-star");

    if (oldStar) {
        oldStar.remove();
    }

    const star =
        document.createElement("button");

    star.className = "falling-star";

    star.textContent = "⭐";

    const maxX =
        gameArea.clientWidth - 60;

    const maxY =
        gameArea.clientHeight - 60;

    star.style.left =
        Math.random() * maxX + "px";

    star.style.top =
        Math.random() * maxY + "px";


    star.onclick = function () {

        gameScore++;

        document.getElementById("score").textContent =
            gameScore;

        star.remove();

        spawnStar();
    };


    gameArea.appendChild(star);
}


function endGame() {

    clearInterval(gameTimer);
    clearInterval(starTimer);

    const star =
        document.querySelector(".falling-star");

    if (star) {
        star.remove();
    }

    if (gameScore > highScore) {

        highScore = gameScore;

        localStorage.setItem(
            "stargirlHighScore",
            highScore
        );
    }

    document.getElementById("highScore").textContent =
        highScore;

    document.getElementById("gameArea").innerHTML = `

        <div class="game-over">

            <div class="big-star">⭐</div>

            <h2>TIME'S UP!</h2>

            <p>YOUR SCORE</p>

            <div class="final-score">
                ${gameScore}
            </div>

            <p>HIGH SCORE: ${highScore}</p>

            <button class="start-button"
                onclick="startGame()">
                PLAY AGAIN
            </button>

        </div>

    `;
}


function closeGame() {

    clearInterval(gameTimer);
    clearInterval(starTimer);

    const game =
        document.getElementById("gameScreen");

    if (game) {
        game.remove();
    }

    document.getElementById("homeScreen").style.display =
        "block";
}
}


/* JOURNAL */

function openJournal() {

    alert("📔 JOURNAL\n\nYour writable journal is coming soon!");
}


/* COFFEE */

function openCoffee() {

    alert("☕ COFFEE MACHINE\n\nYour coffee-making game is coming soon!");
}
