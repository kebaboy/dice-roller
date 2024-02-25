const dice = document.querySelector(".dice-roller");
dice.addEventListener("click", function() {
    // const randomRotateNumber = Math.floor(Math.random() * 4) + 1;
    // switch (randomRotateNumber) {
    //     case (1):
            
    // }
    //! фикс поворота вокруг оси
    const randomDirectionX = Math.floor(Math.random() * 3) + 1; // -1, 0 или 1
    const randomDirectionY = Math.floor(Math.random() * 3) + 1 ; // -1, 0 или 1

    // Вычисляем новые углы поворота относительно текущего положения
    const newRotation = {
        x: Math.floor(randomDirectionX * 90),
        y: Math.floor(randomDirectionY * 90),
    };

    // Применяем новые углы поворота к кубу
    this.style.transform = `rotateX(${newRotation.x}deg) rotateY(${newRotation.y}deg)`;
})