# whoami 显示当前用户名

`whoami who am i`

`显示当前用户名` 显示当前有效用户的身份。

## 基本用法
```shell
# 显示当前用户名
whoami
```

## 高级用法
```shell
# 在脚本中使用
current_user=$(whoami)
echo "当前用户: $current_user"

# 与其他命令结合使用
if [ "$(whoami)" = "root" ]; then
  echo "您是root用户"
else
  echo "您是普通用户"
fi
```

## 示例
```shell
whoami
# 输出当前用户名，例如：john

whoami | wc -c
# 统计当前用户名的字符数
```