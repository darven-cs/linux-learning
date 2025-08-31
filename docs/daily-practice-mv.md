# mv 移动/重命名

`mv move`

`移动/重命名` 移动文件/目录到新位置或重命名。

## 基本用法
```shell
# 重命名文件
mv oldname.txt newname.txt

# 移动文件到目录
mv file.txt /path/to/directory/

# 移动多个文件
mv file1.txt file2.txt /destination/

# 移动目录
mv old_directory new_directory
```

## 高级用法
```shell
# 移动前确认覆盖
mv -i source.txt destination.txt

# 不覆盖现有文件
mv -n source.txt destination.txt

# 只在源文件较新时才移动
mv -u source.txt destination.txt

# 显示移动过程
mv -v oldfile.txt newfile.txt

# 备份被覆盖的文件
mv --backup=numbered source.txt destination.txt
```

## 示例
```shell
mv report.txt final_report.txt

mv *.log /var/log/archive/

mv project_old/ project_2023/
mv: 'project_old/' -> 'project_2023/'
```