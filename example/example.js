'use strict';

var promiseFunc = require('../');

/**
 * create functions
 */

var justReturn = function() {
    return 'justReturn ok!'
};

var throwError = function() {
    throw 'throwError ok!';
};

var returnPromiseResolve = function() {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            resolve('returnPromiseResolve ok!');
        }, 500);
    });
};

var returnPromiseReject = function() {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            reject('returnPromiseReject ok!');
        }, 1000);
    });
};

var callPromiseResolve = function() {
    var self = this;
    setTimeout(function() {
        self.resolve('callPromiseResolve ok!');
    }, 1500);
};

var callPromiseReject = function() {
    var self = this;
    setTimeout(function() {
        self.reject('callPromiseReject ok!');
    }, 2000);
};

class Context {
    getContextValue() {
        return 'contextValue';
    }

    resolve() {
        console.error('Bad resolve!!!!!');
    }

    reject() {
        console.error('Bad reject!!!!!');
    }
}

var callPromiseResolveWithContext = function() {
    var self = this;
    setTimeout(function() {
        self.resolve('callPromiseResolveWithContext ok! :' + self.getContextValue());
    }, 1500);
};

var callPromiseRejectWithContext = function() {
    var self = this;
    setTimeout(function() {
        self.reject('callPromiseRejectWithContext ok! : ' + self.getContextValue());
    }, 2000);
};

/**
 * run functions
 */

promiseFunc(justReturn)
    .then(function(val) {
        console.log(val);
    })
    .catch(function(error) {
        console.error(error);
    });

promiseFunc(throwError)
    .then(function(val) {
        console.log(val);
    })
    .catch(function(error) {
        console.error(error);
    });

promiseFunc(returnPromiseResolve)
    .then(function(val) {
        console.log(val);
    })
    .catch(function(error) {
        console.error(error);
    });

promiseFunc(returnPromiseReject)
    .then(function(val) {
        console.log(val);
    })
    .catch(function(error) {
        console.error(error);
    });

promiseFunc(callPromiseResolveWithContext, new Context())
    .then(function(val) {
        console.log(val);
    })
    .catch(function(error) {
        console.error(error);
    });

promiseFunc(callPromiseRejectWithContext, new Context())
    .then(function(val) {
        console.log(val);
    })
    .catch(function(error) {
        console.error(error);
    });