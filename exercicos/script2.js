
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
        q3: "C",

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
    result.innerHTML = `Você acertou ${score} de 3 perguntas.`;

    // Tocar som se todas as respostas estiverem corretas
    if (score === 3) {
        let successSound = document.getElementById('venceusom');
        successSound.play();
    }
        else {
        let perdeuSound = document.getElementById('perdeusom');
        perdeuSound.play();
        }

        // Desabilita o botão de responder novamente
        document.getElementById('resetButton').disabled = false;

        // Opcional: Reabilitar o botão de enviar respostas se estiver desabilitado
        document.querySelector('button[onclick="submitQuiz()"]').disabled = true;
    
}

function resetQuiz() {
    // Limpa a seleção dos campos de rádio
    let form = document.getElementById('quiz-form');
    form.reset();

    // Reabilita todas as opções de resposta
    let options = document.querySelectorAll('input[type="radio"]');
    options.forEach(option => option.disabled = false);

    // Limpa a seção de resultados
    let resultSection = document.getElementById('result');
    resultSection.innerHTML = '';

        // Habilita o botão de responder novamente
        document.getElementById('resetButton').disabled = true;
    
        // Opcional: Desabilitar o botão de enviar respostas se desejado
        document.querySelector('button[onclick="submitQuiz()"]').disabled = false;

}