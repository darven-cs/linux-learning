# chmod 修改权限

`chmod change mode`

`修改权限` 修改文件或目录的访问权限。

## 基本用法
```shell
# 使用数字方式修改权限
chmod 755 filename

# 给文件所有者添加执行权限
chmod u+x filename

# 给组用户和其他用户移除写权限
chmod go-w filename

# 给所有用户添加读权限
chmod a+r filename
```

## 高级用法
```shell
# 递归修改目录及子目录权限
chmod -R 755 directory

# 参考其他文件设置权限
chmod --reference=file1 file2

# 使用符号方式设置权限
chmod u=rwx,g=rx,o=rx filename
```

## 示例
```shell
chmod 644 document.txt
# 设置document.txt权限为rw-r--r--

chmod +x script.sh
# 给script.sh添加执行权限

chmod -R 755 /var/www/html
# 递归设置网站目录权限
```