/**
 * 1. 创建一个记录学生成绩的对象，提供一个添加成绩的方法，以及一个显示学生平均成绩的方
 * 法。
 */ 

function reduceSum (running, current) {
    return running + current;
}

function StudentGrades(arr) {
    this.grades = arr ? arr : [];
}

StudentGrades.prototype.addGrade = function (grade) {
    this.grades.push(grade);
}

StudentGrades.prototype.average = function () {
    return this.grades.reduce(reduceSum) / this.grades.length;
}

module.exports = StudentGrades;