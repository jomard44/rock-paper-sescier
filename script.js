(function () {

    let text = document.querySelector('#text');
    let won = document.querySelector("#won");
    let lose = document.querySelector("#lose");
    let tie = document.querySelector("#tie");
    let image = document.querySelector("img");

    let choices = ['rock', 'paper', 'scissors'];
    let scores = { won: 0, lose: 0, tie: 0 };

    function computerChoice() {
        return choices[Math.floor(Math.random() * choices.length)];
    }

    function pickOption(choice) {
        let computer = computerChoice();

        if (choice === computer) {
            text.innerHTML = 'It\'s a tie!';
            scores.tie++;
        } else if (
            (choice === 'rock' && computer === 'scissors') ||
            (choice === 'paper' && computer === 'rock') ||
            (choice === 'scissors' && computer === 'paper')
        ) {
            text.innerHTML = 'You won this round!';
            scores.won++;
        } else {
            text.innerHTML = 'Computer won this round!';
            scores.lose++;
        }

        won.innerHTML = `won: ${scores.won}`;
        lose.innerHTML = `lose: ${scores.lose}`;
        tie.innerHTML = `tie: ${scores.tie}`;

        // Update image
        if (choice === 'rock') {
            image.src = 'rock.jpg';
        } else if (choice === 'paper') {
            image.src = 'paper.jpg';
        } else if (choice === 'scissors') {
            image.src = 'scissors.jpg';
        }
    }

    document.querySelector('#btn1').addEventListener('click', function () {
        pickOption('rock');
    });

    document.querySelector('#btn2').addEventListener('click', function () {
        pickOption('paper');
    });

    document.querySelector('#btn3').addEventListener('click', function () {
        pickOption('scissors');
    });

    let reset = document.querySelector("#reset").addEventListener('click', function(){
        scores.won = 0;
        scores.lose = 0;
        scores.tie = 0;
        won.innerHTML = 'won: 0';
        lose.innerHTML = 'lose: 0';
        tie.innerHTML = 'tie: 0';
        image.src = ''; // Reset the image src
    });

})();
