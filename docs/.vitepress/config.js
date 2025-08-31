import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Linux Command Learning',
  description: 'Daily practice Linux commands, practice makes perfect',
  
  base: '/linux-learning/', // 根据你的仓库名称进行调整
  
  themeConfig: {
    // 本地搜索
    search:{
      provider: 'local'
    },

    nav: [
      { text: '首页', link: '/' },
      { text: '基础指令', link: '/daily-practice-ls.html' },
      { text: '文件处理', link: '/daily-practice-grep.html' },
      { text: '权限', link: '/daily-practice-chmod.html' },
      { text: '系统信息', link: '/daily-practice-ps.html' },
      { text: '网络指令', link: '/daily-practice-ping.html' }
    ],
    
    sidebar: [
      {
        text: 'Basic Commands',
        items: [
          { text: 'ls', link: '/daily-practice-ls.html' },
          { text: 'cd', link: '/daily-practice-cd.html' },
          { text: 'pwd', link: '/daily-practice-pwd.html' },
          { text: 'echo', link: '/daily-practice-echo.html' },
          { text: 'cat', link: '/daily-practice-cat.html' },
          { text: 'touch', link: '/daily-practice-touch.html' },
          { text: 'mkdir', link: '/daily-practice-mkdir.html' },
          { text: 'rmdir', link: '/daily-practice-rmdir.html' },
          { text: 'rm', link: '/daily-practice-rm.html' },
          { text: 'cp', link: '/daily-practice-cp.html' },
          { text: 'mv', link: '/daily-practice-mv.html' }
        ]
      },
      {
        text: 'File Viewing and Processing',
        items: [
          { text: 'more', link: '/daily-practice-more.html' },
          { text: 'less', link: '/daily-practice-less.html' },
          { text: 'head', link: '/daily-practice-head.html' },
          { text: 'tail', link: '/daily-practice-tail.html' },
          { text: 'grep', link: '/daily-practice-grep.html' },
          { text: 'find', link: '/daily-practice-find.html' },
          { text: 'wc', link: '/daily-practice-wc.html' },
          { text: 'sort', link: '/daily-practice-sort.html' },
          { text: 'uniq', link: '/daily-practice-uniq.html' }
        ]
      },
      {
        text: 'Permissions and Users',
        items: [
          { text: 'chmod', link: '/daily-practice-chmod.html' },
          { text: 'chown', link: '/daily-practice-chown.html' },
          { text: 'chgrp', link: '/daily-practice-chgrp.html' },
          { text: 'who', link: '/daily-practice-who.html' },
          { text: 'whoami', link: '/daily-practice-whoami.html' },
          { text: 'su', link: '/daily-practice-su.html' },
          { text: 'sudo', link: '/daily-practice-sudo.html' },
          { text: 'passwd', link: '/daily-practice-passwd.html' }
        ]
      },
      {
        text: 'System and Processes',
        items: [
          { text: 'ps', link: '/daily-practice-ps.html' },
          { text: 'top', link: '/daily-practice-top.html' },
          { text: 'kill', link: '/daily-practice-kill.html' },
          { text: 'df', link: '/daily-practice-df.html' },
          { text: 'du', link: '/daily-practice-du.html' },
          { text: 'free', link: '/daily-practice-free.html' },
          { text: 'uptime', link: '/daily-practice-uptime.html' },
          { text: 'uname', link: '/daily-practice-uname.html' },
          { text: 'date', link: '/daily-practice-date.html' },
          { text: 'cal', link: '/daily-practice-cal.html' }
        ]
      },
      {
        text: 'Network Commands',
        items: [
          { text: 'ping', link: '/daily-practice-ping.html' },
          { text: 'curl', link: '/daily-practice-curl.html' },
          { text: 'wget', link: '/daily-practice-wget.html' },
          { text: 'ssh', link: '/daily-practice-ssh.html' },
          { text: 'scp', link: '/daily-practice-scp.html' },
          { text: 'ftp', link: '/daily-practice-ftp.html' },
          { text: 'netstat', link: '/daily-practice-netstat.html' },
          { text: 'ifconfig', link: '/daily-practice-ifconfig.html' }
        ]
      }
    ],
    
    socialLinks: [
      { icon: 'github', link: 'https://github.com/Alfxue/linux-learning' }
    ]
  }
})