# date 显示时间日期

`date date（日期）`

`显示时间日期` 显示或设置系统日期和时间。

## 基本用法
```shell
# 显示当前日期和时间
date

# 以指定格式显示日期
date +"%Y-%m-%d %H:%M:%S"

# 显示UTC时间
date -u
```

## 高级用法
```shell
# 设置系统时间（需要root权限）
date -s "2023-12-01 10:30:00"

# 显示昨天的日期
date -d "yesterday"

# 显示指定格式的日期
date +"%A, %B %d, %Y"

# 显示时间戳
date +%s
```

## 示例
```shell
date
# 显示当前日期和时间，例如：Fri Dec  1 10:30:45 CST 2023

date +"%Y-%m-%d"
# 以YYYY-MM-DD格式显示日期，例如：2023-12-01

date -d "1 week ago"
# 显示一周前的日期
```