/**
 * Created by betty on 8/14/17.
 */
"use strict";

let results = [{_id: "kk", name: "n1"}, {_id: "jj", name: "n2"}]

let original_results = ['jj', 'kk']

let resultMap = results.reduce((map, cur) => Object.assign(map, {[cur['_id']]: cur}), {});

results = original_results.map(key => resultMap[key])mv

console.log(results)

