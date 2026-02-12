const envelope = document.getElementById("envelope");
const letter = document.getElementById("letter");

const noBtn = document.querySelector(".no-btn");
const yesBtn = document.querySelector(".yes-btn");

const title = document.getElementById("letter-title");
const catImg = document.getElementById("letter-cat");
const buttons = document.getElementById("letter-buttons");
const finalText = document.getElementById("final-text");
const agreeBox = document.getElementById("agreeBox");
const revealBtn = document.getElementById("reveal-btn");
const loveLetter = document.getElementById("love-letter");
const proposal = document.getElementById("proposal");





// Open Envelope
envelope.addEventListener("click", () => {

    envelope.style.display = "none";
    letter.style.display = "flex";

    setTimeout(() => {
        document.querySelector(".letter-window").classList.add("open");
    }, 50);
});


// Reveal Proposal
revealBtn.addEventListener("click", () => {

    loveLetter.style.display = "none";
    proposal.style.display = "block";

});


// Move NO button
noBtn.addEventListener("mouseover", () => {

    const distance = 200;
    const angle = Math.random() * Math.PI * 2;

    const moveX = Math.cos(angle) * distance;
    const moveY = Math.sin(angle) * distance;

    noBtn.style.transition = "transform 0.3s ease";
    noBtn.style.transform = `translate(${moveX}px, ${moveY}px)`;
});


// YES Clicked
yesBtn.addEventListener("click", () => {

    title.textContent = "WE'RE SO GETTING A CAT 💖";

    catImg.src = "https://image2url.com/r2/default/gifs/1770877549967-9c80a18f-1237-416b-b332-31c44c5b7bfd.gif";

    document.querySelector(".letter-window").classList.add("final");

    buttons.style.display = "none";

    finalText.style.display = "block";
});
// Enable button only if agreed

agreeBox.addEventListener("change", () => {

    if(agreeBox.checked){
        revealBtn.disabled = false;
    }else{
        revealBtn.disabled = true;
    }

});
