class Tab {
    constructor({ element, onActivate }) {
        this._active = false;
        this.element = element;
        this.onActivate = onActivate;

        this.init();
    }

    get id() { return this.element.hash.slice(1) }

    get isActive() { return this._active; }
    set isActive(value) {
        this._active = value;

        if (value === true) {
            this.element.classList.add('active');
        } else {
            this.element.classList.remove('active');
        }
    }

    init() {
        this._active = this.element.classList.contains('active');
        this.element.addEventListener('click', this.handleClick.bind(this));
    }

    handleClick(event) {
        event.preventDefault();

        this.isActive = true;
        this.onActivate(this);
    }
}