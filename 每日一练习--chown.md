# chown 修改所有者

`chown change owner`

`修改所有者` 修改文件或目录的所有者和所属组。

## 基本用法
```shell
# 修改文件所有者
chown user filename

# 修改文件所有者和组
chown user:group filename

# 只修改文件所属组
chown :group filename

# 递归修改目录及子目录所有者
chown -R user directory
```

## 高级用法
```shell
# 参考其他文件设置所有者
chown --reference=file1 file2

# 显示详细信息
chown -v user filename

# 从文件读取所有者信息
chown --from-file=owners.txt
```

## 示例
```shell
chown john document.txt
# 将document.txt的所有者改为john

chown john:developers project/
# 将project目录的所有者改为john，组改为developers

chown -R www-data:www-data /var/www/html
# 递归修改网站目录的所有者和组
```