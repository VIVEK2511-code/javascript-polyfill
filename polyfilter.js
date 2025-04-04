if (!Array.prototype.filter) {
    Array.prototype.filter = function(callback, thisArg) {
      if (this == null) {
        throw new TypeError('Array.prototype.filter called on null or undefined');
      }
  
      if (typeof callback !== 'function') {
        throw new TypeError(callback + ' is not a function');
      }
  
      let result = [];
      let array = Object(this);
  
      for (let i = 0; i < array.length; i++) {
        if (i in array) {
          if (callback.call(thisArg, array[i], i, array)) {
            result.push(array[i]);
          }
        }
      }
  
      return result;
    };
  }
  