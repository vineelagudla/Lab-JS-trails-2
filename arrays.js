'use strict';

// 1. printIndices
function printIndices(items) {
  for (let item of items){
    let i = Object.values(items).indexOf(item);
    console.log(`${i}, ${item}`);
  }
}

// 2. everyOtherItem
function everyOtherItem(items) {
  let result = [];

  for (let index = 0; index < items.length; index++) {
    if (index % 2 === 0){
      result.push(items[index]);
    }
  }
  return result;
}

// 3. smallestNItems


// function compareItems(smallestNItems) {
//   const nums = [1, 30, 4, 21, 100000];
//   nums.sort((a, b) => {
//    return a - b;
//    });
// }

// let items = compareItems();

function smallestNItems(items, n) {

  items.sort((a, b) => {
   return a - b;
   });
   let sort = []
  for(let i = 0; i < n; i++) {
     sort[i] = items[i];
  }
  return sort;
  }


