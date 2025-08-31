# ps 查看进程

`ps process status`

`查看进程` 显示当前运行的进程信息。

## 基本用法
```shell
# 显示当前终端的进程
ps

# 显示所有进程的详细信息
ps -ef

# 显示所有进程（BSD格式）
ps aux

# 显示进程树
ps -ejH
```

## 高级用法
```shell
# 显示指定用户的进程
ps -u username

# 显示指定进程ID的信息
ps -p PID

# 显示进程的线程信息
ps -eLf

# 自定义输出格式
ps -eo pid,ppid,cmd,%cpu,%mem
```

## 示例
```shell
ps aux | grep nginx
# 查找nginx相关进程

ps -ef | head -10
# 显示前10个进程信息

ps -u john
# 显示john用户的所有进程
```