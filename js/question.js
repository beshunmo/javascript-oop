import { createRenderer } from './question-renderer.js';
import { createValidator } from './question-validator.js';

export default class Question {
    /**
     * @param {string} type Тип вопроса
     * @param {string} text Текст вопроса
     * @param {string[]} answers Варианты ответов
     * @param {number} correctAnswer Индекс правильного ответа
     */
    constructor({ type, text, answers, correctAnswer, renderer, validator }) {
        this.type = type;
        this.text = text;
        this.answers = answers;
        this.correctAnswer = correctAnswer;
        this.renderer = renderer;
        this.validator = validator;
    }

    /**
     * Проверяет правильность ответа.
     * 
     * @param {number} answer
     * @returns {boolean}
     */
    isCorrectAnswer(answer) {
        let result = this.validator.validateAnswer(answer, this.correctAnswer);
        console.log(this.text, answer, this.correctAnswer, result);
        return result;
    }

    /**
     * Возращает HTML-отображение вопроса.
     */
    renderAnswers(onAnswer) {
        return this.renderer.renderAnswers(this.answers, onAnswer);
    }
}

export function createQuestion({ type, text, answers, correctAnswer }) {
    return new Question({
        type,
        text,
        answers,
        correctAnswer,
        renderer: createRenderer(type),
        validator: createValidator(type)
    });
}