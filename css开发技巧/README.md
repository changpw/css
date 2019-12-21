# css开发技巧
### 使用:nth-child()选择指定元素
#### Odd 和 even 是可用于匹配下标是奇数或偶数的子元素的关键词（第一个子元素的下标是 1）。
#### 使用公式 (an + b)。描述：表示周期的长度，n 是计数器（从 0 开始），b 是偏移值。
### 使用writing-mode排版竖文
### 使用text-align-last对齐两端文本
### 使用:not()去除无用属性 
### -webkit-overflow-scrolling: touch;调用Safari原生滚动来支持弹性滚动，增加页面滚动的流畅度
### 通过max-height定义收起的最小高度和展开的最大高度，设置两者间的过渡切换
### scrollbar改变滚动条样式改变滚动条样式

#JS开发技巧
###
###使用String的toLowerCase()、toUpperCase()将字母转换为小写、大写其中复杂字符串只转换字母
###反斜杠是一个转义字符。 转义字符将特殊字符转换为字符串字符：转义字符 (\) 可以用于转义撇号，换行，引号，等其他特殊字符。
``` javascript
<!DOCTYPE html>
<html>
<head> 
<meta charset="utf-8"> 
<title>菜鸟教程(runoob.com)</title> 
</head>
<body>

<script>
var txt = "Hello World!";
document.write("<p>字体变大: " + txt.big() + "</p>");
document.write("<p>字体缩小: " + txt.small() + "</p>");
document.write("<p>字体加粗: " + txt.bold() + "</p>");
document.write("<p>斜体: " + txt.italics() + "</p>");
document.write("<p>固定定位: " + txt.fixed() + "</p>");
document.write("<p>加删除线: " + txt.strike() + "</p>");
document.write("<p>字体颜色: " + txt.fontcolor("green") + "</p>");
document.write("<p>字体大小: " + txt.fontsize(6) + "</p>");
document.write("<p>下标: " + txt.sub() + "</p>");
document.write("<p>上标: " + txt.sup() + "</p>");
document.write("<p>链接: " + txt.link("http://www.w3cschool.cc") + "</p>");
document.write("<p>闪动文本: " + txt.blink() + " (不能用于IE,Chrome,或者Safari)</p>");
</script>

</body>
</html>

```