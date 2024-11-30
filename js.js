let clickCount = 0; 

document.getElementById('continue-btn').addEventListener('click', function() {
    let textElement = document.getElementById('text');
    let continueBtn = document.getElementById('continue-btn');
    let choiceButtons = document.getElementById('choice-buttons');


    clickCount++;

    if (clickCount === 1) {
        textElement.innerHTML = "<span class='smaller-text'>I understand naman na you need some space and peace. I know i did something wrong that make you upset, but i really value our connection even na hindi ganun katagal, but before christmas i really want to make closure messages for you sana hehe.</span>";
    } else if (clickCount === 2) {
        textElement.innerHTML = "<span class='smaller-text'>I still have fellings for you, and how?, why?...dunno, kasi i just found myself slowly wanting to spend time with you and i cherish it all, hoping na bumalik na sa dati haha...but i know you will still reject me, and i understand naman kasi maybe want mo muna makagraduate right?....  </span>";
    } else if (clickCount === 3) {
        textElement.innerHTML = "<span class='smaller-text'>But you know i'm in no rush naman eh, kaya i think i will stay muna for a while. Why?, kasi i'm learning you slowy and there is more for me to discover the longer i stay with you....your support mean wolrd to me, i know i don't have much to offer for now but i hope you know na i'll be always here for you...I wil be here even na nasa lowest part na tayo ng life...Uhmmm, so    </span>";

    } else if (clickCount === 4) {
        textElement.innerText = "I may not be much but can i be your partner in crime sa iyong mga IMs again???";
        continueBtn.classList.add('hidden');
        choiceButtons.classList.remove('hidden');
    }
});

document.getElementById('yes-btn').addEventListener('click', function() {
    document.getElementById('text').innerText = "thank youu boss lyyy";
    document.getElementById('choice-buttons').classList.add('hidden');

    showConfetti();
    document.getElementById('left-gif').classList.remove('hidden');    
    document.getElementById('right-gif').classList.remove('hidden');    


    let randomImages = document.querySelectorAll('.random-image');
    randomImages.forEach(image => {
        image.remove();
    });
});

document.getElementById('no-btn').addEventListener('click', function() {
    let noBtn = document.getElementById('no-btn');
    let yesBtn = document.getElementById('yes-btn');

    noBtn.style.transform = `scale(${parseFloat(noBtn.style.transform.replace('scale(', '').replace(')', '')) - 0.1 || 0.9})`;
    yesBtn.style.transform = `scale(${parseFloat(yesBtn.style.transform.replace('scale(', '').replace(')', '')) + 0.1 || 1.1})`;

    let scaleValue = parseFloat(noBtn.style.transform.match(/[\d.]+/)[0]);
    if (scaleValue <= 0.2) {
        noBtn.classList.add('hidden');
        yesBtn.style.transform = "scale(1.5)";
    } else {
        createImageAroundPage();
    }
});

function showConfetti() {
    const confettiContainer = document.getElementById('confetti');
    confettiContainer.classList.remove('hidden');

    for (let i = 0; i < 100; i++) {
        let confettiPiece = document.createElement('div');
        confettiPiece.classList.add('confetti-piece');
        confettiPiece.style.left = Math.random() * 100 + 'vw';
        confettiPiece.style.animationDelay = Math.random() * 5 + 's';
        confettiContainer.appendChild(confettiPiece);
    }
}

function createImageAroundPage() {
    let images = [
        'sad-1.jpg', 
        'sad-2.jpg', 
        'sad-3.jpg',  
    ];
    
    let img = document.createElement('img');
    img.src = images[Math.floor(Math.random() * images.length)];
    img.classList.add('random-image'); 
    img.style.position = 'absolute';
    img.style.top = Math.random() * 100 + 'vh';
    img.style.left = Math.random() * 100 + 'vw';
    img.style.width = Math.random() * (230 - 150) + 150 + 'px'; 
    img.style.height = 'auto'; 
    document.body.appendChild(img);
}
