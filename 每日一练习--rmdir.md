# rmdir 删除空目录

`rmdir remove directory`

`删除空目录` 删除一个或多个空目录。

## 基本用法
```shell
# 删除空目录
rmdir empty_folder

# 删除多个空目录
rmdir dir1 dir2 dir3

# 递归删除空的父目录
rmdir -p path/to/empty/directories
```

## 高级用法
```shell
# 忽略非空目录错误
rmdir --ignore-fail-on-non-empty directory

# 显示删除过程
rmdir -v directory
```

## 示例
```shell
mkdir test_dir
rmdir test_dir

mkdir -p deep/nested/empty
rmdir -p deep/nested/empty
# 删除 empty，然后 nested，最后 deep（如果都为空）
```