let score = JSON.parse(localStorage.getItem('score')) || {
  wins: 0,
  losses: 0,
  Ties: 0
};



  updateScoreElement();

  let isAutoPlaying = false;

  let intervalid;

  function autoPlay() {
    if(!isAutoPlaying) {
      intervalid = setInterval(() => {
        const playerMove = pickcomputerMove();
        playGame(playerMove);
    
        }, 1000);
        isAutoPlaying = true
    }
    else {
      clearInterval(intervalid);
      isAutoPlaying = false;
    }
  }

  document.querySelector('.js-button-dog')
  .addEventListener('click', () => {
    playGame('dog');
  });
  document.querySelector('.js-button-cat')
  .addEventListener('click', () => {
    playGame('cat');
  });
  document.querySelector('.js-button-mouse')
  .addEventListener('click', () => {
    playGame('mouse');
  });


  document.body.addEventListener('keydown' , (event) => {
  if (event.key === 'd') {
    playGame('dog')
  }
  else if(event.key === 'c') {
    playGame('cat')
  }
  else if(event.key === 'm') {
    playGame('mouse')

  }
})






  function playGame(playerMove) {
  const compMove = pickcomputerMove();


  let result = '';

if (playerMove === 'mouse') {
  if (compMove === 'dog') {
  result = 'You lose';
  } else if(compMove === 'cat') {
  result = 'You win';
  } else if(compMove === 'mouse') {
  result = 'Tie';
  }

} 
  else if(playerMove === 'cat') {
  if (compMove === 'dog') {
  result = 'You win';
  } else if(compMove === 'cat') {
  result = 'Tie';
  } else if(compMove === 'mouse') {
  result = 'You lose';
  }

} 
  else if(playerMove === 'dog') {
  if (compMove === 'dog') {
  result = 'Tie';
  } else if(compMove === 'cat') {
    result = 'You win';
  } else if(compMove === 'mouse') {
    result = 'You lose';
  }

}
  if (result === 'You win') {
    score.wins += 1;

  } else if(result === 'You lose') {
  score.losses += 1;

  } else if(result === 'Tie') {
  score.Ties += 1;

  };

  localStorage.setItem('score', JSON.stringify(score));

  updateScoreElement();

  document.querySelector('.js-result').
  innerHTML = `${result}`;

  document.querySelector('.js-moves').
  innerHTML = ` You
  <img src="images/${playerMove}-emolji.png" class="icons-button">
  <img src="images/${compMove}-emolji.png" class="icons-button">
  Computer
  `;





  };
  function updateScoreElement () {

  document.querySelector('.js-score')
  .innerHTML = `wins:${score.wins}, losses:${score.
  losses}, Ties:${score.Ties}`;


  };
  function pickcomputerMove() {
  const randomNum = Math.random();

  let compMove = '';

    if(randomNum >= 0 && randomNum <1/3) {
    compMove = 'dog';
    } else if(randomNum >= 1/3 && randomNum <2/3) {
    compMove = 'cat';
    } else if(randomNum >= 2/3 && randomNum <1) {
    compMove = 'mouse';

    }
    return compMove;

  }
