export default class App {
    /**
     * @param {HTMLElement} element 
     * @param {Quiz} quiz 
     */
    constructor(element, quiz) {
        this.element = element;
        this.quiz = quiz;

        this.init();
    }

    /**
     * Инициализирует объект.
     * 
     * Получает доступ к DOM-элементам, устанавливает заголовок и подписывается на событие при выборе ответа.
     */
    init() {
        this.titleElement = this.element.querySelector('#title');
        this.titleElement.innerHTML = this.quiz.title;

        this.quizElement = this.element.querySelector('#quiz');
        this.questionElement = this.element.querySelector('#question');
        this.answersElement = this.element.querySelector('#answers');
        this.scoreElement = this.element.querySelector('#score');
        this.progressElement = this.element.querySelector('#progress');

        this.answersElement.addEventListener('click', this.handleAnswerButtonClick.bind(this));
    }

    /**
     * Обрабатывает событие при выборе ответа.
     * 
     * @param {Event} event 
     */
    handleAnswerButtonClick(event) {
        let answer = event.target.id;

        this.quiz.checkAnswer(answer);
        this.displayNext();
    }

    /**
     * Отображает следующий вопрос или отображает результат если тест заверешен.
     */
    displayNext() {
        if (this.quiz.hasEnded) {
            this.displayScore();
        } else {
            this.displayQuestion();
            this.displayAnswers();
            this.displayProgress();
        }
    }

    /**
     * Отображает вопрос.
     */
    displayQuestion() {
        this.questionElement.innerHTML = this.quiz.currentQuestion.text;
    }

    /**
     * Отображает ответы.
     */
    displayAnswers() {
        let answers = this.quiz.currentQuestion.answers;
        let html = '';

        for (let i = 0; i < answers.length; i++) {
            html += `<li id="${i}" class="list-group-item list-group-item-action">${answers[i]}</li>`;
        }

        this.answersElement.innerHTML = html;
    }

    /**
     * Отображает прогресс ('Вопрос 1 из 5').
     */
    displayProgress() {
        let currentQuestionNumber = this.quiz.currentQuestionIndex + 1;

        this.progressElement.innerHTML = `Вопрос ${currentQuestionNumber} из ${this.quiz.questions.length}`;
    }

    /**
     * Отображает результат теста.
     */
    displayScore() {
        let html = `<header class="card-header">Правильных ответов: ${this.quiz.score}</header>`;
        this.quizElement.innerHTML = html;
    }
}