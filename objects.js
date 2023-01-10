'use strict';

// 1. countWords
function countWords(phrase) {
  let newObject = [];
  newObject = phrase.split(" ");

  const words = {};

  for (let word of newObject) {
    if (words.hasOwnProperty(word)) {
      words[word]  += 1;
    }
    else{
      words[word]  = 1;
    }
  }
return words;
}

// 2. getMelonsAtPrice
function getMelonsAtPrice(price) {
  const melon_prices = {
    2.50: ['Cantaloupe', 'Honeydew'],
    2.95: ['Watermelon'],
    3.25: ['Musk', 'Crenshaw'],
    14.25: ['Christmas']
  };
let melon_lst = [];
if(price in melon_prices) {
    for(let melon of Object.values(melon_prices[price])) {
      melon_lst.sort();melon_lst.push(melon);
    }
      return melon_lst.sort();;
  }
 return
}
