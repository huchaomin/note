---
title: linux 终端基础命令
---

## 前言

### Linux下文件都保存在根目录/下

* home/user：用户文件
* bin：系统自带的二进制指令
* etc：系统文件（不要在这里加自己的文件）
* root：超级管理员目录

### 终端打开默认是在home里 有\~

## 终端命令格式

操作 + \[-选项] + \[参数]   （选项前一般有一杠）

## 查看当前路径： pwd

## 列出当前文件夹里的所有文件夹：ls

* ls （显示可见文件）
* ls -a （显示所有文件名称，隐藏文件开头是点）
* ls -l （显示所有可见文件的详细信息，包括创建时间、大小等）文件大小以字节为单位
* ls -l -h （和上一条的区别是文件大小会有K，M这样的单位）

## 文件类型

* 蓝色：目录
* 白色：文件
* 绿色：可执行文件
* 红色：压缩包

## 详细显示当前文件夹下的东西：tree

* tree + 文件夹名称
* 直接在当前文件夹路径下tree

## 切换文件：cd

* 直接写cd 返回home目录
* cd -     返回上次所在的目录
* 点代表当前位置  ./用来查找当前文件夹下的东西
* 点点表示上一级  ../  或者 .. 直接回上一级目录  ../../返回两级
* 绝对路径要从根目录开始写

## 创建文件夹：mkdir + 文件夹名称

mkdir -p a/b/c/d  （递归创建文件，a里有b，b里有c，c里有d）

## 创建文件：touch + 文件名.格式后缀

可以touch后加多个文件 ，可以一起创建

## 编辑文件：gedit + 文件名.后缀

查看文件内容也可以用这个
编辑完直接关掉就好
也可以同时编辑多个文件

## 删除文件：rm + 文件名.后缀（删完不能恢复）

* rm -i +文件名.后缀     会再询问一遍是否删除  输入 y/n  选择
* rm -f +文件   强制删除

## 删除文件夹：rm -r +文件夹

## 拷贝文件：cp 路径+文件名.后缀   复制到的路径+文件名.后缀

* cp 路径 路径  （复制过去如果有同名文件会覆盖）
* cp -i 路径 路径（如果有同名文件会有提示）
* cp -v 路径 路径 （显示拷贝进度）

## 拷贝文件夹：cp -r 路径 路径

## 移动文件：mv -i 路径 路径 （同名会有提示）和上面的一样

* -v  显示移动速度

## 重命名：mv 原来名字 新名字  （就是把原文件换个名字移动到原地）

## 清屏：clear  或者CTRL+L

## 自动补全：Tab 自动补全文件名（但必须是唯一的，如果不唯一按两下Tab会出来文件供选择）

## 查找指令的存放地址：which + 指令名

## 按上下键：选择之前写过的指令

## CTRL+C ：中止 （和python一样）

## 放大字体：CTRL shift =

## 缩小字体：CTRL -

## 查看最近几条历史命令：history 条数

## 之后想调用某条命令：！序号

## 直接在终端里查看文件内容：cat 文件名

cat -n 文件名   增加行数（空行也会被计一行）
cat -b 文件名   增加行数（空行不计）
cat -s 文件名   把一行以上空行换成一行
上述三个 -xx可以组合使用 （直接写-两个字母  也可以   如-sb）
cat 多个文件：打开多个

## 方便的一页一页看长文件： more 文件名

* 回车：下一行
* 空格：下一屏
* CTRL+B：上一屏
* q：退出

从某一行开始显示： more +行数  （加号要打上去）

\-p：先清屏再显示
\-s：把一行以上空行换成一行
more也可以打开多个文件

## 重定向：内容 > 文件

再次重定向会覆盖原有内容
需要使用追加：内容 >> 文件
只要有输出就可以进行重定向

## 管道：多个命令，前一个命令的输出作为后一个命令的输入，命令之间用 | 隔开  （每个命令必须要有输出）

ls -l / | more    相当于用more查看根目录

## 查找：grep（查找文件里面的内容）   find（在电脑里查找文件）

可以配合使用正则表达式

