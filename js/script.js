// coding with js challenge one
// day you lived in your life counter code.

function ageInDays() {
  var birthyear = prompt("please Enter Your Birthyear.");
  var daylived = (2022 - birthyear) * 365;
  var h3 = document.createElement("h3");
  var textOutput = document.createTextNode(
    "You are " + daylived + " days old."
  );
  h3.setAttribute("id", "daylives");
  h3.appendChild(textOutput);
  document.getElementById("result").appendChild(h3);
}

function reset() {
  document.getElementById("daylives").remove();
}

// image generator

function imageGenerator() {
  var image = document.createElement("img");
  var div = document.getElementById("generated_img");
  image.src = "./image/IMG_20201129_154818 (2).jpg";
  div.appendChild(image);
}

// rock paper scissor

function rpsGame(yourChoice) {
  var humanChoice, botChoice, result, message;
  humanChoice = yourChoice.id;
  botChoice = numberToChoice(randToRpsInt());
  result = decideWinner(humanChoice, botChoice);
  message = finalmessage(result);
  botImage = GetImagetodisp(botChoice);
  humanImage = GetImagetodisp(humanChoice);
  rpsFrontEnd(humanImage, botImage, message);
}

function randToRpsInt() {
  return Math.floor(Math.random() * 3);
}

function numberToChoice(number) {
  var alterns = ["rock", "paper", "scissor"];
  return alterns[number];
}

function decideWinner(humanChoice, botChoice) {
  var rpsdatabase = {
    'rock': { 'paper': 0, 'rock': 0.5, 'scissor': 1 },
    'paper': { 'scissor': 0, 'paper': 0.5, 'rock': 1 },
    'scissor': { 'rock': 0, 'scissor': 0.5, 'paper': 1 }
  };
  return rpsdatabase[humanChoice][botChoice];

}

function GetImagetodisp(whichone) {
  var image = {
    "rock": document.getElementById('rock').src,
    'scissor': document.getElementById('scissor').src,
    'paper': document.getElementById('paper').src
  }

  return image[whichone]

}

function finalmessage(result) {

  if (result == 0) {
    return { "message": 'You Lost', 'color': 'red' }
  }
  else if (result == 1) {
    return { "message": 'You Won', 'color': 'green' }
  }
  else {
    return { "message": 'You Tied', 'color': 'yellow' }
  }
}
function rpsFrontEnd(hImageSrc, bImageSrc, message) {

  document.getElementById('rock').remove();
  document.getElementById('paper').remove();
  document.getElementById('scissor').remove();

  var divContainer = document.getElementById('choice')
  var div1 = document.createElement('div')
  var div2 = document.createElement('div')
  var div3 = document.createElement('div')

  div1.innerHTML = "<img id ='Players-choice' src='" + hImageSrc + "'/>"
  div2.innerHTML = "<h2 id = 'Result-status' style ='color:" + message['color'] + " ;' >" + message["message"] + "</h2>"
  div3.innerHTML = "<img id ='bots-choice' src='" + bImageSrc + "'/>"

  divContainer.appendChild(div1)
  divContainer.appendChild(div2)
  divContainer.appendChild(div3)
}

function replayRps() {
  document.getElementById('Players-choice').remove()
  document.getElementById('Result-status').remove()
  document.getElementById('bots-choice').remove()
  var divContainer = document.getElementById('choice')
  divContainer.innerHTML = '<img id="rock" class="images" src="./image/rock paper scisor/PicsArt_04-10-06.36.06.png" alt="" onclick="rpsGame(this)"/> <img id="paper" class="images" src="./image/rock paper scisor/PicsArt_04-10-06.37.47.png" alt="" onclick="rpsGame(this)"/> <img id="scissor" class="images" src="./image/rock paper scisor/PicsArt_04-10-06.41.23.png" alt="" onclick="rpsGame(this)" />'
}


// start of challange 4

var allButtons = document.getElementsByTagName('button');

let orginalColor = [];

for (i = 0; i < allButtons.length; i++) {
  orginalColor.push(allButtons[i].classList[1])
}


function colorFlip(somecolor) {
  switch (somecolor.value) {
    case "red":
      button_red()
      break;
    case "green":
      button_green()
      break;
    case "random":
      button_random()
      break;
    case "reset":
      button_reset()
      break
  }
}

function button_red() {
  for (i = 0; i < allButtons.length; i++) {
    allButtons[i].classList.remove(allButtons[i].classList[1])
    allButtons[i].classList.add('red')
  }
}

function button_green() {
  for (i = 0; i < allButtons.length; i++) {
    allButtons[i].classList.remove(allButtons[i].classList[1])
    allButtons[i].classList.add('green')
  }
}


function button_random() {

  let colors = ['red', 'green', 'orange', 'blue']
  for (i = 0; i < allButtons.length; i++) {
    var maths = Math.floor(Math.random() * 4)
    allButtons[i].classList.remove(allButtons[i].classList[1])
    allButtons[i].classList.add(colors[maths])
  }
}

function button_reset() {
  for (i = 0; i < allButtons.length; i++) {
    allButtons[i].classList.remove(allButtons[i].classList[1])
    allButtons[i].classList.add(orginalColor[i])
  }
}

// animation
// var box = document.getElementById('box');
// var pos = 0;
// var pos2 = 0; 

// var t = setInterval(anime, 15);


// function anime(){

// if (pos>= 300){
//   clearInterval(t);
//   s = setInterval(down, 10);
// }

// else {
//   pos++;
//   box.style.left = pos + 'px';
// }
// }
// function down(){

//   if (pos2 >= 300){
//     clearInterval(s);
//   }
//   else {
//     pos2++;
//     box.style.top = pos2 + 'px';
//   }
//   }

