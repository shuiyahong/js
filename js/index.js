// 获取文档的标题
console.log(document.title)
// document.body//获取body节点返回的是一个对象
console.log( document.body)
// innerHTML表示元素内部的html内容
console.log( document.body.innerHTML)
// innerText表示元素内部的文本内容，不包含HTML标签名字
console.log(document.body.innerText)

// 通过设置innerhtml的值可以修改内部内容
// document.body.innerHTML = '<h1>hello word</h1>'
console.log(document.head)//head的节点

console.log(typeof document.scripts)//所有的js引用集合（collection非数组）

console.log(document.styleSheets)//获取页面中使用的样式（link， style）

//元素选择器
console.clear()//清空上面控制台的输出

// 根据ID 获取一个标签元素，如果找不到返回null
console.log(document.getElementById('txt'))

// 根据标签名字查找元素 获取多个 返回一个集合
console.log(document.getElementsByTagName('p'))

// 根据class的值 获取多个 返回一个集合
console.log(document.getElementsByClassName('list'))

//根据name的值 获取多个元素 返回集合
console.log(document.getElementsByName('textname'))
console.log('-------querySelector-------')

// querySelector选择方式类似于css中的样式选择器
// 根据ID获取一个标签
console.log(document.querySelector('#txt'))

// class和标签名字结合 
console.log(document.querySelectorAll('.list li'))

// 获取第三个li  直接加所取元素下标
console.log(document.querySelectorAll('.list li')[2])
var list=document.querySelectorAll('.list li')
// 遍历li集合
for (var i = 0; i<list.length;i++){
    var item = list[i]//临时变量保存循环到的每一项
    console.log(item.innerText)
}

// 获取页面文档中含有指定属性的节点
var tagHasNameProp = document.querySelectorAll("[name]")
// document.querySelectorAll("[name='viewport']")//指定属性值
console.log(tagHasNameProp)