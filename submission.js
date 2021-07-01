const findSum = function(array) {
  // your code here - don't forget to return a number!
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum = sum + array[i];
  };
  return sum;
};

const findFrequency = function(array) {
  // your code here - don't forget to return an object!
  let maxCounter = 0;
  let maxFrequency = 1;
  let maxItem;

// for most frequent
  for (let i = 0; i < array.length; i++ ) {
    for (let j = 0; j < array.length; j++) {
      if (array[i] == array[j]) {
        maxCounter++;
      };
      if (maxFrequency < maxCounter) {
        maxFrequency = maxCounter;
        maxItem = array[i];
      }
    }
    maxCounter = 0;
  };

// for least frequent

  let leastCounter = 0;
  let leastFrequency = 1;
  let leastItem;
  for (let i = 0; i < array.length; i++) {
    for (let k = 0; k < array.length; k++) {
      if (array[i] !== array[k]) {
        leastCounter--;
      } else {
        leastCounter++;
      };
      if (leastFrequency > leastCounter) {
        leastFrequency = leastCounter;
        leastItem = array[i];
      }
    } 
      leastCounter = 0;
  }
  return (`{most: '${maxItem}', least: '${leastItem}'}`);
  
};


const isPalindrome = function(str) {
  // your code here - don't forget to return a boolean!
  const splitString = string.split("");
  const reverse = splitString.reverse().join("");
  
  if (reverse === string) {
    return true;
  } else {
    return false;
  } 
};

const largestPair = function(array) {
  // your code here - don't forget to return a number!
  let products = [];
  for (var i = 0; i < array.length; i++) {
      let currentNum = array[i];
      let nextNum = array[i + 1];

      let product = currentNum * nextNum;

      if (product) {
        products.push(product);
      }  
  }
  return largestProduct = Math.max(...products);  
};

const removeParenth = function(str) {
  // your code here - don't forget to return a string!
  const openParentheses = '(';
  const closeParentheses = ')';

  const indexOfFirst = string.indexOf(openParentheses);
  console.log(indexOfFirst);

  const indexOfLast = string.indexOf(closeParentheses);
  console.log(indexOfLast);

  const beginning = string.slice(0, indexOfFirst);
  const end = string.slice(indexOfLast + 1, string.length);
 
  return (beginning + end);
  
};

const scoreScrabble = function(str) {
  // your code here - don't forget to return a number!
  let alphabetPoints = {
    a: 1, e: 1, i: 1, o: 1, u: 1, l: 1, n: 1, r: 1, s: 1, t: 1, d: 2, g: 2, b: 3, c: 3, m: 3, p: 3, f: 4, h: 4, v: 4, w: 4, y: 4, k: 5, j: 8, x: 8, q: 10, z: 10
  };
  let sum = 0;

  for (i = 0; i < word.length; i++) {
    sum += alphabetPoints[word[i]] || 0;
  }
  return sum;
};
