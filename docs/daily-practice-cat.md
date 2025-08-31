# cat 查看文件内容

`cat concatenate`

`查看文件内容/连接文件` 显示文件内容或连接多个文件。

## 基本用法
```shell
# 查看文件内容
cat file.txt

# 查看多个文件
cat file1.txt file2.txt

# 连接文件并输出到新文件
cat file1.txt file2.txt > combined.txt

# 显示行号
cat -n file.txt
```

## 高级用法
```shell
# 显示非打印字符
cat -A file.txt

# 压缩连续空行为单行
cat -s file.txt

# 在行末显示 $
cat -E file.txt

# 从标准输入创建文件
cat > newfile.txt
# 输入内容，按 Ctrl+D 结束
```

## 示例
```shell
cat hello.txt
Hello World
This is a test file.

cat -n hello.txt
1  Hello World
2  This is a test file.
```