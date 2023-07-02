
let izbr = document.querySelector('.izbr');
let izbrnumber = document.querySelector('.izbr-number');
//let counter = 0;



let heart = document.querySelector('.heart');
let likesNumber = document.querySelector('.likes-number');

heart.onclick = function () {
  if (heart.classList.contains('added')) {
    likesNumber.textContent="♡Добавить в избранное;)";
    //counter++;
    izbrnumber.textContent--;
  } else {
    likesNumber.textContent="♥ В избранном;)";
    izbrnumber.textContent++;
  }
  
  heart.classList.toggle('added');
};


let heart2 = document.querySelector('.heart2');
let likesNumber2 = document.querySelector('.likes-number2');

heart2.onclick = function () {
  if (heart2.classList.contains('added')) {
    likesNumber2.textContent="♡Добавить в избранное;)";
    izbrnumber.textContent--;
  } else {
    likesNumber2.textContent="♥ В избранном;)";
    izbrnumber.textContent++;
  }
  
  heart2.classList.toggle('added');
};



let heart3 = document.querySelector('.heart3');
let likesNumber3 = document.querySelector('.likes-number3');

heart3.onclick = function () {
  if (heart3.classList.contains('added')) {
    likesNumber3.textContent="♡Добавить в избранное;)";
    izbrnumber.textContent--;
  } else {
    likesNumber3.textContent="♥ В избранном;)";
    izbrnumber.textContent++;
  }
  
  heart3.classList.toggle('added');
};



let heart4 = document.querySelector('.heart4');
let likesNumber4 = document.querySelector('.likes-number4');

heart4.onclick = function () {
  if (heart4.classList.contains('added')) {
    likesNumber4.textContent="♡Добавить в избранное;)";
    izbrnumber.textContent--;
  } else {
    likesNumber4.textContent="♥ В избранном;)";
    izbrnumber.textContent++;
  }
  
  heart4.classList.toggle('added');
};



let heart5 = document.querySelector('.heart5');
let likesNumber5 = document.querySelector('.likes-number5');

heart5.onclick = function () {
  if (heart5.classList.contains('added')) {
    likesNumber5.textContent="♡Добавить в избранное;)";
    izbrnumber.textContent--;
  } else {
    likesNumber5.textContent="♥ В избранном;)";
    izbrnumber.textContent++;
  }
  
  heart5.classList.toggle('added');
};



let heart6 = document.querySelector('.heart6');
let likesNumber6 = document.querySelector('.likes-number6');

heart6.onclick = function () {
  if (heart6.classList.contains('added')) {
    likesNumber6.textContent="♡Добавить в избранное;)";
    izbrnumber.textContent--;
  } else {
    likesNumber6.textContent="♥ В избранном;)";
    izbrnumber.textContent++;
  }
  
  heart6.classList.toggle('added');
};



