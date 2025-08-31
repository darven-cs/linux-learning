# grep 搜索文本

`grep global regular expression print`

`全局正则表达式搜索` 在文件中搜索指定的文本模式。

## 基本用法
```shell
# 在文件中搜索指定文本
grep "pattern" filename

# 忽略大小写搜索
grep -i "pattern" filename

# 显示行号
grep -n "pattern" filename

# 反向搜索（显示不匹配的行）
grep -v "pattern" filename
```

## 高级用法
```shell
# 递归搜索目录中的所有文件
grep -r "pattern" directory/

# 只显示匹配的文件名
grep -l "pattern" *

# 使用正则表达式
grep "^start" filename

# 显示匹配行的前后几行
grep -A 3 -B 2 "pattern" filename
```

## 示例
```shell
grep "error" /var/log/syslog
# 在syslog中搜索包含"error"的行

grep -i "root" /etc/passwd
# 在passwd文件中忽略大小写搜索"root"

grep -r "function_name" /home/user/project/
# 在项目目录中递归搜索"function_name"
```