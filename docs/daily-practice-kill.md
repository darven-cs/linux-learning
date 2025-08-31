# kill 终止进程

`kill kill（杀死）`

`终止进程` 向进程发送信号，通常用于终止进程。

## 基本用法
```shell
# 终止指定PID的进程
kill PID

# 强制终止进程
kill -9 PID

# 优雅地终止进程
kill -15 PID

# 挂起进程
kill -19 PID
```

## 高级用法
```shell
# 终止指定名称的进程
killall process_name

# 重新加载配置
kill -1 PID

# 暂停进程
kill -STOP PID

# 继续进程
kill -CONT PID
```

## 示例
```shell
kill 1234
# 终止PID为1234的进程

kill -9 5678
# 强制终止PID为5678的进程

killall firefox
# 终止所有firefox进程
```