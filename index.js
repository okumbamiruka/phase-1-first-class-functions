function receivesAFunction(callback) {
    callback();
}

function returnsANamedFunction() {
    return function hello() {
        return "hello";
    }
}

function returnsAnAnonymousFunction() {
    return function () {
        return "hello";
    };
}