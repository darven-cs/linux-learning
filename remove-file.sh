#!/bin/bash

echo "移动文件"

# 获取脚本所在目录
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
echo "Script directory: $SCRIPT_DIR"
DOCS_DIR="$SCRIPT_DIR/docs"
echo "Docs directory: $DOCS_DIR"

# 检查docs目录是否存在
if [ ! -d "$DOCS_DIR" ]; then
    echo "错误: docs目录不存在: $DOCS_DIR"
    exit 1
fi

# 先删除docs里面的md文件
for file in "$DOCS_DIR"/daily-practice-*.md; do
    if [ -f "$file" ]; then
        rm -f "$file"
        echo "已删除: $file"
    fi
done

# 删除readme
if [ -f "$DOCS_DIR/README.md" ]; then
    rm -f "$DOCS_DIR/README.md"
    echo "已删除: $DOCS_DIR/README.md"
fi

# 移动文件
echo "正在移动文件..."
cd "$SCRIPT_DIR" || exit 1

# 开始移动
for file in daily-practice-*.md; do
    if [ -f "$file" ]; then
        echo "正在移动文件: $file"
        mv "$file" "$DOCS_DIR" && echo "移动成功: $file" || echo "移动失败: $file"
    fi
done

echo "文件移动完成"
