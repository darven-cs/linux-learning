## screen 会话管理

`screen` 是一个终端多路复用器，允许用户在一个终端窗口中运行多个 shell 会话，并可以在会话之间切换、分离和重新连接。

### 基本用法
```shell
# 创建一个新的 screen 会话
screen -S session_name

# 列出所有活动的 screen 会话
screen -ls

# 连接到一个已存在的 screen 会话
screen -r session_name

# 分离当前的 screen 会话（在会话内部执行）
Ctrl+A, D
```


### 高级用法
```shell
# 创建一个后台运行的 screen 会话（不立即连接）
screen -dmS session_name

# 连接到已存在的 screen 会话，如果没有则创建新的
screen -RR session_name

# 杀死指定的 screen 会话
screen -S session_name -X quit

# 在 screen 会话中创建新窗口
Ctrl+A, C
```


### 示例
```shell
screen -S myproject
# 创建一个名为 myproject 的新 screen 会话

screen -ls
# 查看当前所有 screen 会话，显示类似：12345.myproject (Attached/Detached)

screen -r myproject
# 连接到名为 myproject 的 screen 会话

screen -dmS backup_job
# 创建一个名为 backup_job 的后台 screen 会话，用于运行长时间任务
```
