# du 查看磁盘占用

`du disk usage`

`查看磁盘占用` 显示目录或文件的磁盘使用情况。

## 基本用法
```shell
# 显示当前目录磁盘使用情况
du

# 以人类可读格式显示
du -h

# 显示指定目录磁盘使用情况
du -h /var/log

# 只显示总计
du -s directory
```

## 高级用法
```shell
# 显示所有文件和目录
du -a

# 限制显示深度
du -d 2

# 排除指定文件
du --exclude="*.log"

# 显示最大的N个目录
du -h --max-depth=1 | sort -hr | head -10
```

## 示例
```shell
du -h
# 以人类可读格式显示当前目录磁盘使用情况

du -sh /var
# 显示/var目录的总磁盘使用情况

du -h --max-depth=1 /home
# 显示/home下各子目录的磁盘使用情况
```