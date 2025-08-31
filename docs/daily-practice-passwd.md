# passwd 修改密码

`passwd password`

`修改密码` 修改用户账户的密码。

## 基本用法
```shell
# 修改当前用户密码
passwd

# 修改指定用户密码（需要root权限）
passwd username

# 删除用户密码（设为空密码）
passwd -d username

# 锁定用户账户
passwd -l username
```

## 高级用法
```shell
# 解锁用户账户
passwd -u username

# 设置密码过期时间
passwd -e username

# 设置密码最小长度
passwd -n 7 username

# 设置密码最大有效期
passwd -x 90 username
```

## 示例
```shell
passwd
# 修改当前用户密码，系统会提示输入新密码

sudo passwd john
# 修改john用户的密码（需要管理员权限）

passwd -l olduser
# 锁定olduser账户
```