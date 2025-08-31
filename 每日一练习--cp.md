# cp 复制文件/目录

`cp copy`

`复制文件/目录` 复制文件或目录到指定位置。

## 基本用法
```shell
# 复制文件
cp source.txt destination.txt

# 复制到目录
cp file.txt /path/to/directory/

# 复制多个文件到目录
cp file1.txt file2.txt /destination/

# 递归复制目录
cp -r source_dir destination_dir
```

## 高级用法
```shell
# 保持原有属性（权限、时间戳等）
cp -p file.txt backup.txt

# 只在源文件较新时才复制
cp -u source.txt destination.txt

# 复制前确认覆盖
cp -i source.txt existing_file.txt

# 显示复制过程
cp -v source.txt destination.txt

# 创建硬链接而非复制
cp -l source.txt link.txt
```

## 示例
```shell
cp document.txt backup.txt

cp -r project/ project_backup/

cp *.txt /backup/directory/
```