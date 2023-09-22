// Given an array of numbers, return all the numbers that are greater than ten.
// Ex.:
//   greaterThanTen([1, 2, 3, 11, 12, 13]);
//   => [11, 12, 13]
function greaterThanTen(numbers) {

  let doubleDigitArray = [];
  for (let number of numbers) {
    if (number > 10) {
      doubleDigitArray.push(number);
    }
  }

  return doubleDigitArray;

}

// Given an array of strings, return all words that start with 'b' or 'B'.
// Ex.:
//   bWords(['banana', 'orange', 'apple', 'Bonobo', 'kiwi', 'pear']);
//   => ['banana', 'Bonobo]
function bWords(words) {

  let newArr = [];

  for(let word in words) {
    if (word.startsWith('b') || word.startsWith('B')) {
      newArr.push(word);
    }
  }

  return newArr;
}

// Add all the elements from additionalItems to the end of originalArray.
// Return the originalArray..
// Ex.:
//  extend([1, 2, 3], [4, 5, 6]);
//  => [1, 2, 3, 4, 5, 6]
function extend(originalArray, additionalItems) {

  for (let item in additionalItems) {
    originalArray.push(additionalItems[item]);
  }

  return originalArray;
}

// Return an array of all items with the given length.
// Ex.:
//   itemsWithLength(['a', 'bbb', 'cccc', 'dddddd', 'eee'], 3);
//   => ['bbb', 'eee']
function itemsWithLength(items, length) {

  let newArr = [];

  for (let item of items) {
    if (item.length === length) {
      newArr.push(item);
    }
  }

  return newArr;
}

// Return an array with every other element from the input array (start with index 0).
// Ex.:
//   everyOtherItem(['a', 'b', 'c', 'd', 'e']);
//   => ['a', 'c', 'e']
function everyOtherItem(items) {

  let newArr = [];

  for (let i = 0; i < items.length; i++) {
    if (i % 2 === 0) {
      newArr.push(items[i]);
    }
  }

  return newArr;
}

// Given a list of words and a letter, return the indexes of the words that
// start with that letter. You can assume that the words and letter will always
// be lowercased.
// Ex.:
//   findWordsStartingWith(['apple', 'banana', 'kiwi', 'pear', 'bacon'], 'b');
//   => [1, 4]
function findWordsStartingWith(words, letter) {

  let newArr = [];

  for (let word of words) {
    if (word.startsWith(letter)) {
      newArr.push(word);
    }
  }

  return newArr;
}

// Return the `n` smallest values in the array in descending order (largest
// numbers first). Assume that `n` will always be less than the length of the
// array.
// Ex.:
//   smallestNItems([1, 30, 4, 21, 100000], 3);
//   => [21, 4, 1]
function smallestNItems(items, n) {
  let newArr = [];

  // sort items array into largest->smallest
  newArr.push(items[0]);
  for (let i = 1; i < items.length; i++) {
    // if the value is bigger/equal-to than the first value, insert it at the beginning of the new array
    if (items[i] > newArr[0] || items[i] === newArr[0] ) {
      newArr.unshift(items[i]);
    }
    // if the item is smaller than the first element, add it to the end of the array
    else if (items[i] < newArr[0]) {
      newArr.push(items[i]);
    }
  }

return newArr;
  // get the last n items of the array
  let returnValues = [];
  

}

// Search for a value in the array and return its index. If the value appears
// more than once, return the index of the *FIRST* occurrence of the value. If
// the value doesn't exist in the array, return undefined.
// Ex.:
//   findIndex(['a', 'b', 'c', 'a', 'b', 'c'], 'c');
//   => 2
function findIndex(items, value) {}

// Given a start number and stop number, return a new array containing all the numbers
// between the start and stop number.
// Ex.:
//   range(1, 5);
//   => [1, 2, 3, 4, 5]
function range(start, stop) {}

export {
  bWords,
  everyOtherItem,
  extend,
  findIndex,
  findWordsStartingWith,
  greaterThanTen,
  itemsWithLength,
  range,
  smallestNItems,
};
