export default class Quiz {
    /**
     * @param {string} title 
     * @param {Question[]} questions 
     */
    constructor(title, questions) {
        this.title = title;
        this.score = 0;
        this.currentQuestionIndex = 0;
        this.questions = questions;
    }

    /**
     * Возвращает текущий вопрос.
     * 
     * @returns {Question}
     */
    get currentQuestion() {
        return this.questions[this.currentQuestionIndex];
    }

    /**
     * Возвращает `true/false` в зависимости от того закончился тест или нет.
     * 
     * @returns {boolean}
     */
    get hasEnded() {
        return this.currentQuestionIndex >= this.questions.length;
    }

    /**
     * Проверяет правильность ответа выбранного пользователем.
     * @param {*} answer 
     */
    checkAnswer(answer) {
        if (this.currentQuestion.isCorrectAnswer(answer)) {
            this.score += 1;
        }

        this.currentQuestionIndex++;
    }
}