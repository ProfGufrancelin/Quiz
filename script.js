
function disableOptions(questionName) {
    let options = document.getElementsByName(questionName);
    options.forEach(option => {
        if (!option.checked) {
            option.disabled = true;
        }
    });
}

function playSound() {
    let clickSound = document.getElementById('selecionasom');
    clickSound.play();
}

function submitQuiz() {
    
    let correctAnswers = {
        q1: "B",
        q2: "D",

        // Adicione as respostas corretas para as outras perguntas
    };


    let form = document.getElementById('quiz-form');
    let score = 0;

    for (let key in correctAnswers) {
        let userAnswer = form.elements[key].value;
        if (userAnswer === correctAnswers[key]) {
            score++;
        }
    }

    let result = document.getElementById('result');
    result.innerHTML = `Você acertou ${score} de 2 perguntas.`;

    // Tocar som se todas as respostas estiverem corretas
    if (score === 2) {
        let successSound = document.getElementById('venceusom');
        successSound.play();
    }
   
}