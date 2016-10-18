var lineThrough = '------------';
console.log('%s practice 1 test %s', lineThrough, lineThrough);
var fs = require('fs');
var List = require('./practice1.js');
var movies = fs.readFileSync('./chapter3/films.txt', 'utf-8').split('\r\n');
// init List
var movieList = new List();
for(var i=0, len=movies.length; i<len; i++) {
    movieList.append(movies[i]);
}
// 


