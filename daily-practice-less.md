# less 分页查看文件

`less less（更少）`

`分页查看文件` 用于分页查看文件内容，比more更强大，支持向前和向后翻页。

## 基本用法
```shell
# 分页查看文件内容
less filename

# 显示行号
less -N filename

# 忽略大小写搜索
less -i filename
```

## 高级用法
```shell
# 从指定行开始显示
less +10 filename

# 搜索指定模式
less +/pattern filename

# 显示多个文件
less file1 file2
```

## 示例
```shell
less /etc/passwd
# 显示文件内容，支持上下键滚动，/搜索，?反向搜索，q键退出

less -N example.txt
# 显示文件内容和行号
```