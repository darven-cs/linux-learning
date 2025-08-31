# ftp 文件传输

`ftp file transfer protocol`

`文件传输` 使用FTP协议在本地和远程主机之间传输文件。

## 基本用法
```shell
# 连接到FTP服务器
ftp hostname

# 登录FTP服务器
ftp user@hostname

# 匿名登录
ftp anonymous@hostname
```

## 高级用法
```shell
# 指定端口连接
ftp hostname port

# 使用被动模式
ftp -p hostname

# 禁用交互模式
ftp -n hostname

# 执行FTP命令脚本
ftp -s:script.txt hostname
```

## 示例
```shell
ftp ftp.example.com
# 连接到FTP服务器
# ftp> user username
# ftp> password
# ftp> ls
# ftp> get file.txt
# ftp> put localfile.txt
# ftp> quit

ftp anonymous@ftp.example.com
# 匿名登录FTP服务器
```