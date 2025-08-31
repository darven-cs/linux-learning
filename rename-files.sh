#!/bin/bash

# 将中文文件名改为英文的脚本

declare -A file_mapping=(
  ["每日一练习--cal.md"]="daily-practice--cal.md"
  ["每日一练习--cat.md"]="daily-practice--cat.md"
  ["每日一练习--cd.md"]="daily-practice--cd.md"
  ["每日一练习--chgrp.md"]="daily-practice--chgrp.md"
  ["每日一练习--chmod.md"]="daily-practice--chmod.md"
  ["每日一练习--chown.md"]="daily-practice--chown.md"
  ["每日一练习--cp.md"]="daily-practice--cp.md"
  ["每日一练习--curl.md"]="daily-practice--curl.md"
  ["每日一练习--date.md"]="daily-practice--date.md"
  ["每日一练习--df.md"]="daily-practice--df.md"
  ["每日一练习--du.md"]="daily-practice--du.md"
  ["每日一练习--echo.md"]="daily-practice--echo.md"
  ["每日一练习--find.md"]="daily-practice--find.md"
  ["每日一练习--free.md"]="daily-practice--free.md"
  ["每日一练习--ftp.md"]="daily-practice--ftp.md"
  ["每日一练习--grep.md"]="daily-practice--grep.md"
  ["每日一练习--head.md"]="daily-practice--head.md"
  ["每日一练习--ifconfig.md"]="daily-practice--ifconfig.md"
  ["每日一练习--kill.md"]="daily-practice--kill.md"
  ["每日一练习--less.md"]="daily-practice--less.md"
  ["每日一练习--ls.md"]="daily-practice--ls.md"
  ["每日一练习--mkdir.md"]="daily-practice--mkdir.md"
  ["每日一练习--more.md"]="daily-practice--more.md"
  ["每日一练习--mv.md"]="daily-practice--mv.md"
  ["每日一练习--netstat.md"]="daily-practice--netstat.md"
  ["每日一练习--passwd.md"]="daily-practice--passwd.md"
  ["每日一练习--ping.md"]="daily-practice--ping.md"
  ["每日一练习--ps.md"]="daily-practice--ps.md"
  ["每日一练习--pwd.md"]="daily-practice--pwd.md"
  ["每日一练习--rm.md"]="daily-practice--rm.md"
  ["每日一练习--rmdir.md"]="daily-practice--rmdir.md"
  ["每日一练习--scp.md"]="daily-practice--scp.md"
  ["每日一练习--sort.md"]="daily-practice--sort.md"
  ["每日一练习--ssh.md"]="daily-practice--ssh.md"
  ["每日一练习--su.md"]="daily-practice--su.md"
  ["每日一练习--sudo.md"]="daily-practice--sudo.md"
  ["每日一练习--tail.md"]="daily-practice--tail.md"
  ["每日一练习--top.md"]="daily-practice--top.md"
  ["每日一练习--touch.md"]="daily-practice--touch.md"
  ["每日一练习--uname.md"]="daily-practice--uname.md"
  ["每日一练习--uniq.md"]="daily-practice--uniq.md"
  ["每日一练习--uptime.md"]="daily-practice--uptime.md"
  ["每日一练习--wc.md"]="daily-practice--wc.md"
  ["每日一练习--wget.md"]="daily-practice--wget.md"
  ["每日一练习--who.md"]="daily-practice--who.md"
  ["每日一练习--whoami.md"]="daily-practice--whoami.md"
)

echo "Renaming files from Chinese to English..."

# 重命名文件
for chinese_name in "${!file_mapping[@]}"; do
  english_name="${file_mapping[$chinese_name]}"
  
  if [ -f "$chinese_name" ]; then
    echo "Renaming $chinese_name to $english_name"
    mv "$chinese_name" "$english_name"
  else
    echo "File $chinese_name not found"
  fi
done

echo "File renaming completed."