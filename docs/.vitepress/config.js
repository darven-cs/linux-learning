import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Linux命令学习',
  description: '每日练习Linux命令，熟能生巧',
  
  base: '/linux-learning/', // 根据你的仓库名称进行调整
  
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '基础命令', link: '/每日一练习--ls.html' },
      { text: '文件处理', link: '/每日一练习--grep.html' },
      { text: '权限管理', link: '/每日一练习--chmod.html' },
      { text: '系统信息', link: '/每日一练习--ps.html' },
      { text: '网络命令', link: '/每日一练习--ping.html' }
    ],
    
    sidebar: [
      {
        text: '基础命令',
        items: [
          { text: 'ls', link: '/每日一练习--ls.html' },
          { text: 'cd', link: '/每日一练习--cd.html' },
          { text: 'pwd', link: '/每日一练习--pwd.html' },
          { text: 'echo', link: '/每日一练习--echo.html' },
          { text: 'cat', link: '/每日一练习--cat.html' },
          { text: 'touch', link: '/每日一练习--touch.html' },
          { text: 'mkdir', link: '/每日一练习--mkdir.html' },
          { text: 'rmdir', link: '/每日一练习--rmdir.html' },
          { text: 'rm', link: '/每日一练习--rm.html' },
          { text: 'cp', link: '/每日一练习--cp.html' },
          { text: 'mv', link: '/每日一练习--mv.html' }
        ]
      },
      {
        text: '文件查看与处理',
        items: [
          { text: 'more', link: '/每日一练习--more.html' },
          { text: 'less', link: '/每日一练习--less.html' },
          { text: 'head', link: '/每日一练习--head.html' },
          { text: 'tail', link: '/每日一练习--tail.html' },
          { text: 'grep', link: '/每日一练习--grep.html' },
          { text: 'find', link: '/每日一练习--find.html' },
          { text: 'wc', link: '/每日一练习--wc.html' },
          { text: 'sort', link: '/每日一练习--sort.html' },
          { text: 'uniq', link: '/每日一练习--uniq.html' }
        ]
      },
      {
        text: '权限与用户',
        items: [
          { text: 'chmod', link: '/每日一练习--chmod.html' },
          { text: 'chown', link: '/每日一练习--chown.html' },
          { text: 'chgrp', link: '/每日一练习--chgrp.html' },
          { text: 'who', link: '/每日一练习--who.html' },
          { text: 'whoami', link: '/每日一练习--whoami.html' },
          { text: 'su', link: '/每日一练习--su.html' },
          { text: 'sudo', link: '/每日一练习--sudo.html' },
          { text: 'passwd', link: '/每日一练习--passwd.html' }
        ]
      },
      {
        text: '系统与进程',
        items: [
          { text: 'ps', link: '/每日一练习--ps.html' },
          { text: 'top', link: '/每日一练习--top.html' },
          { text: 'kill', link: '/每日一练习--kill.html' },
          { text: 'df', link: '/每日一练习--df.html' },
          { text: 'du', link: '/每日一练习--du.html' },
          { text: 'free', link: '/每日一练习--free.html' },
          { text: 'uptime', link: '/每日一练习--uptime.html' },
          { text: 'uname', link: '/每日一练习--uname.html' },
          { text: 'date', link: '/每日一练习--date.html' },
          { text: 'cal', link: '/每日一练习--cal.html' }
        ]
      },
      {
        text: '网络命令',
        items: [
          { text: 'ping', link: '/每日一练习--ping.html' },
          { text: 'curl', link: '/每日一练习--curl.html' },
          { text: 'wget', link: '/每日一练习--wget.html' },
          { text: 'ssh', link: '/每日一练习--ssh.html' },
          { text: 'scp', link: '/每日一练习--scp.html' },
          { text: 'ftp', link: '/每日一练习--ftp.html' },
          { text: 'netstat', link: '/每日一练习--netstat.html' },
          { text: 'ifconfig', link: '/每日一练习--ifconfig.html' }
        ]
      }
    ],
    
    socialLinks: [
      { icon: 'github', link: 'https://github.com/Alfxue/linux-learning' }
    ]
  }
})