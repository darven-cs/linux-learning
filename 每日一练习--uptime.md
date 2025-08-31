# uptime 系统运行时长

`uptime uptime（运行时间）`

`系统运行时长` 显示系统运行时间以及当前登录用户数和系统负载。

## 基本用法
```shell
# 显示系统运行时间
uptime
```

## 高级用法
```shell
# 以更精确的格式显示
uptime -p

# 显示系统运行时间（秒）
uptime -s

# 显示帮助信息
uptime -h
```

## 示例
```shell
uptime
# 显示系统运行时间，例如：10:30:45 up 2 days, 5:15, 3 users, load average: 0.05, 0.10, 0.05

uptime -p
# 显示运行时间，例如：up 2 days, 5 hours, 15 minutes
```