'use strict';

var promiseFunc = require('../');

/**
 * create functions
 */

var justReturn = function(param) {
    return 'justReturn ok!: ' + param;
};

var throwError = function(param) {
    throw 'throwError ok!: ' + param;
};

var returnPromiseResolve = function(param) {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            resolve('returnPromiseResolve ok!: ' + param);
        }, 500);
    });
};

var returnPromiseReject = function(param) {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            reject('returnPromiseReject ok!: ' + param);
        }, 1000);
    });
};

var callPromiseResolve = function(param) {
    var self = this;
    setTimeout(function() {
        self.resolve('callPromiseResolve ok!: ' + param);
    }, 1500);
};

var callPromiseReject = function(param) {
    var self = this;
    setTimeout(function() {
        self.reject('callPromiseReject ok!: ' + param);
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

var callPromiseResolveWithContext = function(param) {
    var self = this;
    setTimeout(function() {
        self.resolve('callPromiseResolveWithContext ok! :' + self.getContextValue() + ' param: ' + param);
    }, 1500);
};

var callPromiseRejectWithContext = function(param) {
    var self = this;
    setTimeout(function() {
        self.reject('callPromiseRejectWithContext ok! : :' + self.getContextValue() + ' param: ' + param);
    }, 2000);
};

/**
 * run functions
 */

promiseFunc(justReturn, 'paramObject')
    .then(function(val) {
        console.log(val);
    })
    .catch(function(error) {
        console.error(error);
    });

promiseFunc(throwError, 'paramObject')
    .then(function(val) {
        console.log(val);
    })
    .catch(function(error) {
        console.error(error);
    });

promiseFunc(returnPromiseResolve, 'paramObject')
    .then(function(val) {
        console.log(val);
    })
    .catch(function(error) {
        console.error(error);
    });

promiseFunc(returnPromiseReject, 'paramObject')
    .then(function(val) {
        console.log(val);
    })
    .catch(function(error) {
        console.error(error);
    });

promiseFunc(callPromiseResolveWithContext, 'paramObject', new Context())
    .then(function(val) {
        console.log(val);
    })
    .catch(function(error) {
        console.error(error);
    });

promiseFunc(callPromiseRejectWithContext, 'paramObject', new Context())
    .then(function(val) {
        console.log(val);
    })
    .catch(function(error) {
        console.error(error);
    });