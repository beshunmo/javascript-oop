class Order {
    constructor(customerId) {
        this.customerId = customerId;
        this.dateTime = new Date();
        this.totalAmount = 0;
        this.items = [];
    }
}

class OrderManager {
    createOrder(customerId) {
        this.order = new Order(customerId);
        this.discounters = [];
    }

    addItem(item) {
        this.order.items.push(item);
        this.order.totalAmount = this.order.totalAmount + item.price; // *
    }

    registerDiscounter(discounter) {
        this.discounters.push(discounter);
    }

    sendOrder() {
        if (this.isValid(this.order)) {
            this.applyDiscount(this.order); // *

            var orderSender = new OrderSender();
            orderSender.send(order);
        }
        else {
            handleError({ message: "Not valid order!" });
        }
    }

    isValid(order) {
        return order.items.length > 0;
    }

    applyDiscount(order) {
        let discount;

        for (let discounter of this.discounters) {
            if (discounter.isApplicable(order)) {
                discount = discounter.apply(order);
            }
        }

        return discount;
    }
}

const orderManager = new OrderManager();

const bronzeDiscounter = {
    isApplicable(order) {
        var itemsCount = order.items.length;

        return (itemsCount >= 10 && itemsCount < 20)
    },

    apply(order) {
        order.totalAmount = order.totalAmount - order.totalAmount * 10 / 100;
    }
};

var silverDiscounter = {
    isApplicable(order) {
        var itemsCount = order.items.length;
        return (itemsCount >= 20 && itemsCount < 30)
    },
    apply(order) {
        order.totalAmount = order.totalAmount - order.totalAmount * 30 / 100;
    }
};

var goldDiscounter = {
    isApplicable(order) {
        var itemsCount = order.items.length;
        return (itemsCount >= 30)
    },

    apply(order) {
        order.totalAmount = order.totalAmount - order.totalAmount * 50 / 100;
    }
};

var platinumDiscounter = {
    isApplicable(order) {
        var itemsCount = order.items.length;
        return (itemsCount >= 50)
    },

    apply(order) {
        order.totalAmount = order.totalAmount - order.totalAmount * 50 / 100;
    }
};

orderManager.registerDiscounter(bronzeDiscounter);
orderManager.registerDiscounter(silverDiscounter);
orderManager.registerDiscounter(goldDiscounter);
orderManager.registerDiscounter(platinumDiscounter);