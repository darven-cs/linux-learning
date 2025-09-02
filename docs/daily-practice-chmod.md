# chmod 修改权限

`chmod change mode`

`修改权限` 修改文件或目录的访问权限。

## 基本用法
```shell
# 使用数字方式修改权限
chmod 755 filename

# 给文件所有者添加执行权限
chmod u+x filename

# 给组用户和其他用户移除写权限
chmod go-w filename

# 给所有用户添加读权限
chmod a+r filename
```

## 高级用法
```shell
# 递归修改目录及子目录权限
chmod -R 755 directory

# 参考其他文件设置权限
chmod --reference=file1 file2

# 使用符号方式设置权限
chmod u=rwx,g=rx,o=rx filename
```

## 常用权限
### 表示方式
````
1. 字符表示法
   -rwxr-xr--
第1位：文件类型（-普通文件，d目录，l链接等）
第2-4位：所有者权限(rwx)
第5-7位：同组用户权限(r-x)
第8-10位：其他用户权限(r--)

2. 数字表示法
   通过三位数字表示，每位数字是权限值的总和：
7 = 4+2+1 = rwx（读写执行）
6 = 4+2 = rw-（读写）
5 = 4+1 = r-x（读执行）
4 = r--（只读）
0 = ---（无权限）

例如：755 表示 rwxr-xr-x
````

### 权限类型
r (read, 读权限)：值为4
对文件：可以查看文件内容
对目录：可以列出目录内容

w (write, 写权限)：值为2
对文件：可以修改文件内容
对目录：可以在目录中创建、删除文件

x (execute, 执行权限)：值为1
对文件：可以执行该文件
对目录：可以进入该目录

### 常用组合
````
7 = 完全控制 (rwx)
6 = 读写 (rw-)
5 = 读执行 (r-x)
4 = 只读 (r--)
0 = 无权限 (---)


````

## 示例
```shell
chmod 644 document.txt
# 设置document.txt权限为rw-r--r--

chmod +x script.sh
# 给script.sh添加执行权限

chmod -R 755 /var/www/html
# 递归设置网站目录权限
```