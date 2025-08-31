# rm 删除文件/目录

`rm remove`

`删除文件/目录` 删除文件和目录（小心使用）。

## 基本用法
```shell
# 删除文件
rm file.txt

# 删除多个文件
rm file1.txt file2.txt file3.txt

# 删除目录及其内容（递归）
rm -r directory

# 强制删除（不提示确认）
rm -f file.txt
```

## 高级用法
```shell
# 递归强制删除
rm -rf directory

# 删除前确认每个文件
rm -i *.txt

# 显示删除过程
rm -v file.txt

# 删除以 . 开头的文件（隐藏文件）
rm -f .*
```

## 示例
```shell
rm test.txt

rm -r old_project/

rm -i *.log
rm: remove regular file 'app.log'? y
rm: remove regular file 'error.log'? n
```