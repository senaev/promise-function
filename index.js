'use strict';

module.exports = function(f, parentObject) {
    var result;
    var error;

    var resolver;
    var rejecter;
    var promise = new Promise(function(resolve, reject) {
        resolver = resolve;
        rejecter = reject;
    });

    if (parentObject) {
        parentObject.resolve = function(val) {
            resolver(val);
        };
        parentObject.reject = function(error) {
            rejecter(error)
        };
    }

    try {
        result = f.call(parentObject);
    } catch (e) {
        error = e;
    }

    if (error) {
        return Promise.reject(error);
    }

    if (result !== undefined) {
        return Promise.resolve(result);
    } else if (result instanceof Promise) {
        return result;
    } else {
        return promise;
    }
};