* grep 查找内容 文件名（在哪个文件里查找）
* grep -i 查找内容 文件名 （查找内容忽略大小写）
* \-n 找出来并显示行数
* \-v 显示除了查找内容 的其他内容
* find    路径（在哪个目录下找）  -name     文件名
* find    路径   -size   +数字1   -size   -数字2       （找文件大小在数字1和数字2之间的）+表示大于   -表示小于   数字要带单位 K M之类的*

## 归档：把多个文件打包，便于保存和传输

### tar压缩归档

* tar \[参数]  归档文件名 文件1 文件2   （归档文件名后缀为.tar）
* tar  \[参数]  归档文件名  目录
* \-c：生成打包文件（打包时要用）
* \-x：解开打包文件（解档时使用）
* \-v：列出归档解档的详细过程
* \-f：指定名称（归档解档都要，而且必须写在所有参数最后面，如-cvf  -xvf）

归档后原文件还在，可以删，要用的时候解档就好

解档到指定目录： tar \[参数] 解档文件名 -C 指定路径*

### zip压缩

zip \[-r]  压缩后文件名   被压缩文件

解压：unzip 压缩文件

## 压缩：压缩的原理是将文件中相同的信息用一个字符代替，致使文件体积变小达到压缩的目的

在归档参数前加z ，如-zcvf  -zxvf

## 用户权限：可以通过ls -l 查看  就是最前面的十个字符

第一个字符：文件类型

后九个字符：前三个：本人权限（u）      中间三个：同组用户权限（g）      最后三个：其他用户权限（o）                 所有用户权限（a）

* r：可读   权限数字（4）
* w：可写           （2）
* x：可执行        （1）
* \-：无权限

每组三个字符数字相加得到该组权限数字

## 修改权限：chmod

* chmod    u/g/o/a    +/-/=    rwx  文件名    （u+x这些中间参数不加空格）
* +：增加权限
* \-：撤销权限
* \=：设定权限
* chmod 权限数字 文件名
* chmod -R \[参数/数字] 文件夹 （修改文件夹里全部文件的权限）

想要运行可执行文件就要改权限

## 用户管理

* sudo +  命令 （给予命令临时权限） 需要输入自己的密码
* sudo -s  （获得root权限）   命令开头会显示#
* su root   需要输入root密*
* su   用户名  （切换用户，改权限）

## 修改密码

passwd ：修改用户密码

root权限下可以任意修改密码，普通权限下密码强度有要求

## 退出登录：exit

图形界面：关闭终端

ssh链接状态：退出登录账户

切换后的用户：返回前一个账号

（和栈有些类似）

## 查看登录用户：who

* who：哪些用户正在登录
* who  -q ：查看用户数
* \-u：增加一点详细信息

## 关机重启

尽量用shutdown 尽量不要关机（关的是服务器）

* reboot：重启
* shutdown -r now  立刻重启，会给别的用户提示
* shutdown -h now  立刻关机
* shutdown -h 20:00  在晚上8点关机
* shutdown -h +10  在十分钟后关机
* shutdown -c  撤销关机指令

## 软件安装

make install  优点：根据机器硬件进行配置，性能最好，最稳定   缺点：安装繁琐

deb包      优点：比上一种方便  缺点：可能要手动安装其他依赖包

apt-get   优点：最方便   缺点：要有软件源

## ssh远程登陆

## scp远程拷贝（上传、下载）

上传：scp   本地文件路径  服务器用户名@服务器IP地址：路径（上传到服务器的哪个地方）

下载：  服务器用户名@服务器IP地址：路径      本地路径

## vi编辑器

创建、修改文件：vi  文件名

* 命令模式
* 文本输入模式
  * i：在光标之前插入   I：在行首插入
  * a：在光标后插入     A：在行末插入
  * o：在光标所在行下一行插入  O：在所在行上一行插入
  * 修改命令：c
  * 取代命令：r
  * 替换命令：s
* 末行模式（按：进入）
  * 可以输w  q  wq！

按esc回到命令模式

## vim：由vi发展出来的一个编辑器

## 在终端上运行python文件

1. python3   文件名
2. 修改权限后直接输入文件路径  （py文件第一行要加     #！python路径）
