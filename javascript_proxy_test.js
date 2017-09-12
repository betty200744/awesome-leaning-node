/**
 * Created by betty on 8/13/17.
 */
"use strict";


let handle = {
  get: function (target, name) {
    return name in target? target[name] : 42;
  }
};

let p = new Proxy({}, handle);


console.log(p.a);

