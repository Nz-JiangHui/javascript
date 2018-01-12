/**
 * Created by Nz on 2018/1/12.
 */
var obj = {
    value: 2,
    getValue: function () {
        console.log(this.value)
        return this.value;
    }
}

obj.getValue();// 2, 此时getValue()的this指向obj

var p = Object.create(obj);
//p是一个对象，p.__proto__是o

p.value = 4;//创建p的自身属性value,并赋值4
p.getValue();// 4, 此时getValue()的this指向p;