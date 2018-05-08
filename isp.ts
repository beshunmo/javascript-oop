const enumerable = {
    forEach() {
        
    }
}

const filterable = {
    filter() {
        
    }
}

const list = {}

interface IFilterable {
    filter: () => IList;
}

interface IQueue {

}

interface IStack {
    
}

interface IList {
    add: (item: any) => void;
    remove: (item: any) => void;
    get: (i: number) => any;
    set: (i: number, item) => void;
    map: () => IList;
    reduce: () => IList;
    every: () => boolean;
    some: () => boolean;
}

class List implements IList {

}

class Queue implements IQueue, IEnumerable {

}

class Stack implements IList {
    
}