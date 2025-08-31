# tail 查看文件尾部

`tail tail（尾部）`

`查看文件后几行/动态监控日志` 显示文件的末尾部分，默认显示后10行，常用于查看日志文件。

## 基本用法
```shell
# 显示文件后10行
tail filename

# 显示文件后N行
tail -n 20 filename

# 显示文件后N个字节
tail -c 100 filename
```

## 高级用法
```shell
# 实时监控文件变化
tail -f filename

# 实时监控并指定刷新间隔
tail -f --sleep-interval=2 filename

# 从第N行开始显示到文件末尾
tail -n +100 filename

# 显示多个文件
tail file1 file2
```

## 示例
```shell
tail /var/log/syslog
# 显示syslog文件的后10行

tail -f /var/log/nginx/access.log
# 实时监控nginx访问日志的变化

tail -n 20 example.txt
# 显示example.txt文件的后20行
```