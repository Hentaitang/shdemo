var fs = require('fs')
var dirName = process.argv[2]

if (fs.existsSync('./' + dirName)){
  console.log("错误：目录已存在")
  process.exit;
}else{
  fs.mkdirSync("./" + dirName)
  process.chdir("./" + dirName)
  fs.mkdirSync("css")
  fs.mkdirSync("js")
  fs.writeFileSync("./index.html", "<!DOCTYPE> \n<title>Hello</title> \n<h1>Hi</h1>")
  fs.writeFileSync("css/style.css","h1{color: red;}")
  fs.writeFileSync("js/main.js","var string = 'Hello World' \nalert(string)")
  console.log("成功！")
  process.exit}