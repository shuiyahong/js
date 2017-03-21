//图片数据数组
var arrImgs=["http://mvimg1.meitudata.com/58d08ad447c907282.jpg!thumb320", "http://mvimg1.meitudata.com/58ce02e1999dd641.jpg!thumb320", "http://mvimg10.meitudata.com/58cf5269a693e4145.jpg!thumb320", "http://mvimg2.meitudata.com/58cebad824b0a9521.jpg!thumb320", "http://mvimg2.meitudata.com/58cebda41d7e22400.jpg!thumb320", "http://mvimg2.meitudata.com/58cf35b0b85044152.jpg!thumb320", "http://mvimg2.meitudata.com/58ce6d62350968020.jpg!thumb320", "http://mvimg1.meitudata.com/58ce379308fa59892.jpg!thumb320", "http://mvimg10.meitudata.com/58ce0b7f7c9f7997.jpg!thumb320", "http://mvimg10.meitudata.com/58d08d64e1aed1829.jpg!thumb320", "http://mvimg1.meitudata.com/58cf3c18904ca820.jpg!thumb320", "http://mvimg10.meitudata.com/58ce30e5c6a116169.jpg!thumb320", "http://mvimg2.meitudata.com/58cf840a4b0874330.jpg!thumb320", "http://mvimg11.meitudata.com/58cfbceb1b3f86328.jpg!thumb320", "http://mvimg1.meitudata.com/58ce0b8619dd16174.jpg!thumb320", "http://mvimg11.meitudata.com/58d0b472b93b18207.jpg!thumb320", "http://mvimg11.meitudata.com/58cf1407a10c71486.jpg!thumb320", "http://mvimg1.meitudata.com/58cf692e90864590.jpg!thumb320", "http://mvimg11.meitudata.com/58ce3da8b046c7428.jpg!thumb320", "http://mvimg11.meitudata.com/58cebe7bea0397889.jpg!thumb320", "http://mvimg10.meitudata.com/58cfff83137016536.jpg!thumb320", "http://mvimg2.meitudata.com/58d09a1e2c4357790.jpg!thumb320", "http://mvimg11.meitudata.com/58cfcd4a224ea5259.jpg!thumb320", "http://mvimg2.meitudata.com/58cfd5a1881392391.jpg!thumb320"]

var strhtml=''//最终拼接的字符串结果 
for (var i = 0; i<arrImgs.length;i++){
    // strhtml+='<img src="'+arrImgs[i]+'">'//字符串拼接
    strhtml += '<a target="_blank" href="'+arrImgs[i]+'" ><img src="'+arrImgs[i]+'" alt="图片未找到"></a>'
} 
document.getElementsByClassName('img-list')[0].innerHTML=strhtml
/**
 * 
 * forEach循环数组中的每一项
 * 回调函数接收三个参数
 * 参数一 每一项的内容（数组）
 * 参数二 索引（数组下标）
 * 参数三 数组对象本身
 */
// arrImgs.forEach(function(item,i,arr){
//     console.group(i)
//     console.log(i)
//     console.log(item)
//     console.log(arr)
//     console.groupEnd(i)
// })
var people=['tom','yaya','yaya']
// 数组的join方法数组中的每一项拼接成一个字符串，使用给定的连接符
 console.log(people.join('-'))

