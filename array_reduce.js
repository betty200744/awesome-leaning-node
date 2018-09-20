/**
 * Created by betty on 9/29/17.
 */
"use strict";

[1,2,3].reduce( (acc, val, index, arr) => {
  console.log(`this is acc  , ${acc}`)
  console.log(`this is val , ${val}`)
  console.log(`this is index ,${index}`)
  console.log(arr)
  console.log("###########")
  return acc + val
});