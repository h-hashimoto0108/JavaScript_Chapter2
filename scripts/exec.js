var p = /http(s)?:\/\/([\w-]+\.)+[\w-]+(\/[\w- .\/?%&=]*)?/gi;
var str = 'サポートサイトはhttp://www.wings.msn.to/です'
str += 'サンプル紹介サイトHTTP://www.web-deli.comもよろしく';
var result = p.exec(str);
for(var i=0, len=result.length;i<len;i++){
  console.log(result[i]);
}
