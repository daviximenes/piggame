var scores, roundScore, activePlayer;



scores = [0,0];
roundScore = 0;
activePlayer = 0;

dice =Math.floor(Math.random()* 7);

//document.querySelector('#current-' + activePlayer).textContent = dice;
document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice + '</em>';
document.querySelector(".dice").style.display ="none" ;