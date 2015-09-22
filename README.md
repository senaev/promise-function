## Installation

```bash
$ npm install promise-function
```

## Examples

  You can do: 

```js
var promiseFunc = require('promise-function');

promiseFunc(function(param) {
        return 'justReturn ok: ' + param;
    }, 'paramObject')
    .then(function(val) {
        console.log(val);
    })
    .catch(function(error) {
        console.error(error);
    });

promiseFunc(function(param) {
        return new Promise(function(resolve, reject) {
            setTimeout(function() {
                reject('returnPromiseReject ok: ' + param);
            }, 1000);
        });
    }, 'paramObject')
    .then(function(val) {
        console.log(val);
    })
    .catch(function(error) {
        console.error(error);
    });
    


promiseFunc(function(param) {
        var self = this;
        setTimeout(function() {
            self.resolve('callPromiseResolve ok: ' + param);
        }, 2000);
    }, 'paramObject')
    .then(function(val) {
        console.log(val);
    })
    .catch(function(error) {
        console.error(error);
    });
```

## License

  [MIT](LICENSE)
