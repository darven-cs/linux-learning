# who 显示登录用户

`who who（谁）`

`显示当前登录用户` 显示当前登录系统的用户信息。

## 基本用法
```shell
# 显示当前登录用户
who

# 显示详细信息
who -u

# 显示运行级别的信息
who -r

# 显示登录进程ID
who -p
```

## 高级用法
```shell
# 显示标题行
who -H

# 显示空闲时间
who -T

# 从指定文件读取信息
who -f /var/log/wtmp

# 显示用户登录时间
who -l
```

## 示例
```shell
who
# 显示当前登录系统的用户

who -u
# 显示登录用户的详细信息，包括空闲时间和PID

who am i
# 显示当前终端的登录信息
```