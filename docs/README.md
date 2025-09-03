# 描述
用于学习linux指令，主打就是熟能生巧，了解每个指令作用

# 网页
https://alfxue.github.io/linux-learning/

# 指南

## 基础指令

| 命令        | 英文单词/缩写                 | 含义          | 链接     |
| --------- | ----------------------- | ----------- |--------|
| **ls**    | list                    | 列出目录内容      | [ls](./daily-practice-ls.md) |
| **cd**    | change directory        | 切换目录        | [cd](./daily-practice-cd.md) |
| **pwd**   | print working directory | 显示当前路径      | [pwd](./daily-practice-pwd.md) |
| **echo**  | echo（回声）                | 输出字符串/变量    | [echo](./daily-practice-echo.md) |
| **cat**   | concatenate             | 查看文件内容/连接文件 | [cat](./daily-practice-cat.md) |
| **touch** | touch（触碰）               | 创建空文件/修改时间戳 | [touch](./daily-practice-touch.md) |
| **mkdir** | make directory          | 创建目录        | [mkdir](./daily-practice-mkdir.md) |
| **rmdir** | remove directory        | 删除空目录       | [rmdir](./daily-practice-rmdir.md) |
| **rm**    | remove                  | 删除文件/目录     | [rm](./daily-practice-rm.md) |
| **cp**    | copy                    | 复制文件/目录     | [cp](./daily-practice-cp.md) |
| **mv**    | move                    | 移动/重命名      | [mv](./daily-practice-mv.md) |

## 文件查看与处理

| 命令       | 英文含义                            | 功能                | 链接 |
| -------- | ------------------------------- | ----------------- | --- |
| **more** | more（更多）                        | 分页查看文件            | [more](./daily-practice-more.md) |
| **less** | less（更少）                        | 分页查看（比 `more` 强大） | [less](./daily-practice-less.md) |
| **head** | head（头部）                        | 查看前几行             | [head](./daily-practice-head.md) |
| **tail** | tail（尾部）                        | 查看后几行/动态监控日志      | [tail](./daily-practice-tail.md) |
| **grep** | global regular expression print | 全局正则表达式搜索         | [grep](./daily-practice-grep.md) |
| **find** | find（查找）                        | 查找文件/目录           | [find](./daily-practice-find.md) |
| **wc**   | word count                      | 统计行数、单词数、字节数      | [wc](./daily-practice-wc.md) |
| **sort** | sort（排序）                        | 排序内容              | [sort](./daily-practice-sort.md) |
| **uniq** | unique（唯一）                      | 去重                | [uniq](./daily-practice-uniq.md) |

## 权限与用户

| 命令         | 英文含义            | 功能        | 链接 |
| ---------- | --------------- | --------- | --- |
| **chmod**  | change mode     | 修改权限      | [chmod](./daily-practice-chmod.md) |
| **chown**  | change owner    | 修改所有者     | [chown](./daily-practice-chown.md) |
| **chgrp**  | change group    | 修改用户组     | [chgrp](./daily-practice-chgrp.md) |
| **who**    | who（谁）          | 显示当前登录用户  | [who](./daily-practice-who.md) |
| **whoami** | who am i        | 显示当前用户名   | [whoami](./daily-practice-whoami.md) |
| **su**     | substitute user | 切换用户      | [su](./daily-practice-su.md) |
| **sudo**   | superuser do    | 以超级用户执行命令 | [sudo](./daily-practice-sudo.md) |
| **passwd** | password        | 修改密码      | [passwd](./daily-practice-passwd.md) |

## 系统与进程

| 命令         | 英文含义           | 功能       | 链接 |
| ---------- | -------------- | -------- | --- |
| **ps**     | process status | 查看进程     | [ps](./daily-practice-ps.md) |
| **top**    | top（顶部）        | 动态显示进程   | [top](./daily-practice-top.md) |
| **kill**   | kill（杀死）       | 终止进程     | [kill](./daily-practice-kill.md) |
| **df**     | disk free      | 查看磁盘空间   | [df](./daily-practice-df.md) |
| **du**     | disk usage     | 查看磁盘占用   | [du](./daily-practice-du.md) |
| **free**   | free（空闲）       | 查看内存使用情况 | [free](./daily-practice-free.md) |
| **uptime** | uptime（运行时间）   | 系统运行时长   | [uptime](./daily-practice-uptime.md) |
| **uname**  | unix name      | 显示系统信息   | [uname](./daily-practice-uname.md) |
| **date**   | date（日期）       | 显示时间日期   | [date](./daily-practice-date.md) |
| **cal**    | calendar       | 显示日历     | [cal](./daily-practice-cal.md) |

## 网络

| 命令              | 英文含义                   | 功能      | 链接 |
| --------------- | ---------------------- | ------- | --- |
| **ping**        | ping（声纳）               | 测试网络连通性 | [ping](./daily-practice-ping.md) |
| **curl**        | client URL             | 发送网络请求  | [curl](./daily-practice-curl.md) |
| **wget**        | web get                | 下载文件    | [wget](./daily-practice-wget.md) |
| **ssh**         | secure shell           | 远程登录    | [ssh](./daily-practice-ssh.md) |
| **scp**         | secure copy            | 远程拷贝    | [scp](./daily-practice-scp.md) |
| **ftp**         | file transfer protocol | 文件传输    | [ftp](./daily-practice-ftp.md) |
| **netstat**     | network statistics     | 网络状态    | [netstat](./daily-practice-netstat.md) |
| **ifconfig/ip** | interface config       | 网络接口配置  | [ifconfig](./daily-practice-ifconfig.md) |

## 工具
| 命令              | 英文含义                   | 功能      | 链接 |
| --------------- | ---------------------- | ------- | --- |
| **tar**         | tape archive            | 压缩和解压缩文件 | [tar](./daily-practice-tar.md) |
