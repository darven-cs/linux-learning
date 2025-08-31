# ping 测试网络连通性

`ping ping（声纳）`

`测试网络连通性` 测试与目标主机的网络连通性。

## 基本用法
```shell
# 测试与目标主机的连通性
ping hostname

# 指定发送ICMP包的数量
ping -c 4 hostname

# 指定发送间隔（秒）
ping -i 2 hostname
```

## 高级用法
```shell
# 指定超时时间
ping -W 5 hostname

# 指定数据包大小
ping -s 1024 hostname

# 静默模式
ping -q hostname

# IPv6模式
ping -6 hostname
```

## 示例
```shell
ping google.com
# 测试与google.com的连通性

ping -c 4 8.8.8.8
# 向8.8.8.8发送4个ICMP包

ping -i 0.5 localhost
# 每0.5秒向本地主机发送一个ICMP包
```