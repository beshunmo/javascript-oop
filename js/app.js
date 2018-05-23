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
        this.mainElement = this.element.querySelector('#main');
        this.titleElement = this.element.querySelector('#title');
        this.quizElement = this.element.querySelector('#quiz');
        this.questionElement = this.element.querySelector('#question');
        this.answersElement = this.element.querySelector('#answers');
        this.scoreElement = this.element.querySelector('#score');
        this.progressElement = this.element.querySelector('#progress');

        this.titleElement.innerHTML = this.quiz.title;

        this.handleAnswer = this.handleAnswer.bind(this);
    }

    /**
     * Обрабатывает событие при выборе ответа.
     * 
     * @param {Event} event 
     */
    handleAnswer(answer) {
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
        this._emptyElement(this.answersElement);

        let element = this.quiz.currentQuestion.renderAnswers(this.handleAnswer);

        this.answersElement.appendChild(element);
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
        this.mainElement.remove();
        this.progressElement.innerHTML = `Правильных ответов: ${this.quiz.score}`;
    }

    _emptyElement(element) {
        if (element.childNodes.length === 0) return;

        element.childNodes.forEach(node => {
            element.removeChild(node)
        });
    }
}