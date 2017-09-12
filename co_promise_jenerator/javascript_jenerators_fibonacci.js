/**
 * Created by betty on 8/13/17.
 */
"use strict";

function *fibonacci() {
  var parm1 = 1;
  var parm2 = 1;
  while (1){
    var current = parm1;
    parm1 = parm2
    parm2 = parm2 + current;
    yield current;
  }
  
}

var seq = fibonacci();
console.log(seq.next());
console.log(seq.next());
console.log(seq.next());
console.log(seq.next());
