let game = document.querySelector(".game");
let newGame = document.querySelector(".new-game");
let hamle = document.querySelector("#hamle");
let time = document.querySelector("#time");
game.innerHTML = `<div class="choose-x4">
</div>`;
hamle.innerText = 0;

let array = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8];
shuffle(array);

let btns = document.querySelector(".choose-x4");

for (let i = 0; i < 16; i++) {
  btns.innerHTML += `<button id='btn' class="passive" data-index=${i}>${array[i]}</button>`;
}

let btn = document.querySelectorAll("#btn");

for (let i = 0; i < 16; i++) {
  btn[i].addEventListener("click", handleClick);
}

let sayac = 0;
let actiklarim = [];

function handleClick(e) {
  e.target.className = "active";

  let index = e.target;

  actiklarim.push(index);

  console.log(actiklarim);

  console.log(sayac);
  if (sayac === 1) {
    actiklarim[0].className = "active";
    actiklarim[1].className = "active";

    for (let i = 0; i < 16; i++) {
      btn[i].addEventListener("click", handleClick);

      if (actiklarim[0] != btn[i] && actiklarim[1] != btn[i])
        btn[i].disabled = true;
    }

    setTimeout(() => {
      if (actiklarim[0].innerText === actiklarim[1].innerText) {
        actiklarim[0].className = "active";
        actiklarim[1].className = "active";
        actiklarim[0].disabled = true;
        actiklarim[1].disabled = true;
        actiklarim[0].style.background = "#FDA214";
        actiklarim[1].style.background = "#FDA214";

        for (let i = 0; i < 16; i++) {
          btn[i].addEventListener("click", handleClick);
          if (actiklarim[0] != btn[i] && actiklarim[1] != btn[i])
            btn[i].disabled = false;
        }

        console.log("doru bildiniz");
      } else {
        console.log("yanlis bildiniz");
        actiklarim[0].className = "passive";
        actiklarim[1].className = "passive";

        for (let i = 0; i < 16; i++) {
          btn[i].addEventListener("click", handleClick);
          btn[i].disabled = false;
        }
      }
      sayac = 0;
      actiklarim = [];
    }, 500);
    let toplamHamle = Number(hamle.innerText);
    hamle.innerText = toplamHamle + 1;
  } else {
    sayac++;
  }
}

function shuffle(array) {
  let currentIndex = array.length;

  while (currentIndex != 0) {
    let randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }
}

function handleNewGame() {
  game.innerHTML = `<div class="choose-x4">
</div>`;
  hamle.innerText = 0;
  let array = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8];
  shuffle(array);

  let btns = document.querySelector(".choose-x4");

  for (let i = 0; i < 16; i++) {
    btns.innerHTML += `<button id='btn' class="passive" data-index=${i}>${array[i]}</button>`;
  }

  let btn = document.querySelectorAll("#btn");

  for (let i = 0; i < 16; i++) {
    btn[i].addEventListener("click", handleClick);
  }

  let sayac = 0;
  let actiklarim = [];

  function handleClick(e) {
    e.target.className = "active";

    let index = e.target;

    actiklarim.push(index);

    console.log(actiklarim);

    console.log(sayac);
    if (sayac === 1) {
      actiklarim[0].className = "active";
      actiklarim[1].className = "active";

      for (let i = 0; i < 16; i++) {
        btn[i].addEventListener("click", handleClick);

        if (actiklarim[0] != btn[i] && actiklarim[1] != btn[i])
          btn[i].disabled = true;
      }

      setTimeout(() => {
        if (actiklarim[0].innerText === actiklarim[1].innerText) {
          actiklarim[0].className = "active";
          actiklarim[1].className = "active";
          actiklarim[0].disabled = true;
          actiklarim[1].disabled = true;
          actiklarim[0].style.background = "#FDA214";
          actiklarim[1].style.background = "#FDA214";

          for (let i = 0; i < 16; i++) {
            btn[i].addEventListener("click", handleClick);
            if (actiklarim[0] != btn[i] && actiklarim[1] != btn[i])
              btn[i].disabled = false;
          }

          console.log("doru bildiniz");
        } else {
          console.log("yanlis bildiniz");
          actiklarim[0].className = "passive";
          actiklarim[1].className = "passive";

          for (let i = 0; i < 16; i++) {
            btn[i].addEventListener("click", handleClick);
            btn[i].disabled = false;
          }
        }
        sayac = 0;
        actiklarim = [];
      }, 500);
      let toplamHamle = Number(hamle.innerText);
      hamle.innerText = toplamHamle + 1;
    } else {
      sayac++;
    }
  }
 
  function shuffle(array) {
    let currentIndex = array.length;

    while (currentIndex != 0) {
      let randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }
  }
}

newGame.addEventListener("click", handleNewGame);
