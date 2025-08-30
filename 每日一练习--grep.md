# 介绍
> `文本内容搜索`在文件或输出结果中查找指定的字符串或正则表达式。

# 基本用法

```
# 在文件中搜索
grep "hello" file.txt

# 忽略大小写搜索
grep -i "hello" file.txt

# 显示行号
grep -n "hello" file.txt

# 统计匹配的次数
grep -c "hello" file.txt

# 显示不包含匹配的行
grep -v "hello" file.txt
```

# 高级用法

````
# 匹配以abc开头的行
grep "^abc" file.txt

# 匹配以xyz结尾的行
grep "xyz$" file.txt

# 匹配包含数字的行
grep "[0-9]" file.txt

````

# 示例

````
grep "linux" file.txt 
linux 
grep "hello" file.txt 
hello wolrd 
````