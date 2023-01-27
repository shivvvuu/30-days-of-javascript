//Declare a variable named because and assign it to an initial value '30 Days Of JavaScript'.
let Challenge = '30 Days Of JavaScript'
//Print the string on the browser console using console.log()
console.log(Challenge);
//Print the length of the string on the browser console using console.log()
console.log(Challenge.length);
//Change all the string characters to capital letters using toUpperCase() method
console.log(Challenge.toUpperCase());
//Change all the string characters to lowercase letters using toLowerCase() method
console.log(Challenge.toLowerCase());
//Cut (slice) out the first word of the string using substr() or substring() method
console.log(Challenge.substring(0,2));
//Slice out the phrase Days Of JavaScript from 30 Days Of JavaScript.
console.log(Challenge.substring(3));
//Check if the string contains a word Script using includes() method
console.log(Challenge.includes('Script'));
//Split the string into an array using split() method
console.log(Challenge.split(''));
//Split the string 30 Days Of JavaScript at the space using split() method
console.log(Challenge.split(' '));
//'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon' split the string at the comma and change it to an array.
let MNC ='Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'
console.log(MNC.split(' '));
//Change 30 Days Of JavaScript to 30 Days Of Python using replace() method.
console.log(Challenge.replace('JavaScript','Python'));
//What is character at index 15 in '30 Days Of JavaScript' string? Use charAt() method.
console.log(Challenge.charAt(15));
//What is the character code of J in '30 Days Of JavaScript' string using charCodeAt()
console.log(Challenge.charCodeAt(11));
//Use indexOf to determine the position of the first occurrence of a in 30 Days Of JavaScript
console.log(Challenge.indexOf('a'));
//Use lastIndexOf to determine the position of the last occurrence of a in 30 Days Of JavaScript.
console.log(Challenge.lastIndexOf('a'));
//Use indexOf to find the position of the first occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
let because = 'You cannot end a sentence with because because because is a conjunction';
console.log(because.indexOf('because'));
//Use lastIndexOf to find the position of the last occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
console.log(because.lastIndexOf('because'));
//Use search to find the position of the first occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
console.log(because.search('because'));
//Use trim() to remove any trailing whitespace at the beginning and the end of a string.E.g ' 30 Days Of JavaScript '.
let Challenge2=' 30 Days Of JavaScript '
console.log(Challenge.trim());
//Use startsWith() method with the string 30 Days Of JavaScript and make the result true
console.log(Challenge.startsWith('3'));
//Use endsWith() method with the string 30 Days Of JavaScript and make the result true
console.log(Challenge.endsWith('t'));
//Use match() method to find all the a’s in 30 Days Of JavaScript
console.log(Challenge.match('a'));
//Use concat() and merge '30 Days of' and 'JavaScript' to a single string, '30 Days Of JavaScript'
let Challenge3= '30 Days of';
console.log(Challenge3.concat(' JavaScript'));
//Use repeat() method to print 30 Days Of JavaScript 2 times
console.log(Challenge.repeat(2));