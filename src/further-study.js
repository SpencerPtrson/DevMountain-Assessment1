// EXTRA CREDIT

// Return the strings common to both input arrays. Do not return duplicates.
// Ex.:
//   commonStrings(['a', 'b', 'c'], ['a', 'd', 'e']);
//   => ['a']
//   commonStrings(['zoo', 'space', 'zoo'], ['zoo', 'space', 'boat']);
//   => ['zoo', 'space']
function commonStrings(array1, array2) {
    let sharedArr = [];

    // iterate through array 1
    for (let i = 0; i < array1.length; i++) {

        // iterate through array 2
        for (let j = 0; j < array2.length; j++) {
            // if array1 value and array2 value match and the shared array doesn't already hold the value
            // put it in the sharedArray
            if (array1[i] === array2[j] && !sharedArr.includes(array1[i])) {
                sharedArr.push(array1[i]);
            }
        }
    }
    console.log(sharedArr);
    return sharedArr;
} // WORKING

// Given three numbers, return a list of numbers from 1 to 100 that are
// divisible by at least one of a, b or c.
// Ex.:
//   divisibleByEither(50, 30, 29);
//   => [29, 30, 50, 58, 60, 87, 90, 100]
function divisibleByEither(a, b, c) {
    let divisibleArr = [];
    
    for (let i = 1; i <= 100; i++) {
      if (i % a === 0 || i % b === 0 || i % c === 0) {
        divisibleArr.push(i);
      }
    }
    console.log(divisibleArr);
    return divisibleArr;
  } // WORKING

// Compress a string using the rules below and return the result. To compress a
// string, replace consecutive duplicate characters with a number and the
// character. For this compression, only count consecutive duplicate
// characters. If a character is not repeated, it should not be changed.
// Assume that all inputs are lowercased.
// Ex.:
//   compressString('aaa');
//   => '3a'
//   compressString('ssssbb');
//   => '4s2b'
//   compressString('ssssbbba');
//   => '4s3ba'
function compressString(string) {

    let uniqueCharacterArr = [];
    // iterate through the string and make an array of each unique character
    for (let i = 0; i < string.length; i++) {
      if (!uniqueCharacterArr.includes(string[i])) {
        uniqueCharacterArr.push(string[i]);
      }
    }
  
    console.log(uniqueCharacterArr);
  
    // iterate through the unique character array
    for (let i = 0; i < uniqueCharacterArr.length; i++) {
      let characterCount = 0;

      // iterate through the original string, and get the count for each character
      for (let j = 0; j < string.length; j++) {
        if (string[j] === uniqueCharacterArr[i]) {
          characterCount++;
        }
      }
  
      // Should now have a count of how many of the uniqueCharacterArr value there are       in the original string
  
      if (characterCount > 1) {
          uniqueCharacterArr[i] = characterCount + uniqueCharacterArr[i];
      }
    }
  
    console.log(uniqueCharacterArr);
  
    let finalString = '';
  
    for (let element of uniqueCharacterArr) {
      finalString += element;
    }
    console.log(finalString);
    return finalString;
}


export { commonStrings, compressString, divisibleByEither };
