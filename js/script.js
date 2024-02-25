const dice = document.querySelector(".dice-roller");
dice.addEventListener("click", function() {
    const randomRotateNumber = Math.floor(Math.random() * 6) + 1;
    this.style.animation = 'rolling 5s';
    setTimeout (function() {
        switch(randomRotateNumber) {
            case 1:
                dice.style.transform = "rotateX(0deg) rotateY(0deg)";
                break;
            case 2:
                dice.style.transform = "rotateX(90deg) rotateY(0deg)";
                break;
            case 3:
                dice.style.transform = "rotateX(180deg) rotateY(0deg)";
                break;
            case 4:
                dice.style.transform = "rotateX(270deg) rotateY(0deg)";
                break;
            case 5:
                dice.style.transform = "rotateX(0deg) rotateY(90deg)";
                break;
            case 6:
                dice.style.transform = "rotateX(0deg) rotateY(-90deg)";
                break;
        }
        dice.style.animation = "none";
    }, 5050);

})