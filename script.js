const surpriseBtn = document.getElementById("surpriseBtn");
const messageSection = document.getElementById("message");

const musicBtn = document.getElementById("musicBtn");
const musicText = document.getElementById("musicText");
const birthdayMusic = document.getElementById("birthdayMusic");

const giftBtn = document.getElementById("giftBtn");
const giftMessage = document.getElementById("giftMessage");


// =========================
// Surprise Button
// =========================

surpriseBtn.addEventListener("click", () => {

    messageSection.scrollIntoView({
        behavior: "smooth"
    });

    createHearts();

    birthdayMusic.play()
        .then(() => {
            musicBtn.innerHTML = "⏸️";
            musicText.textContent = "Music is playing";
        })
        .catch((error) => {
            console.log("Music could not start:", error);
        });

});


// =========================
// Floating Hearts
// =========================

function createHearts() {

    for (let i = 0; i < 15; i++) {

        const heart = document.createElement("span");

        heart.innerHTML = "♡";
        heart.classList.add("floating-heart");

        heart.style.left = Math.random() * 100 + "vw";

        heart.style.animationDuration =
            2 + Math.random() * 3 + "s";

        document.body.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 5000);
    }
}


// =========================
// Scroll Reveal
// =========================

const revealElements = document.querySelectorAll(
    ".photo-card, .message-card, .memories h2, .final"
);

const observer = new IntersectionObserver(
    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }

        });

    },
    {
        threshold: 0.15
    }
);

revealElements.forEach((element) => {
    observer.observe(element);
});


// =========================
// Gift Button
// =========================

giftBtn.addEventListener("click", () => {

    giftMessage.classList.toggle("show");

    if (giftMessage.classList.contains("show")) {
        giftBtn.innerHTML = "💝";
    } else {
        giftBtn.innerHTML = "🎁";
    }

});


// =========================
// Music Button
// =========================

musicBtn.addEventListener("click", () => {

    if (birthdayMusic.paused) {

        birthdayMusic.play()
            .then(() => {
                musicBtn.innerHTML = "⏸️";
                musicText.textContent = "Music is playing";
            })
            .catch((error) => {
                console.log("Music could not start:", error);
            });

    } else {

        birthdayMusic.pause();

        musicBtn.innerHTML = "🎵";
        musicText.textContent = "Play our song";
    }

});