# free 查看内存使用情况

`free free（空闲）`

`查看内存使用情况` 显示系统中物理内存和交换空间的使用情况。

## 基本用法
```shell
# 显示内存使用情况
free

# 以人类可读格式显示
free -h

# 以KB为单位显示
free -k

# 以MB为单位显示
free -m
```

## 高级用法
```shell
# 持续显示内存使用情况
free -s 2

# 显示总计行
free -t

# 以SI单位显示
free --si

# 显示低版本格式
free -o
```

## 示例
```shell
free -h
# 以人类可读格式显示内存使用情况

free -s 3
# 每3秒刷新一次内存使用情况

free -tm
# 以MB为单位显示内存使用情况，并显示总计
```