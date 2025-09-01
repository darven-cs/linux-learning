# tar 打包和压缩文件

`tar tape archive`

`打包和压缩文件` 将多个文件和目录打包成一个归档文件，并可选择性地进行压缩。

## 基本用法
```shell
# 创建 tar 归档文件
tar -cf archive.tar file1 file2 directory/

# 解压 tar 归档文件
tar -xf archive.tar

# 列出归档文件内容
tar -tf archive.tar
```

## 常用选项
```shell
# 创建并 gzip 压缩
tar -czf archive.tar.gz file1 file2 directory/

# 解压 gzip 压缩的归档文件
tar -xzf archive.tar.gz

# 创建并 bzip2 压缩
tar -cjf archive.tar.bz2 file1 file2 directory/

# 解压 bzip2 压缩的归档文件
tar -xjf archive.tar.bz2

# 创建并 xz 压缩
tar -cJf archive.tar.xz file1 file2 directory/

# 解压 xz 压缩的归档文件
tar -xJf archive.tar.xz
```

## 高级用法
```shell
# 显示详细过程
tar -czvf archive.tar.gz file1 file2 directory/

# 解压到指定目录
tar -xzf archive.tar.gz -C /path/to/destination/

# 排除特定文件
tar -czf archive.tar.gz --exclude='*.log' directory/

# 只处理比指定文件新的文件
tar -czf archive.tar.gz --newer file1 directory/

# 从文件列表创建归档
tar -czf archive.tar.gz -T filelist.txt

# 追加文件到现有归档
tar -rf archive.tar newfile

# 比较归档文件和文件系统
tar -df archive.tar directory/
```

## 示例
```shell
# 备份整个 home 目录
tar -czf home_backup_$(date +%Y%m%d).tar.gz /home/username/

# 创建项目备份并排除临时文件
tar -czf project_backup.tar.gz --exclude='*.tmp' --exclude='node_modules' /path/to/project/

# 解压到指定目录
tar -xzf project_backup.tar.gz -C /tmp/

# 查看归档内容
tar -tzf project_backup.tar.gz

# 从远程服务器下载并解压
curl -s https://example.com/archive.tar.gz | tar -xzf -

# 创建多卷归档（每卷 100MB）
tar -czf - /large/data | split -b 100M - archive.tar.gz.

# 恢复多卷归档
cat archive.tar.gz.* | tar -xzf -
```