// // end of animation.

// black jack
let blackjackgame = {
  'you': {
    'scorespan': '#player-count',
    'div': '.player-side',
    'div-img': '.player-imgs',
    'score': 0
  },


  'dealer': {
    'scorespan': '#dealer-count',
    'div': '.dealer-side',
    'div-img': '.dealer-imgs',
    'score': 0
  },
  'card': ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'],
  'cardsmap': { 'A': [1, 11], '2': 2, '3': 3, '4': 4, '5': 5, '6': 6, '7': 7, '8': 8, 
  '9': 9, '10': 10, 'J': 10, 'Q': 10, 'K': 10 },

  'wins':0,
  'losses':0,
  'draws':0,
  'isstand': false,
  'isturnsover': false,



}




const you = blackjackgame['you']
const dealer = blackjackgame['dealer']

const hitsound = new Audio('../sounds/swish.m4a')
const winsound = new Audio('../sounds/cash.mp3')
const losesound = new Audio('../sounds/aww.mp3')


document.querySelector('#hit').addEventListener('click', hit);
document.querySelector('#deal').addEventListener('click', blackjackdeal);
document.querySelector('#stand').addEventListener('click', dealerLogic);

function hit() {
  if (blackjackgame['isstand'] === false){
  let card = randomcard()
  showcard(you, card);
  updatescore(card, you)
  showscore(you)
  }
}

function randomcard() {
  let randomIndex = Math.floor(Math.random() * 13)
  return blackjackgame['card'][randomIndex]
}


function showcard(activePlayer, num) {
  if (activePlayer['score'] <= 21) {
    let cardImage = document.createElement('img');
    cardImage.src = `../image/blackjack/${num}.png`;
    document.querySelector(activePlayer['div-img']).appendChild(cardImage);
    hitsound.play();
  }
}

function blackjackdeal(a) {
  if (blackjackgame['isturnsover'] === true){
    let youImage = document.querySelector(".player-side").querySelectorAll('img');
    let dealerImage = document.querySelector(".dealer-side").querySelectorAll('img');
    for (i = 0; i < youImage.length; i++) {
      youImage[i].remove()

    }

    for (i = 0; i < dealerImage.length; i++) {
      dealerImage[i].remove()

    }

    you['score'] = 0;
    dealer['score'] = 0;
    document.querySelector('#player-count').textContent = "0"
    document.querySelector('#dealer-count').textContent = "0"

    document.querySelector('#player-count').style.color = 'white';
    document.querySelector('#dealer-count').style.color = 'white';



    document.querySelector('#letsplay').textContent = 'let\'s play';
    document.querySelector('#letsplay').style.color = 'white';
    blackjackgame['isstand'] = false
    blackjackgame['isturnsover'] = false
}
}

function sleep(ms){
  return new Promise(resolve => setTimeout(resolve, ms))
}

async function dealerLogic() {
  blackjackgame['isstand'] = true;

  while (dealer['score'] < 16 && blackjackgame['isstand'] === true){
    let card = randomcard()
    showcard(dealer, card);
    updatescore(card, dealer);
    showscore(dealer);
    await sleep(1000);
  }

 
    blackjackgame['isturnsover'] = true;
    let winner = computeWinner()
    showResult(winner)
 
}

function updatescore(card, activePlayer) {

  // if card is 1 and if adding 11 keeps me below 21 then add 11 otherwise add 1

  if (card === 'A') {
    if (activePlayer['score'] + blackjackgame['cardsmap'][card][1] <= 21) {
      activePlayer['score'] += blackjackgame['cardsmap'][card][1];
    }
    else {
      activePlayer['score'] += blackjackgame['cardsmap'][card][0]
    }
  }
  else {


    activePlayer['score'] += blackjackgame['cardsmap'][card]
  }
}

function showscore(activePlayer) {
  if (activePlayer['score'] > 21) {
    document.querySelector(activePlayer['scorespan']).textContent = 'BUST!';
    document.querySelector(activePlayer['scorespan']).style.color = 'red';
  }
  else {
    document.querySelector(activePlayer['scorespan']).textContent = activePlayer['score']
  }
}

function computeWinner() {
  let winner;

  if (you['score'] <= 21) {
    if (you['score'] > dealer['score']) {
      blackjackgame['wins']++;
      winner = you;
    } else if ( dealer['score'] > 21) {
      blackjackgame['wins']++;
      winner = you;
    } else if (you['score'] < dealer['score']) {
      blackjackgame['losses']++;
      winner = dealer;
    } else if (you['score'] === dealer['score']) {
      blackjackgame['draws']++;
    }
  }

  else if (you['score'] > 21 && dealer['score'] <= 21) {
    blackjackgame['losses']++;
    winner = dealer;

  }
  else if (you['score'] > 21 && dealer['score'] > 21) {
    blackjackgame['draws']++;
  }

  return winner;
}


function showResult(winner) {
  let message, messagecolor;
if (blackjackgame['isturnsover'] === true){
  if (winner === you) {
    message = 'You Won';
    messagecolor = 'green';
    winsound.play();
    document.querySelector('#wins').textContent = blackjackgame['wins']
   
  } else if (winner === dealer) {
    document.querySelector('#losses').textContent = blackjackgame['losses']
    message = 'You Lost';
    messagecolor = 'red';
    losesound.play();
  } else {
    document.querySelector('#draws').textContent = blackjackgame['draws']
    message = 'You DREW';
    messagecolor = 'white';
  }

  
  document.querySelector('#letsplay').textContent = message;
  document.querySelector('#letsplay').style.color = messagecolor;

}

}
// End black jack