export default class ColorPicker {
    constructor({ element }) {
        this.element = element;
        this.previewElement = null;

        this.color = {
            red: 0,
            green: 0,
            blue: 0
        };

        this.onAdd = () => {};

        this.init();
    }

    init() {
        this.previewElement = this.element.querySelector('.color-picker__preview');
        
        this.setPreviewBackground(this.color);

        this.element.querySelectorAll('.color-picker__slider')
            .forEach(slider => slider.addEventListener('change', this.handleChange.bind(this)));

        this.element.querySelector('.color-picker__add-button')
            .addEventListener('click', this.handleAdd.bind(this));
        
        this.element.querySelector('.color-picker__close-button')
            .addEventListener('click', this.handleClose.bind(this));
    }

    handleAdd() {
        this.onAdd(this.color);
        this.reset();
        this.close();
    }

    handleClose() {
        this.close();
    }

    handleChange(event) {
        let slider = event.target;

        this.color[slider.id] = Number(slider.value);
        this.setPreviewBackground(this.color);
    }

    setPreviewBackground(color) {
        this.previewElement.style.backgroundColor = `rgb(${color.red},${color.green},${color.blue})`;
    }

    reset() {
        this.color = {
            red: 0,
            green: 0,
            blue: 0
        };
    }

    open() {
        this.element.classList.add('open');
    }

    close() {
        this.element.classList.remove('open');
    }
}