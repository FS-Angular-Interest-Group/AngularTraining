<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%
	String path = request.getContextPath();
	String basePath = request.getScheme() + "://"
			+ request.getServerName() + ":" + request.getServerPort()
			+ path + "/";
%>
<%@taglib prefix="s" uri="/struts-tags"%>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>


<head>
<link href="css/main.css" rel="stylesheet" type="text/css" />
<link href="css/middle.css" rel="stylesheet" type="text/css" />
<script type="text/javascript" src="js/jquery.js"></script>
<script type="text/javascript" src="js/work.js"></script>
<style type="text/css">
</style>

<title>Hospital management system</title>

<script language="javascript">

//定时更换图片
Img = new Array("image/meeting1 (1).jpg","image/meeting1 (2).jpg","image/meeting1 (4).jpg");
size = Img.length;
i = 0;
function chImg(){
	picID.src = Img[i];
	i++;
	if (i>=size) i = 0;
	setTimeout("chImg()",3000);
}
</script>

</head>

<body onLoad="chImg()">
	<div class="main">
		<div class="title">
			<table width="70%" cellpadding="0" cellspacing="0"
				style="font-size: 11.0pt" align="center">
				<tr>
					<td width="80%"><font color=" blue" size="5px"> Hello <a
							href=""><s:property value="user.username" /></a>,Welcome to the
							blue sky Hospital of ChongQing!
					</font></td>
					<td align="right" width="5%"><span> <font size="4px"><a
								href="<%=request.getContextPath()%>/page/login.jsp">Log off</a></font>
					</span></td>
				</tr>
			</table>
			<hr width=70% color="#999"；>
			<div class="navbg">
				<div class="col960">
					<ul id="navul" class="cl">
						<li><a
							href="<%=request.getContextPath()%>/page/doctorPage.jsp"
							title="Home page">Home page</a></li>

						<li><a
							href="queryDoctor!findDoctorById?user.id=<s:property value="user.id" />"
							title="DoctorInfo">DoctorInfo</a></li>

						<li><a href="QPatient!selectPat" title="PatientInfo">PatientInfo</a></li>

						<li><a href="#" title="Education">Education</a></li>

						<li><a href="#" title="Research" target="main">Research</a></li>

						<li><a href="#" title="About">About</a></li>

						<li><a href="#" title="Others">Others</a></li>
					</ul>
				</div>
			</div>
			<br> <br>
		</div>

		<div class="center">
			<div id="wrapper">
				<!-- start page -->
				<div id="page">
					<!-- start content -->
					<div id="content">
						<!-- 定时更换图片 -->
						<br>
						<div id="sidebar2" class="sidebar">
							<img id="picID" class="img">
						</div>
						<br>
						<div style="padding-bottom: 20px;"></div>
						<div class="post">
							<br>
							<h2 class="tit">Hospital dynamic</h2>
							<div class="dynamic">
								<a href="#" target='_blank'>⊙蓝天医院“巾帼文明岗”健康知识讲座及义诊走进老年养护中心
									2014-05-30</a><br> <a href="#" target='_blank'>⊙第七届中国神经内科医师大会邀请函
									2014-05-28 </a><br> <a href="#" target='_blank'>⊙职场体验感受就医正能量
									2014-05-22 </a><br> <a href="#" target='_blank'>⊙医学检验科举行2014年本科毕业课题答辩及实习带教工作座谈会
									2014-05-05 </a><br> <a href="#" target='_blank'>⊙重庆蓝天医院开展首次护士远程培训讲座
									2014-04-24 </a><br> <a href="#" target='_blank'>⊙第一临床学院学生联合党支部开展社会主义核心价值观教育活动
									2014-04-17 </a><br> <a href="#" target='_blank'>⊙重庆蓝天医院超声科实施血管等亚专业分组
									2013-04-07</a> <br> <a href="#" target='_blank'>⊙我院获“先进单位”称号
									2014-04-03 </a><br> <a href="#" target='_blank'>⊙重庆蓝天医院老年病科开展安全主题护理质控会
									2014-03-28</a> <br> <a href="#" target='_blank'></a><br>
							</div>
						</div>
					</div>
				</div>
				<div id="sidebar1" class="sidebar">

					<h2 class="title">
						<img src="image/laba2.png" width=30 height=30 /><a href="#">NEWS</a>
					</h2>
					<hr>
					<div id="scoll">
						<marquee height="100px" scrollAmount=3 direction=up
							behavior="scroll" onmousemove="stop()" onmouseout="start()">
							<img src="image/lb.png" width=15 height=15 /><a
								href='http://www.digitalchina.com/'
								onmousedown="return AdsClick(3152,37999)" rel='nofollow'
								target='_blank' style="color: #2858c8;">蓝天医院</a> <span><a
								href='http://shixi.51job.com/'
								onmousedown="return AdsClick(3152,37999)" rel='nofollow'
								target='_blank'>中国初级创伤救治培训基地<img src=image/hot.gif width=25
									height=13 border=0></a></span> <br> <img src="image/lb.png"
								width=15 height=15 /><a
								href='http://job.hust.edu.cn/show/article.htm?id=14802'
								onmousedown="return AdsClick(3152,38000)" rel='nofollow'
								target='_blank' style="color: #2858c8;">蓝天医院</a> <span><a
								href='http://shixi.51job.com/'
								onmousedown="return AdsClick(3152,38000)" rel='nofollow'
								target='_blank'>诊疗技术冠心病介入培训基地 <img src=image/hot.gif
									width=25 height=13 border=0></a></span> <br> <img
								src="image/lb.png" width=15 height=15 /><a
								href='http://www.datanggroup.cn/'
								onmousedown="return AdsClick(3152,38001)" rel='nofollow'
								target='_blank' style="color: #2858c8;">蓝天医院</a> <span><a
								href='http://job.hust.edu.cn/show/article.htm?id=14802'
								onmousedown="return AdsClick(3152,38001)" rel='nofollow'
								target='_blank'>卫生部临床药师培训基地<img src=image/hot.gif width=25
									height=13 border=0></a></span> <br> <img src="image/lb.png"
								width=15 height=15 /> <a
								href='http://baike.baidu.com/view/1790724.htm'
								onmousedown="return AdsClick(3152,38006)" rel='nofollow'
								target='_blank' style="color: #2858c8;">蓝天医院</a> <span><a
								href='http://shixi.51job.com/'
								onmousedown="return AdsClick(3152,38006)" rel='nofollow'
								target='_blank'>外周血管介入诊疗培训基地<img src=image/hot.gif width=25
									height=13 border=0></a></span> <br> <img src="image/lb.png"
								width=15 height=15 /><a href='http://www.digitalchina.com/'
								onmousedown="return AdsClick(3152,37999)" rel='nofollow'
								target='_blank' style="color: #2858c8;">蓝天医院</a> <span><a
								href='http://shixi.51job.com/'
								onmousedown="return AdsClick(3152,37999)" rel='nofollow'
								target='_blank'>卫生部临床药师培训基地<img src=image/hot.gif width=25
									height=13 border=0></a></span> <br> <img src="image/lb.png"
								width=15 height=15 /><a
								href='http://job.hust.edu.cn/show/article.htm?id=14802'
								onmousedown="return AdsClick(3152,38000)" rel='nofollow'
								target='_blank' style="color: #2858c8;">蓝天医院</a> <span><a
								href='http://shixi.51job.com/'
								onmousedown="return AdsClick(3152,38000)" rel='nofollow'
								target='_blank'>心血管一级预防实践项目基地<img src=image/hot.gif width=25
									height=13 border=0></a></span> <br> <img src="image/lb.png"
								width=15 height=15 /><a href='http://www.datanggroup.cn/'
								onmousedown="return AdsClick(3152,38001)" rel='nofollow'
								target='_blank' style="color: #2858c8;">蓝天医院</a> <span><a
								href='http://job.hust.edu.cn/show/article.htm?id=14802'
								onmousedown="return AdsClick(3152,38001)" rel='nofollow'
								target='_blank'>内镜与微创专业技术培训基地<img src=image/hot.gif width=25
									height=13 border=0></a></span> <br> <img src="image/lb.png"
								width=15 height=15 /> <a
								href='http://baike.baidu.com/view/1790724.htm'
								onmousedown="return AdsClick(3152,38006)" rel='nofollow'
								target='_blank' style="color: #2858c8;">蓝天医院</a> <span><a
								href='http://shixi.51job.com/'
								onmousedown="return AdsClick(3152,38006)" rel='nofollow'
								target='_blank'>四级妇科内镜手术培训基地<img src=image/hot.gif width=25
									height=13 border=0></a></span>
						</marquee>
						<br> <br> <br> <br>
					</div>
					<br> <br>
				</div>
				<br>
				<div id="sidebar1" class="sidebar">
					<h2 class="title">
						<img src="image/laba2.png" width=30 height=30 /><a
							href="http://job.ctw.cn/zhaopin.asp" target='_blank'>NOTICE</a>
					</h2>
					<hr>

					<marquee height="120px" scrollAmount=3 direction=up
						behavior="scroll" onmousemove="stop()" onmouseout="start()">
						<img src="image/555.jpg" width=15 height=15 /><a
							href='http://www.qkankan.com/zt/shijie500qiang/'
							onmousedown="return AdsClick(3152,37989)" target='_blank'
							style="color: #2858c8;">蓝天医院</a> <span> <a href='#'
							onmousedown="return AdsClick(3152,37989)" target='_blank'>门诊出诊医师临时变更公告（5-30）</a></span>
						<br> <img src="image/555.jpg" width=15 height=15 /><a
							href='http://www.qkankan.com/zt/shijie500qiang/'
							onmousedown="return AdsClick(3152,37989)" target='_blank'
							style="color: #2858c8;">蓝天医院</a> <span> <a href='#'
							onmousedown="return AdsClick(3152,37989)" target='_blank'>门诊出诊医师临时变更公告（5-29）</a></span>
						<br> <img src="image/555.jpg" width=15 height=15 /><a
							href='http://www.qkankan.com/zt/shijie500qiang/'
							onmousedown="return AdsClick(3152,37989)" target='_blank'
							style="color: #2858c8;">蓝天医院</a> <span> <a href='#'
							onmousedown="return AdsClick(3152,37989)" target='_blank'>门诊出诊医师临时变更公告（5-28）</a></span>
						<br> <img src="image/555.jpg" width=15 height=15 /><a
							href='http://www.qkankan.com/zt/shijie500qiang/'
							onmousedown="return AdsClick(3152,37989)" target='_blank'
							style="color: #2858c8;">蓝天医院</a> <span> <a href='#'
							onmousedown="return AdsClick(3152,37989)" target='_blank'>门诊出诊医师临时变更公告（5-27）</a></span>
						<br> <img src="image/555.jpg" width=15 height=15 /><a
							href='http://www.qkankan.com/zt/shijie500qiang/'
							onmousedown="return AdsClick(3152,37989)" target='_blank'
							style="color: #2858c8;">蓝天医院</a> <span> <a href='#'
							onmousedown="return AdsClick(3152,37989)" target='_blank'>门诊出诊医师临时变更公告（5-26）</a></span>
						<br> <img src="image/555.jpg" width=15 height=15 /><a
							href='http://www.qkankan.com/zt/shijie500qiang/'
							onmousedown="return AdsClick(3152,37989)" target='_blank'
							style="color: #2858c8;">蓝天医院</a> <span> <a href='#'
							onmousedown="return AdsClick(3152,37989)" target='_blank'>门诊出诊医师临时变更公告（5-25）</a></span>
						<br> <img src="image/555.jpg" width=15 height=15 /><a
							href='http://www.qkankan.com/zt/shijie500qiang/'
							onmousedown="return AdsClick(3152,37989)" target='_blank'
							style="color: #2858c8;">蓝天医院</a> <span> <a href='#'
							onmousedown="return AdsClick(3152,37989)" target='_blank'>门诊出诊医师临时变更公告（5-24）</a></span>
						<br> <img src="image/555.jpg" width=15 height=15 /><a
							href='http://www.qkankan.com/zt/shijie500qiang/'
							onmousedown="return AdsClick(3152,37989)" target='_blank'
							style="color: #2858c8;">蓝天医院</a> <span> <a href='#'
							onmousedown="return AdsClick(3152,37989)" target='_blank'>门诊出诊医师临时变更公告（5-23）</a></span>
						<br> <img src="image/555.jpg" width=15 height=15 /><a
							href='http://www.qkankan.com/zt/shijie500qiang/'
							onmousedown="return AdsClick(3152,37989)" target='_blank'
							style="color: #2858c8;">蓝天医院</a> <span> <a href='#'
							onmousedown="return AdsClick(3152,37989)" target='_blank'>门诊出诊医师临时变更公告（5-22）</a></span>
						<br> <img src="image/555.jpg" width=15 height=15 /><a
							href='http://www.qkankan.com/zt/shijie500qiang/'
							onmousedown="return AdsClick(3152,37989)" target='_blank'
							style="color: #2858c8;">蓝天医院</a> <span> <a href='#'
							onmousedown="return AdsClick(3152,37989)" target='_blank'>门诊出诊医师临时变更公告（5-21）</a></span>
						<br>
					</marquee>
					<br> <br> <br>
				</div>

				<div id="marq">

					<table>
						<tr>
							<td id="bd"><marquee onmousemove="stop()"
									onmouseout="start()">
									<table border="1">
										<tr>
											<td><a href="#" target='_blank'><img
													src="image/show.jpg" /></a></td>
											<td><a href="#" target='_blank'><img
													src="image/show2.JPG" /></a></td>
											<td><a href="#" target='_blank'><img
													src="image/show3.JPG" /></a></td>
											<td><a href="#" target='_blank'><img
													src="image/show4.JPG" /></a></td>
											<td><a href="#" target='_blank'><img
													src="image/show.jpg" /></a></td>
											<td><a href="#" target='_blank'><img
													src="image/show2.JPG" /></a></td>
											<td><a href="#" target='_blank'><img
													src="image/show3.JPG" /></a></td>
											<td><a href="#" target='_blank'><img
													src="image/show4.JPG" /></a></td>

										</tr>
									</table>
								</marquee></td>
							<td id="shadow"></td>
						</tr>
					</table>
				</div>

				<!-- end sidebars -->
				<div style="clear: both;">&nbsp;</div>
			</div>

			<!-- end page -->
		</div>
		<div class="foot">
			<center>Address：Chongqing Yuan Jia Gang Yuzhong Yi Road No.
				1 Tel:023-6628273</center>
			<center>
				<font style="font-size: 14px">copyright ©2013-2014 No.35 of
					1100123</font>
			</center>
			<br>
		</div>
	</div>
</body>
</html>
