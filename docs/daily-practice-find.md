# find 查找文件

`find find（查找）`

`查找文件/目录` 在指定目录下查找文件或目录。

## 基本用法
```shell
# 按文件名查找
find /path -name "filename"

# 按文件类型查找
find /path -type f

# 按目录类型查找
find /path -type d
```

## 高级用法
```shell
# 按大小查找文件
find /path -size +100M

# 按修改时间查找
find /path -mtime -7

# 按权限查找
find /path -perm 755

# 执行操作
find /path -name "*.txt" -exec rm {} \;
```

## 示例
```shell
find /home -name "*.txt"
# 在/home目录下查找所有txt文件

find /var/log -type f -mtime -1
# 查找/var/log目录下1天内修改过的文件

find /tmp -size +10M
# 查找/tmp目录下大于10MB的文件
```