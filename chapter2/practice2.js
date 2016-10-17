/**
 * 2. 将一组单词存储在一个数组中，并按正序和倒序分别显示这些单词。
 */

function Words (arr) {
    this.words = arr;
}
Words.prototype.reverse = function () {
    return this.words.reverse();
}
Words.prototype.order = function () {
    return this.words.sort();
}

module.exports = Words;