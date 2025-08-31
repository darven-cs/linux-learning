# top 动态显示进程

`top top（顶部）`

`动态显示进程` 实时显示系统中各个进程的资源占用情况。

## 基本用法
```shell
# 显示进程信息
top

# 显示指定数量的进程
top -n 20

# 按CPU使用率排序
top -o %CPU

# 按内存使用率排序
top -o %MEM
```

## 高级用法
```shell
# 显示特定用户的进程
top -u username

# 设置刷新间隔
top -d 2

# 显示进程树
top -H

# 批处理模式
top -b
```

## 示例
```shell
top
# 实时显示系统进程信息，按q键退出

top -u www-data
# 只显示www-data用户的进程

top -b -n 1 > processes.txt
# 将进程信息保存到文件
```