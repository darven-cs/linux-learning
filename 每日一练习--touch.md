# touch 创建/修改文件

`touch touch（触碰）`

`创建空文件/修改时间戳` 创建新的空文件或更新现有文件的时间戳。

## 基本用法
```shell
# 创建空文件
touch newfile.txt

# 创建多个文件
touch file1.txt file2.txt file3.txt

# 更新文件的访问和修改时间
touch existing_file.txt
```

## 高级用法
```shell
# 只更新访问时间
touch -a file.txt

# 只更新修改时间
touch -m file.txt

# 设置特定时间
touch -d "2023-12-01 10:30:00" file.txt

# 参考其他文件的时间戳
touch -r reference_file.txt target_file.txt
```

## 示例
```shell
touch test.txt
ls -l test.txt
-rw-r--r-- 1 user user 0 Dec  1 10:30 test.txt

touch file1.txt file2.txt file3.txt
ls
file1.txt file2.txt file3.txt test.txt
```