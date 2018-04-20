class TabBar {
    constructor({ element, onChange }) {
        this.element = element;
        this.onChange = onChange;

        this.init();
    }

    get tabs () { return this._tabs; }
    get activeTab() { return this._tabs.find(tab => tab.isActive); }
    get activeTabIndex() { return this._tabs.findIndex(tab => tab.isActive); }

    init() {
        let tabElements = this.element.querySelectorAll('.tab');
        
        this._tabs = Array.of(...tabElements).map(element => new Tab({ element, onActivate: this.handleActivate.bind(this) }));
    }

    handleActivate(activeTab) {
        this._tabs.forEach(tab => {
            if (tab !== activeTab) {
                tab.isActive = false;
            }
        })

        this.onChange(activeTab);
    }
}