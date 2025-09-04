# systemctl 系统的启动，停止，自启动，状态，日志


## 常用指令

| 命令                                          | 作用                                             |            |
| ------------------------------------------- | ---------------------------------------------- | ---------- |
| `systemctl start nginx`                     | 立即启动                                           |            |
| `systemctl stop nginx`                      | 立即停止                                           |            |
| `systemctl restart nginx`                   | 重启（先 stop 再 start）                             |            |
| `systemctl reload nginx`                    | 平滑重载配置（PID 不变）                                 |            |
| `systemctl status nginx`                    | 看运行状态、 cgroup、最近 10 行日志                        |            |
| `systemctl is-active nginx`                 | 返回 0 表示运行中，脚本里常用                               |            |
| `systemctl is-enabled nginx`                | 返回 0 表示已设为开机自启                                 |            |
| `systemctl enable nginx`                    | 把服务加入开机自启（创建 /etc/systemd/system/\*.wants/ 软链） |            |
| `systemctl disable nginx`                   | 取消开机自启                                         |            |
| `systemctl mask nginx`                      | 彻底屏蔽（软链指向 /dev/null），连手动都启不了                   |            |
| `systemctl unmask nginx`                    | 解除屏蔽                                           |            |
| `systemctl list-units --type=service`       | 查看已加载的服务                                       |            |
| \`systemctl list-unit-files                 | grep enabled\`                                 | 只看“开机自启”清单 |
| `systemctl daemon-reload`                   | 修改了 \*.service 文件后重载配置                         |            |
| `systemctl show nginx`                      | 打印所有属性（环境变量、PID、启动时间等）                         |            |
| `systemctl kill nginx --signal=HUP`         | 给主进程发信号，比 kill 精准                              |            |
| `systemctl isolate multi-user.target`       | 切换运行级别（不含图形）                                   |            |
| `systemctl poweroff` / `reboot` / `suspend` | 关机、重启、休眠                                       |            |
| `systemctl --failed`                        | 列出启动失败的服务，排障神器                                 |            |
| `journalctl -u nginx -f`                    | 实时刷该服务的日志                                      |            |


## 一、基础命令速查表

### 服务生命周期管理
```bash
systemctl start <服务名>        # 启动服务
systemctl stop <服务名>         # 停止服务
systemctl restart <服务名>      # 重启服务
systemctl reload <服务名>       # 重新加载配置（不重启进程）
systemctl status <服务名>       # 查看服务状态
```

### 开机自启管理
```bash
systemctl enable <服务名>       # 设置开机自启
systemctl disable <服务名>      # 取消开机自启
systemctl is-enabled <服务名>   # 检查是否开机自启
```

### 系统状态查看
```bash
systemctl list-units           # 列出所有活动单元
systemctl list-units --failed  # 列出失败的单元
systemctl list-unit-files      # 列出所有单元文件
```

### 系统控制
```bash
systemctl reboot               # 重启系统
systemctl poweroff             # 关机
systemctl suspend              # 休眠
systemctl hibernate            # 挂起到磁盘
```

## 二、3个核心概念（面试常问）

### Unit（单元）
后缀决定类型：
- `.service`（服务）- 最常用的服务单元
- `.target`（运行级别）- 定义系统状态
- `.socket`（套接字激活）- 基于套接字的激活
- `.timer`（定时任务）- 替代cron的定时器
- `.mount`（挂载点）- 文件系统挂载
- `.device`（设备）- 硬件设备单元

### Target（运行目标）
替代 SysV 的 runlevel：
- `graphical.target` ≈ runlevel 5（图形界面）
- `multi-user.target` ≈ runlevel 3（多用户命令行）
- `rescue.target` ≈ runlevel 1（救援模式）
- `emergency.target`（紧急模式）

```bash
# 查看当前运行级别
systemctl get-default

# 设置默认运行级别
systemctl set-default multi-user.target

# 切换到指定运行级别
systemctl isolate graphical.target
```

### Wants/Requires（依赖关系）
- **Wants**：弱依赖，失败也能启动
- **Requires**：强依赖，依赖失败则本服务停止
- **After/Before**：启动顺序控制

## 三、实战案例（含排坑）

### 案例1：修改了 nginx.service 文件后服务起不来？

**问题现象：**
```bash
systemctl restart nginx
# 服务无法启动或配置未生效
```

**解决方案：**
```bash
systemctl daemon-reload    # 1. 重载配置（关键步骤！）
systemctl restart nginx    # 2. 再重启服务
```

**原因分析：**
- systemd 会缓存 unit 文件
- 修改配置文件后必须执行 `daemon-reload` 重新加载
- **忘记 daemon-reload 是 90% 新人的坑**

### 案例2：禁止用户手动启动某服务

**需求：**完全禁用某个