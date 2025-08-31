# df 查看磁盘空间

`df disk free`

`查看磁盘空间` 显示文件系统的磁盘空间使用情况。

## 基本用法
```shell
# 显示所有挂载的文件系统磁盘使用情况
df

# 以人类可读格式显示
df -h

# 显示inode使用情况
df -i

# 显示指定文件系统
df /
```

## 高级用法
```shell
# 显示文件系统类型
df -T

# 显示总计信息
df -t

# 排除指定文件系统类型
df -x tmpfs

# 以POSIX格式显示
df -P
```

## 示例
```shell
df -h
# 以人类可读格式显示磁盘使用情况

df -i
# 显示inode使用情况

df -h /home
# 显示/home分区的磁盘使用情况
```