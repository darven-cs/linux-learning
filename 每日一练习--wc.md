# wc 统计文件信息

`wc word count`

`统计行数、单词数、字节数` 统计文件的行数、单词数和字节数。

## 基本用法
```shell
# 统计文件的行数、单词数、字节数
wc filename

# 只统计行数
wc -l filename

# 只统计单词数
wc -w filename

# 只统计字节数
wc -c filename
```

## 高级用法
```shell
# 统计字符数（包括换行符）
wc -m filename

# 统计最长行的长度
wc -L filename

# 统计多个文件
wc file1 file2

# 从标准输入读取
cat filename | wc
```

## 示例
```shell
wc /etc/passwd
# 显示passwd文件的行数、单词数、字节数

wc -l /var/log/syslog
# 显示syslog文件的行数

find /etc -name "*.conf" | wc -l
# 统计/etc目录下.conf文件的数量
```