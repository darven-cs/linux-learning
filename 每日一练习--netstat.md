# netstat 网络状态

`netstat network statistics`

`网络状态` 显示网络连接、路由表、接口统计等网络相关信息。

## 基本用法
```shell
# 显示所有连接
netstat

# 显示TCP连接
netstat -t

# 显示UDP连接
netstat -u

# 显示监听端口
netstat -l
```

## 高级用法
```shell
# 显示进程ID
netstat -p

# 显示详细信息
netstat -e

# 显示路由表
netstat -r

# 显示统计信息
netstat -s

# 以数字形式显示
netstat -n
```

## 示例
```shell
netstat -tuln
# 显示所有监听的TCP和UDP端口

netstat -tulpn
# 显示所有监听的TCP和UDP端口及对应的进程ID

netstat -r
# 显示路由表信息
```