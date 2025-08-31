# pwd 显示当前路径

`pwd print working directory`

`显示当前路径` 显示当前工作目录的完整路径。

## 基本用法
```shell
# 显示当前目录
pwd

# 显示物理路径（解析符号链接）
pwd -P

# 显示逻辑路径（保留符号链接）
pwd -L
```

## 高级用法
```shell
# 在脚本中获取当前目录
current_dir=$(pwd)
echo "Current directory is: $current_dir"

# 结合其他命令使用
echo "Working in: $(pwd)"
```

## 示例
```shell
pwd
/home/user/Documents

cd /var/log
pwd
/var/log
```