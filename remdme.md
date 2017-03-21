js中的dom基础操作元素选择器
    ```
    document.getElementById //根据id查找元素 返回单个,没有返回null
    document.getElementsByName //根据name属性查找
    document.getElementsByClassName //根据class属性值查找
    document.getElementsByTagName //根据标签名字查找
    document.querySelector //类似css元素选择器用户 获取单个
    document.querySelectorAll //获取多个
    document.querySelectorAll('[xxx]')//根据属性名查找
    document.querySelectorAll('[sss=""]')//指定的属性名对应属性值
    ```
2. 练习要求

    ```
    通过原生js的元素选择和浏览器调试工具从伯乐在线上面提取文章数据
    把提取得数据放在数组中,在本地写一个html文件把数组数据展示出来
    获取之后的数据格式为:
    var news = [
        {
            title:'H5推广：你该知道的一些事儿',
            link:'http://web.jobbole.com/90701/'
        },
        {
            title:'H5推广：你该知道的一些事儿',
            link:'http://web.jobbole.com/90701/'
        }
        ...
    ]
    ```