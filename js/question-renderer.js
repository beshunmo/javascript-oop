export class SingleAnswerQuestionRenderer {
    renderAnswers(answers, onAnswer) {
        let form = document.createElement('form');
        let button = document.createElement('button');

        form.className = 'list-group list-group-flush';
        button.type = 'submit';
        button.className = 'btn btn-block';
        button.textContent = 'Оветить';

        for (let i = 0; i < answers.length; i++) {
            let label = document.createElement('label');
            let input = document.createElement('input');
            let text = document.createTextNode(answers[i]);

            input.type = 'radio';
            input.name = 'answer';
            input.value = i;
            label.className = 'list-group-item list-group-item-action';
            
            label.appendChild(input);
            label.appendChild(text);
            form.appendChild(label);
        }

        form.appendChild(button);

        form.addEventListener('submit', event => {
            event.preventDefault();
            
            let formData = new FormData(form);
            let answers = Array.from(formData.values());

            onAnswer(answers);
        });

        return form;
    }
}

export class MultipleAnswerQuestionRenderer {
    renderAnswers(answers, onAnswer) {
        let form = document.createElement('form');
        let button = document.createElement('button');

        form.className = 'list-group list-group-flush';
        button.type = 'submit';
        button.className = 'btn btn-block';
        button.textContent = 'Оветить';

        for (let i = 0; i < answers.length; i++) {
            let label = document.createElement('label');
            let input = document.createElement('input');
            let text = document.createTextNode(answers[i]);

            input.type = 'checkbox';
            input.name = 'answer';
            input.value = i;
            label.className = 'list-group-item list-group-item-action';
            
            label.appendChild(input);
            label.appendChild(text);

            form.appendChild(label);
        }

        form.appendChild(button);

        form.addEventListener('submit', event => {
            event.preventDefault();

            let formData = new FormData(form);
            let answers = Array.from(formData.values());

            onAnswer(answers);
        });

        return form;
    }
}

export class OpenAnswerQuestionRenderer {
    renderAnswers(answers, onAnswer) {
        let form = document.createElement('form');
        let button = document.createElement('button');
        let label = document.createElement('label');
        let input = document.createElement('input');

        button.type = 'submit';
        button.className = 'btn btn-block';
        button.textContent = 'Оветить';
        input.name = 'answer';
        input.className = 'list-group-item list-group-item-action';

        label.appendChild(input);
        form.appendChild(input);
        form.appendChild(button);

        form.addEventListener('submit', event => {
            event.preventDefault();
            
            let formData = new FormData(form);
            let answers = Array.from(formData.values());

            onAnswer(answers);
        });

        return form;
    }
}

const renderers = {
    single: SingleAnswerQuestionRenderer,
    multiple: MultipleAnswerQuestionRenderer,
    open: OpenAnswerQuestionRenderer
};

export function createRenderer(type) {
    return new renderers[type];
}