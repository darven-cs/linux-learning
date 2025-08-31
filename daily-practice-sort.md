# sort 排序文件内容

`sort sort（排序）`

`排序内容` 对文件内容进行排序。

## 基本用法
```shell
# 对文件内容进行排序
sort filename

# 按数字排序
sort -n filename

# 逆序排序
sort -r filename

# 去除重复行后排序
sort -u filename
```

## 高级用法
```shell
# 忽略大小写排序
sort -f filename

# 按指定列排序
sort -k 2 filename

# 按月份排序
sort -M filename

# 指定分隔符
sort -t ':' -k 3 filename
```

## 示例
```shell
sort names.txt
# 对names.txt文件内容按字母顺序排序

sort -n numbers.txt
# 对numbers.txt文件内容按数字大小排序

sort -k 2 -t ':' /etc/passwd
# 以:为分隔符，按/etc/passwd文件第2列排序
```