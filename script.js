// 🎁 Surprise Button
const giftBtn = document.getElementById("giftBtn");
const surprise = document.getElementById("surprise");

giftBtn.addEventListener("click", () => {
    surprise.classList.remove("hidden");
    giftBtn.innerHTML = "💖 Happy Birthday Micku 💖";
    createConfetti();
});

// 🎈 Balloons
setInterval(() => {
    let b = document.createElement("div");
    b.className = "balloon";
    b.innerHTML = "🎈";
    b.style.left = Math.random() * 100 + "vw";
    b.style.animationDuration = (5 + Math.random() * 4) + "s";
    document.body.appendChild(b);

    setTimeout(() => b.remove(), 9000);
}, 700);

// ❤️ Hearts
setInterval(() => {
    let h = document.createElement("div");
    h.className = "heart";
    h.innerHTML = "❤️";
    h.style.left = Math.random() * 100 + "vw";
    h.style.animationDuration = (4 + Math.random() * 4) + "s";
    document.body.appendChild(h);

    setTimeout(() => h.remove(), 8000);
}, 500);

// 🎉 Confetti
function createConfetti(){
    for(let i=0;i<80;i++){
        let c=document.createElement("div");
        c.innerHTML=["🎉","✨","🎊","💖"][Math.floor(Math.random()*4)];
        c.style.position="fixed";
        c.style.left=Math.random()*100+"vw";
        c.style.top="-20px";
        c.style.fontSize=(15+Math.random()*20)+"px";
        c.style.transition="all 4s linear";
        document.body.appendChild(c);

        setTimeout(()=>{
            c.style.top="110vh";
            c.style.transform="rotate(720deg)";
        },10);

        setTimeout(()=>c.remove(),4000);
    }
}

// 🎆 Fireworks every 6 seconds
setInterval(createConfetti,6000);