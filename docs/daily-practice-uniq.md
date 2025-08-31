# uniq 去除重复行

`uniq unique（唯一）`

`去重` 用于删除或报告文件中重复的行，通常与sort配合使用。

## 基本用法
```shell
# 去除相邻的重复行
uniq filename

# 只显示重复的行
uniq -d filename

# 只显示不重复的行
uniq -u filename

# 统计每行出现次数
uniq -c filename
```

## 高级用法
```shell
# 忽略前N个字段
uniq -f 2 filename

# 忽略前N个字符
uniq -s 5 filename

# 允许最大差异数
uniq -w 10 filename
```

## 示例
```shell
sort names.txt | uniq
# 对names.txt排序并去除重复行

uniq -c sorted_file.txt
# 显示sorted_file.txt中每行出现的次数

sort data.txt | uniq -d
# 显示data.txt中重复的行
```