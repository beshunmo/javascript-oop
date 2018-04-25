export default class Tab {
    constructor({ element, onActivate = () => {} }) {
        this._active = false;
        this._element = element;
        this._onActivate = onActivate;

        this.init();
    }

    init() {
        this._active = this._element.classList.contains('active');
        this._element.addEventListener('click', this.handleClick.bind(this));
    }

    get element() { return this._element; }
    get id() { return this._element.hash.slice(1); }

    get isActive() { return this._active; }
    set isActive(value) {
        this._active = value;
        this._element.classList.toggle('active', value);
    }

    handleClick(event) {
        event.preventDefault();
        
        this.isActive = true;
        this._onActivate(this);
    }
}