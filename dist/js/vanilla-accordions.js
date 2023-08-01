function VanillaAccordions(selector) {
    return {
        selector: selector || '.vnl-accordions',

        init() {
            this.addListeners();
        },
        show(index) {
            const items =
                document.querySelector(this.selector)
                    .querySelectorAll(this.selector + '-item');
            items.forEach((item, i) => {
                if (i === index) {
                    item.classList.add('active');
                } else {
                    item.classList.remove('active');
                }
            });
        },
        toggle(index) {
            const items =
                document.querySelector(this.selector)
                    .querySelectorAll(this.selector + '-item');
            items.forEach((item, i) => {
                if (i === index) {
                    if (item.classList.contains('active')) item.classList.remove('active');
                    else item.classList.add('active');
                } else {
                    item.classList.remove('active');
                }
            });
        },
        reset() {
            const items =
                document.querySelector(this.selector)
                    .querySelectorAll(this.selector + '-item');
            items.forEach((item ) => {
                item.classList.remove('active');
            });
        },
        destroy() {
            this.removeListeners();
        },

        addListeners() {
            const items =
                document.querySelector(this.selector)
                    .querySelectorAll(this.selector + '-item');
            const self = this;
            items.forEach((item, i) => {
                item.addEventListener('click', item.toggle = function toggle() {
                    self.toggle(i);
                });
            });
        },
        removeListeners() {
            const items =
                document.querySelector(this.selector)
                    .querySelectorAll(this.selector + '-item');
            items.forEach((item) => {
                item.removeEventListener('click', item.toggle);
            });
        }
    }
}

const accordions = new VanillaAccordions('.vnl-accordions');
accordions.init();

