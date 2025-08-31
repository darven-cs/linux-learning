# ifconfig 网络接口配置

`ifconfig interface config`

`网络接口配置` 配置和显示网络接口参数。

## 基本用法
```shell
# 显示所有网络接口信息
ifconfig

# 显示指定网络接口信息
ifconfig eth0

# 启用网络接口
ifconfig eth0 up

# 禁用网络接口
ifconfig eth0 down
```

## 高级用法
```shell
# 设置IP地址
ifconfig eth0 192.168.1.100

# 设置子网掩码
ifconfig eth0 192.168.1.100 netmask 255.255.255.0

# 设置MTU
ifconfig eth0 mtu 1500

# 启用或禁用ARP协议
ifconfig eth0 arp
ifconfig eth0 -arp
```

## 示例
```shell
ifconfig
# 显示所有网络接口的配置信息

ifconfig eth0 192.168.1.100 netmask 255.255.255.0
# 为eth0接口设置IP地址和子网掩码

ifconfig eth0 up
# 启用eth0网络接口
```