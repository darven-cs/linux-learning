# cd 切换目录

`cd change directory`

`切换目录` 改变当前工作目录到指定目录。

## 基本用法
```shell
# 切换到指定目录
cd /home/user

# 切换到上级目录
cd ..

# 切换到上上级目录
cd ../..

# 切换到用户主目录
cd ~
cd
```

## 高级用法
```shell
# 切换到上一个访问的目录
cd -

# 切换到根目录
cd /

# 使用相对路径
cd ./Documents/projects

# 使用环境变量
cd $HOME
```

## 示例
```shell
pwd
/home/user

cd Documents
pwd
/home/user/Documents

cd ..
pwd
/home/user
```