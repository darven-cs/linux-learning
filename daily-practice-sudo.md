# sudo 以超级用户执行命令

`sudo superuser do`

`以超级用户执行命令` 以其他用户（通常是root）身份执行命令。

## 基本用法
```shell
# 以root身份执行命令
sudo command

# 以指定用户身份执行命令
sudo -u username command

# 刷新sudo凭证时间
sudo -v

# 放弃sudo凭证
sudo -k
```

## 高级用法
```shell
# 编辑sudoers文件
sudo visudo

# 列出用户权限
sudo -l

# 以root身份启动shell
sudo -i

# 保持凭证一段时间
sudo -s
```

## 示例
```shell
sudo apt update
# 以root身份更新软件包列表

sudo -u john cat /home/john/private.txt
# 以john身份查看其私有文件

sudo systemctl restart nginx
# 以root身份重启nginx服务
```