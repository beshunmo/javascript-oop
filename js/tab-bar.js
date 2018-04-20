export default class TabBar {
    constructor({ element, tabs, onChange }) {
        this._element = element;
        this._tabs = tabs;
        this._onChange = onChange;

        this.init();
    }

    init() {
        this._tabs.forEach(tab => tab._onActivate = this.handleActivate.bind(this));
    }

    get element() { return this._element; }
    get tabs() { return this._tabs; }
    get activeTab() { return this.tabs.find(tab => tab.isActive); }
    get activeTabIndex() { return this.tabs.findIndex(tab => tab.isActive); }

    handleActivate(activeTab) {
        this._tabs.forEach(tab => {
            if (tab !== activeTab) {
                tab.isActive = false;
            }
        });

        this._onChange(activeTab);
    }
}