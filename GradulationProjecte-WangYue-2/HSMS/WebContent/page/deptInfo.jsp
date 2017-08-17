<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@ taglib uri="/struts-tags" prefix="s"%>
<%
	String path = request.getContextPath();
	String basePath = request.getScheme() + "://"
			+ request.getServerName() + ":" + request.getServerPort()
			+ path + "/";
%>

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
	Img = new Array("image/meeting1 (1).jpg", "image/meeting1 (2).jpg",
			"image/meeting1 (4).jpg");
	size = Img.length;
	i = 0;
	function chImg() {
		picID.src = Img[i];
		i++;
		if (i >= size)
			i = 0;
		setTimeout("chImg()", 3000);
	}
</script>

</head>

<body onLoad="chImg()">
	<div class="title">
		<table width="70%" cellpadding="0" cellspacing="0"
			style="font-size: 11.0pt" align="center">
			<tr>
				<td width="80%"><font color=" blue" size="5px"> Hello <a
						href=""><s:property value="user.username" /> </a>,Welcome to the
						blue sky Hospital of ChongQing!
				</font></td>
				<td align="right" width="5%"><span> <font size="4px"><a
							href="<%=request.getContextPath()%>/page/login.jsp">Log off</a> </font>
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

					<li><a
						href="<%=request.getContextPath()%>/page/doctorPage.jsp"
						title="DoctorInfo">DeptInfo</a></li>

					<li><a href="#" title="DoctorInfo">PatientInfo</a></li>

					<li><a href="#" title="Education">Education</a></li>

					<li><a href="#" title="Research" target="main">Research</a></li>

					<li><a href="#" title="About">About</a></li>
				</ul>
			</div>
		</div>
		<br> <br>
	</div>

	<div class="center">

		<div style="padding-bottom: 20px;"></div>
		<div class="cement">
			<p></p>

			<s:form action="cementAction" method="post" theme="simple">
				<p></p>
				<div style="margin-left: 30px; margin-right: 0px">
					<table border="0" cellpadding="0" cellspacing="0" width="95%">

					</table>
				</div>

				<p></p>

				<div style="margin-left: 30px; margin-right: 0px">
					<table width="90%" border="1" cellpadding="0" cellspacing="0">
						<tr>
							<td align="center" width="7%" class="td_title">Chose</td>
							<td align="center" width="10%" class="td_title">Modify</td>
							<td align="center" width="10%" class="td_title">id</td>
							<td align="center" width="15%" class="td_title">UserName</td>
							<td align="center" width="10%" class="td_title">Sex</td>
							<td align="center" width="10%" class="td_title">Title</td>
							<td align="center" width="10%" class="td_title">State</td>
							<td align="center" width="10%" class="td_title">Age</td>
							<td align="center" width="23%" class="td_title">Telephone</td>
						</tr>
						<tr>
							<td align="center" class="td_border"><input name="id"
								type="checkbox" title="选中后可进行删除操作"
								value='<s:property value="user.id" />'></td>
							<td align="center" class="td_border"><a
								href='adminAction!preUpdateCement.do?cement.id=<s:property value="user.id" />'><img
									src="image/edit.gif" border="0"> </a></td>
							<td class="td_border"><s:property value="user.id" /></td>
							<td class="td_border"><s:property value="user.username" />
							<td class="td_border"><s:property value="user.sex" /></td>
							<td class="td_border"><s:property value="user.title" />
							<td class="td_border"><s:property value="user.state" /></td>
							<td class="td_border"><s:property value="user.age" />
							<td class="td_border"><s:property value="user.tel" /></td>
					</table>

				</div>
			</s:form>

		</div>
		<!-- end sidebars -->
		<div style="clear: both;">&nbsp;</div>
	</div>

	<!-- end page -->
	<div class="foot">
		<center>Address：Chongqing Yuan Jia Gang Yuzhong Yi Road No. 1
			Tel:023-6628273</center>
		<center>
			<font style="font-size: 14px">copyright ©2013-2014 No.35 of
				1100123</font>
		</center>
		<br>
	</div>
</html>








