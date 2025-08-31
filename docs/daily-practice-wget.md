# wget 下载文件

`wget web get`

`下载文件` 从网络上下载文件。

## 基本用法
```shell
# 下载文件
wget http://example.com/file.txt

# 下载并指定保存文件名
wget -O newname.txt http://example.com/file.txt

# 断点续传
wget -c http://example.com/largefile.zip
```

## 高级用法
```shell
# 递归下载整个网站
wget -r http://example.com

# 限制下载速度
wget --limit-rate=200k http://example.com/file.zip

# 后台下载
wget -b http://example.com/file.zip

# 下载多个URL
wget -i urls.txt
```

## 示例
```shell
wget https://example.com/document.pdf
# 下载PDF文件

wget -c https://example.com/large-archive.tar.gz
# 断点续传下载大文件

wget -r -l 2 https://example.com
# 递归下载网站，深度为2层
```