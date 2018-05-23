export class SingleAnswerQuestionValidator {
    validateAnswer(answer, correctAnswer) {
        if (Array.isArray(answer)) {
            return answer[0] == correctAnswer;
        } else {
            return answer == correctAnswer;
        }
    }
}

export class MultipleAnswerQuestionValidator {
    validateAnswer(answers, correctAnswers) {
        if (answers.length !== correctAnswers.length) return false;

        return answers.every(answer => correctAnswers.includes(Number(answer)));
    }
}

export class OpenAnswerQuestionValidator {
    validateAnswer(answer, correctAnswer) {
        if (Array.isArray(answer)) {
            return answer[0].toLowerCase() == correctAnswer.toLowerCase();
        } else {
            return answer.toLowerCase() == correctAnswer.toLowerCase();
        }
    }
}

const validators = {
    single: SingleAnswerQuestionValidator,
    multiple: MultipleAnswerQuestionValidator,
    open: OpenAnswerQuestionValidator
};

export function createValidator(type) {
    return new validators[type];
}