# su 切换用户

`su substitute user`

`切换用户` 切换到其他用户身份运行shell。

## 基本用法
```shell
# 切换到root用户
su

# 切换到指定用户
su username

# 切换用户并执行登录shell
su - username

# 执行单个命令后返回原用户
su -c "command" username
```

## 高级用法
```shell
# 保持环境变量
su -m username

# 指定shell
su -s /bin/sh username

# 显示当前会话信息
su --session-command="command" username
```

## 示例
```shell
su -
# 切换到root用户并加载其环境变量

su - john
# 切换到john用户

su -c "ls -la /root" root
# 以root身份执行命令后返回原用户
```