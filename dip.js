class Repository {
    constructor(service) {
        this.service = service;
    }

    getAll() {
        this.service.get();
    }

    getOne() {
        this.service.get();
    }

    create() {
        this.service.post();
    }

    update() {
        this.service.put();
    }

    delete() {
        this.service.delete();
    }
}

class Service {
    get() {}
    post() {}
    put() {}
    patch() {}
    delete() {}
}

class GraphQLService extends Service {
    get() {}
    post() {}
    put() {}
    patch() {}
    delete() {}
}

class HttpService extends Service {
    get() {}
    post() {}
    put() {}
    patch() {}
    delete() {}
}

class MockService extends Service {
    get() {}
    post() {}
    put() {}
    patch() {}
    delete() {}
}

repo.getAll();

const HttpService = require('htt-service');

module.exports = service => ({
    getAll() {}
});

// import

const repo = require('./repo')(new HttpService());