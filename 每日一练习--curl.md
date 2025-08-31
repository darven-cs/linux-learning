# curl 发送网络请求

`curl client URL`

`发送网络请求` 用于传输数据，支持多种协议。

## 基本用法
```shell
# 获取网页内容
curl http://example.com

# 下载文件并保存
curl -O http://example.com/file.txt

# 下载文件并指定保存名称
curl -o newname.txt http://example.com/file.txt

# 跟随重定向
curl -L http://example.com
```

## 高级用法
```shell
# 显示详细信息
curl -v http://example.com

# 设置请求头
curl -H "User-Agent: MyApp/1.0" http://example.com

# 发送POST请求
curl -X POST -d "name=value" http://example.com

# 设置超时时间
curl --connect-timeout 10 http://example.com
```

## 示例
```shell
curl https://api.github.com/users/octocat
# 获取GitHub用户信息

curl -O https://example.com/document.pdf
# 下载PDF文件

curl -X POST -d "username=john&password=secret" http://example.com/login
# 发送登录表单数据
```