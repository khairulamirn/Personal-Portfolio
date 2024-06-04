// social media 
const instagram = document.querySelector(".instagram");
const linkedIn = document.querySelector(".linkedin");
const gitHub = document.querySelector(".github");
const gmail = document.querySelector(".gmail");

// projects 
const button = {
    pacman: document.querySelector("#button1"),
    taskApp: document.querySelector("#button2"),
    quote: document.querySelector("#button3"),
    randomPassword: document.querySelector("#button4"),
};

// projects click event 
button.pacman.addEventListener ("click", function () {
    window.open("https://github.com/khairulamirn/W3-Day-9/tree/main/pacman");
});

button.taskApp.addEventListener ("click", function () {
    window.open("https://github.com/khairulamirn/JavaScript-Exercise/tree/main/Quote%20Generator");
});

button.quote.addEventListener ("click", function () {
    window.open("https://github.com/khairulamirn/JavaScript-Exercise/tree/main/Quote%20Generator");
});

button.randomPassword.addEventListener ("click", function () {
    window.open("https://github.com/khairulamirn/JavaScript-Exercise/tree/main/Random%20Password%20Generator");
});



// social media click event
instagram.addEventListener ("click", function () {
    window.open("https://www.instagram.com/khairulamirn/");
    console.log("Instagram open");
});

linkedIn.addEventListener ("click", function () {
    window.open("https://www.linkedin.com/in/khairulamirin-lamin-69443123b/");
    console.log("linkedIn open");
});

gitHub.addEventListener ("click", function () {
    window.open("https://github.com/khairulamirn");
    console.log("gitHub open");
});

gmail.addEventListener ("click", function () {
    window.open("mailto:khairulamirin.lamin@gmail.com");
    console.log("gmail open");
});
