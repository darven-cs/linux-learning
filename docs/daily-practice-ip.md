# whoami 显示当前用户名

ip 命令是 iproute2 软件包的一部分，用于替代传统的 ifconfig、route、arp 等命令，提供更强大和统一的网络管理功能。

## 基本用法
```shell

ip [选项] 对象 命令
```

## 高级用法
### link - 网络设备管理
```shell
# 显示所有网络接口
ip link show
ip link list
ip l  # 简写

# 显示特定接口
ip link show eth0

# 启用/禁用网络接口
sudo ip link set eth0 up      # 启用
sudo ip link set eth0 down    # 禁用

# 修改接口属性
sudo ip link set eth0 name eth1        # 重命名接口
sudo ip link set eth0 mtu 1400         # 设置MTU
sudo ip link set eth0 address 00:11:22:33:44:55  # 设置MAC地址

# 添加/删除网络接口
sudo ip link add br0 type bridge       # 创建网桥
sudo ip link add veth0 type veth peer name veth1  # 创建veth对
sudo ip link delete veth0              # 删除接口
```

### addr - IP地址管理
```shell
# 显示所有IP地址
ip addr show
ip addr list
ip a  # 简写

# 显示特定接口的地址
ip addr show eth0
ip a s eth0  # 简写

# 添加IP地址
sudo ip addr add 192.168.1.100/24 dev eth0
sudo ip addr add 192.168.1.100/24 broadcast 192.168.1.255 dev eth0

# 删除IP地址
sudo ip addr del 192.168.1.100/24 dev eth0

# 清空接口所有地址
sudo ip addr flush dev eth0

# 只显示IPv4地址
ip -4 addr show

# 只显示IPv6地址
ip -6 addr show
```

###  route - 路由表管理
```shell
# 显示路由表
ip route show
ip route list
ip r  # 简写

# 显示特定路由
ip route show 192.168.1.0/24

# 添加路由
sudo ip route add 10.0.0.0/8 via 192.168.1.1           # 静态路由
sudo ip route add default via 192.168.1.1              # 默认路由
sudo ip route add 172.16.0.0/12 dev eth1               # 直连路由

# 删除路由
sudo ip route del 10.0.0.0/8 via 192.168.1.1
sudo ip route del default

# 替换路由
sudo ip route replace default via 192.168.1.2

# 显示到特定目标的路由
ip route get 8.8.8.8
```

### rule - 策略路由规则
````shell
# 显示路由规则
ip rule show
ip rule list

# 添加路由规则
sudo ip rule add from 192.168.1.0/24 table 100
sudo ip rule add to 10.0.0.0/8 table 200

# 删除路由规则
sudo ip rule del from 192.168.1.0/24 table 100
````

### tunnel - 隧道管理
```shell
# 创建GRE隧道
sudo ip tunnel add gre1 mode gre remote 203.0.113.10 local 203.0.113.20

# 显示隧道
ip tunnel show

# 删除隧道
sudo ip tunnel del gre1
```

