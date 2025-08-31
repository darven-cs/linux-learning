# head 查看文件头部

`head head（头部）`

`查看文件前几行` 显示文件的开头部分，默认显示前10行。

## 基本用法
```shell
# 显示文件前10行
head filename

# 显示文件前N行
head -n 20 filename

# 显示文件前N个字节
head -c 100 filename
```

## 高级用法
```shell
# 显示多个文件的头部
head file1 file2

# 显示文件名标识
head -v file1 file2

# 静默模式，不显示错误信息
head -q file1 file2
```

## 示例
```shell
head /etc/passwd
# 显示passwd文件的前10行

head -n 5 /etc/passwd
# 显示passwd文件的前5行

head -c 50 example.txt
# 显示example.txt文件的前50个字节
```