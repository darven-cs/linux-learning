# ssh 远程登录

`ssh secure shell`

`远程登录` 通过加密通道连接到远程服务器。

## 基本用法
```shell
# 连接到远程服务器
ssh user@hostname

# 指定端口连接
ssh -p 2222 user@hostname

# 执行远程命令
ssh user@hostname "command"
```

## 高级用法
```shell
# 启用X11转发
ssh -X user@hostname

# 启用代理转发
ssh -A user@hostname

# 指定私钥文件
ssh -i ~/.ssh/private_key user@hostname

# 后台运行
ssh -f user@hostname
```

## 示例
```shell
ssh john@192.168.1.100
# 以john用户身份连接到192.168.1.100

ssh -p 2222 admin@server.example.com
# 使用2222端口连接服务器

ssh user@server "ls -la"
# 在远程服务器上执行命令并显示结果
```