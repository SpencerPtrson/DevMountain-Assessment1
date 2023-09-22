// Return the quotient of x and y.
// Ex.:
//   divide(10, 2);
//   => 5
function divide(x, y) {
  return x / y;
} // WORKING


// Return the average of x and y.
// Here, the average of x and y is the *mean* of x and y. In other words, it's
// computed by dividing the sum of x and y by 2.
// Ex.:
//   average(10, 2);
//   => 6
function average(x, y) {
  return (x + y) / 2;
} // WORKING

// Return true if x and y are mostly equivalent up to a tolerance of 0.001.
// In other words, return true if the aboslute value of x - y is less than 0.001.
// Ex.:
//   approximatelyEqual(10.001, 10);
//   => true
function approximatelyEqual(x, y) {
  return (Math.abs(x - y) < 0.001);
} // WORKING

// Given a first name and last name, return a full name in the format "FIRST LAST"
// Ex.:
//   fullName('John', 'Doe');
//   => 'John Doe'
function fullName(firstName, lastName) {
  return `${firstName} ${lastName}`;
} // WORKING

// Generate the sentence "PERSON was drinking BEVERAGE at LOCATION" using the
// person, beverage and location provided.
// Ex.:
//   generateSentence('Kay', 'coffee', 'the local cafe');
//   => 'Kay was drinking coffee at the local cafe.'
function generateSentence(person, beverage, location) {
  person = person.toUpperCase();
  beverage = beverage.toUpperCase();
  location = location.toUpperCase();
  return `${person} was drinking ${beverage} at ${location}`;
}

// Return the given string with all vowels replced with '*' characters.
// Ex.:
//   censorVowels('javascript');
//   => 'j*v*scr*pt'
function censorVowels(string) {
  let newString = '';

  for (let i = 0; i < string.length; i++) {
    let capitalized = string[i].toUpperCase();

    switch (capitalized) {
      case 'A':
      case 'E':
      case 'I':
      case 'O':
      case 'U':
        newString += '*';
        break;
      default:
        newString += string[i];
        break;
    }
  }

  console.log(newString);
  return newString;
} // WORKING

// Return the given string in sticky case.
// Ex.:
//   stickyCase('hello world');
//   => 'hElLo wOrLd'
function stickyCase(string) {
  let newString = '';

  for (let i = 0; i < string.length; i++) {
    if (i % 2 === 0) {
      newString += string[i].toLowerCase();
    }
    else {
      newString += string[i].toUpperCase();
    }
  }

  console.log(newString);
  return newString;
} // WORKING

// Return the given string in leetspeak. Leetspeak is a modified version of
// English where characters are replaced by numbers or symbols. For this
// version of leetspeak, replace the following characters:
//   a => 4
//   e => 3
//   i => 1
//   o => 0
//   s => 5
//   t => 7
// Ex.:
//   leetspeak('javascript');
//   => 'j4v45cr1p7'
function leetspeak(string) {
  let newString = '';

  for (let i = 0; i < string.length; i++) {
    switch (string[i]) {
      case 'a':
        newString += '4';
        break;
      case 'e':
        newString += '3';
        break;
      case 'i':
        newString += '1';
        break;
      case 'o':
        newString += '0';
        break;
      case 's':
        newString += '5';
        break;
      case 't':
        newString += '7';
        break;
      default:
        newString += string[i];
        break;
    }
  }

  return newString;
} // 

export {
  approximatelyEqual,
  average,
  censorVowels,
  divide,
  fullName,
  generateSentence,
  leetspeak,
  stickyCase,
};
