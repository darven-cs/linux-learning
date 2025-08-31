# ls 列出目录

`ls list`

`列出目录内容` 显示当前目录或指定目录中的文件和子目录。

## 基本用法
```shell
# 列出当前目录内容
ls

# 列出指定目录内容
ls /home/user

# 显示详细信息（长格式）
ls -l

# 显示隐藏文件
ls -a

# 组合选项：显示所有文件的详细信息
ls -la
```

## 高级用法
```shell
# 按修改时间排序
ls -lt

# 按文件大小排序
ls -lS

# 递归显示子目录
ls -R

# 以人类可读格式显示文件大小
ls -lh

# 只显示目录
ls -d */
```

## 示例
```shell
ls
Desktop Documents Downloads Music

ls -la
total 32
drwxr-xr-x  5 user user 4096 Dec  1 10:30 .
drwxr-xr-x  3 root root 4096 Nov 30 09:15 ..
-rw-r--r--  1 user user  220 Nov 30 09:15 .bash_logout
drwxr-xr-x  2 user user 4096 Dec  1 10:30 Desktop
```
