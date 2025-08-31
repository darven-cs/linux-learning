# more 分页查看文件

`more more（更多）`

`分页查看文件` 用于分页查看文件内容，支持向前翻页。

## 基本用法
```shell
# 分页查看文件内容
more filename

# 显示行号
more -n filename

# 设置每页显示的行数
more -10 filename
```

## 高级用法
```shell
# 从指定行开始显示
more +10 filename

# 搜索指定模式
more +/pattern filename

# 显示多个文件
more file1 file2
```

## 示例
```shell
more /etc/passwd
# 显示文件内容，按空格键翻页，按q键退出

more -n example.txt
# 显示文件内容和行号
```