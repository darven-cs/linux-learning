# echo 输出字符串

`echo echo（回声）`

`输出字符串/变量` 将文本或变量的值打印到标准输出（终端）。

## 基本用法
```shell
# 输出字符串
echo "Hello World"

# 输出变量
name="Tom"
echo "My name is $name"

# 不换行输出（默认会换行）
echo -n "Hello"
echo " World"

# 解析转义字符（换行、制表符等）
echo -e "Line1\nLine2\tTabbed"
```

## 高级用法
```shell
# 输出重定向到文件（覆盖）
echo "This is a test" > output.txt

# 输出追加到文件
echo "Add new line" >> output.txt

# 输出命令执行结果
echo "Today is $(date)"

# 输出环境变量（例如 PATH）
echo $PATH
```

## 示例
```shell
echo "linux"
linux

name="world"
echo "hello $name"
hello world
```