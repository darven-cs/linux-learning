# chgrp 修改用户组

`chgrp change group`

`修改用户组` 修改文件或目录的所属组。

## 基本用法
```shell
# 修改文件所属组
chgrp group filename

# 递归修改目录及子目录所属组
chgrp -R group directory

# 显示详细信息
chgrp -v group filename
```

## 高级用法
```shell
# 根据指定文件修改组
chgrp --reference=file1 file2

# 使用组ID修改
chgrp 1001 filename

# 从文件读取组信息
chgrp --from-file=groups.txt
```

## 示例
```shell
chgrp developers project.txt
# 将project.txt的所属组改为developers

chgrp -R www-data /var/www/html
# 递归修改网站目录的所属组

chgrp --reference=reference.txt target.txt
# 根据reference.txt设置target.txt的所属组
```