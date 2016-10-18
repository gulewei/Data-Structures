function List () {
    // 列表的元素个数
    this.listSize = 0; 
    // 列表的当前位置
    this.pos = 0;
    // 初始化一个空数组来存储列表数据
    this.data = [];
}
// 返回列表中元素的个数
List.prototype.length = function () {
    return this.listSize;
}
// clear （方法） 清空列表中的所有元素
List.prototype.clear = function () {
    this.data = [];
    this.listSize = 0;
    this.pos = 0;
}
// toString （方法） 返回列表的字符串形式
List.prototype.toString = function () {
    return this.data.toString();
}
// getElement （方法） 返回当前位置的元素
List.prototype.getElement = function () {
    return this.data[this.pos];
}
// insert （方法） 在现有元素后插入新元素
List.prototype.insert = function (item) {
    this.data.splice(this.pos, 1, item);
    this.listSize = this.data.length;
}
// append （方法） 在列表的末尾添加新元素
List.prototype.append = function (item) {
    this.data.push(item);
    this.listSize = this.data.length;
}
// remove （方法） 从列表中删除元素
List.prototype.remove = function (item) {
    // 尝试将传入参数视为元素，从列表中删除
    var index = this.data.indexOf(item);
    if(index > -1) {
        this.data.splice(index, 1);
    }
    // 尝试将传入参数视为索引
    if(/\d/.test(item.toString())){
        this.data.splice(item, 1);
    } else {
        console.error('删除失败');
    }
    this.listSize = this.data.length;
}
// front （方法） 将列表的当前位置设移动到第一个元素
List.prototype.front = function () {
    this.pos = 0;
}
// end （方法） 将列表的当前位置移动到最后一个元素
List.prototype.end = function () {
    this.pos = this.listSize;
}
// prev （方法） 将当前位置后移一位
List.prototype.prev = function () {
    var index = this.pos - 1;
    if (index > -1) {
        this.pos = index;
    }
}
// next （方法） 将当前位置前移一位
List.prototype.next = function () {
    var index = this.pos + 1;
    if (index < this.listSize) {
        this.pos = index;
    }
}
// currPos （方法） 返回列表的当前位置
List.prototype.currPos = function () {
    return this.pos;
}
// moveTo （方法） 将当前位置移动到指定位置
List.prototype.moveTo = function (index) {
    this.pos = index;
}

module.exports = List;