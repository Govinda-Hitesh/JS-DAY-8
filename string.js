//string 

//charAt;

let str = 'hitesh';
console.log(str.charAt(2));///index value is t

//suppose length = 10
// index value = 0 to 9

//endsWith
console.log(str.endsWith('h'));//ture

//includes

let sentence = 'hello';
console.log(sentence.includes('hello orange'));
//this method are case sensitive be aware

//indexOf

console.log(sentence.indexOf('o'));//indexof is always the first value 
console.log(sentence.lastIndexOf('o'));//lastIndexof is always the last value

//replace

str.replace('hello','aruna');
console.log(str);
//not going to manipulate the original string


//search

console.loh(str.search('hitesh'));//its showing the index value of the first charater

//substr

console.log(sentence.substr(o,4));//which index is used to those are not upload and next to all the upload

console.log(sentence.substring(0,6));
//for substring is always the loweer value is the starting index and higher value is the ending index, irrespetive of the position mentioned in the first value

//split

let email = 'hiteshvenky00@gmail.com'
let values  = email.split('.');
console.log(values);

