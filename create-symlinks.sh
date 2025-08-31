#!/bin/bash

# 创建软链接脚本，将现有的markdown文件链接到docs目录

echo "Creating symlinks for markdown files..."

# 获取脚本所在目录
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
DOCS_DIR="$SCRIPT_DIR/docs"

echo "Script directory: $SCRIPT_DIR"
echo "Docs directory: $DOCS_DIR"

# 检查docs目录是否存在
if [ ! -d "$DOCS_DIR" ]; then
  echo "Error: docs directory does not exist"
  exit 1
fi

# 删除现有的软链接（如果有的话）
echo "Removing existing symlinks..."
cd "$DOCS_DIR"
rm -f daily-practice-*.md
rm -f README.md

# 为所有"每日一练习"的markdown文件创建软链接
echo "Creating new symlinks..."
cd "$SCRIPT_DIR"
for file in daily-practice-*.md; do
  if [ -f "$file" ]; then
    echo "Creating symlink for $file"
    ln -s "$SCRIPT_DIR/$file" "$DOCS_DIR/$file"
  fi
done

# 为README.md创建软链接
echo "Creating symlink for README.md"
ln -s "$SCRIPT_DIR/README.md" "$DOCS_DIR/README.md"

echo "Symlink creation completed."

# 列出创建的软链接
echo "Verifying symlinks:"
ls -la "$DOCS_DIR"/*.md