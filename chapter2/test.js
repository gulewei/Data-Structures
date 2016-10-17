/**
 * practice 1 test
 */
console.log('------------ practice 1 test ------------');
var StudentGrades = require('./practice1.js');
// init data
var arr1 = [85,77,94,79,68,74,95,64,73,92,88];
// init object
var classRoom = new StudentGrades(arr1);
console.log(classRoom);
// add method
classRoom.addGrade(76);
console.log(classRoom.grades);
// average method
console.log(classRoom.average());


/**
 * practice 2 test
 */
console.log('------------ practice 2 test ------------');
var Words = require('./practice2.js');
// init
var arr2 = ['think', 'I', 'me', 'you', 'haha', 'VS Code'];
var wordArr = new Words(arr2);
// sort
console.log(wordArr.order());
// reverse
console.log(wordArr.reverse());