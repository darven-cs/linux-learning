# scp 远程拷贝

`scp secure copy`

`远程拷贝` 在本地和远程主机之间安全地复制文件。

## 基本用法
```shell
# 从本地复制文件到远程主机
scp file.txt user@hostname:/path/to/destination

# 从远程主机复制文件到本地
scp user@hostname:/path/to/file.txt .

# 复制整个目录
scp -r directory/ user@hostname:/path/to/destination
```

## 高级用法
```shell
# 指定SSH端口
scp -P 2222 file.txt user@hostname:/path

# 保留文件属性
scp -p file.txt user@hostname:/path

# 显示详细信息
scp -v file.txt user@hostname:/path

# 限制带宽
scp -l 1000 file.txt user@hostname:/path
```

## 示例
```shell
scp document.pdf john@server.example.com:/home/john/
# 将document.pdf复制到远程服务器john用户的主目录

scp -r /var/www/html/ admin@server:/backup/
# 将整个网站目录复制到远程服务器的备份目录

scp user@server1:/file.txt user@server2:/destination/
# 在两个远程服务器之间复制文件
```