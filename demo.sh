if [ -d $1 ]; then
  echo "错误：目录已存在"
  exit
else
  mkdir $1
  cd $1
  mkdir css js
  touch index.html css/style.css js/main.js
  echo "<!DOCTYPE>
<title>Hello</title>
<h1>Hi<h1>" > index.html
  echo "h1{color: red;}" > css/style.css
  echo "var string = 'Hello World'
alert(string)" > js/main.js
  echo "成功！"
  exit
fi