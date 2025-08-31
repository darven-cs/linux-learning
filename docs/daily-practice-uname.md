# uname 显示系统信息

`uname unix name`

`显示系统信息` 显示系统相关信息，如内核名称、版本等。

## 基本用法
```shell
# 显示内核名称
uname

# 显示所有系统信息
uname -a

# 显示内核版本
uname -r

# 显示系统架构
uname -m
```

## 高级用法
```shell
# 显示网络节点主机名
uname -n

# 显示硬件平台
uname -i

# 显示操作系统
uname -o

# 显示处理器类型
uname -p
```

## 示例
```shell
uname
# 显示内核名称，例如：Linux

uname -a
# 显示所有系统信息

uname -r
# 显示内核版本，例如：5.4.0-42-generic
```