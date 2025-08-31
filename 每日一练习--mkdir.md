# mkdir 创建目录

`mkdir make directory`

`创建目录` 创建一个或多个新目录。

## 基本用法
```shell
# 创建单个目录
mkdir new_folder

# 创建多个目录
mkdir dir1 dir2 dir3

# 创建嵌套目录（递归创建父目录）
mkdir -p path/to/deep/directory
```

## 高级用法
```shell
# 设置目录权限
mkdir -m 755 secure_dir

# 显示创建过程
mkdir -v new_directory

# 结合权限和递归创建
mkdir -p -m 755 project/{src,docs,tests}
```

## 示例
```shell
mkdir projects
ls
projects

mkdir -p work/2023/december
tree work
work
└── 2023
    └── december
```