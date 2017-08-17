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

<script type="text/javascript">
	$(function() {
		$("#inserBtn").click(function() {
			location.href = "addDoctor.jsp";
		});
	});
</script>
</head>

<body>
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

		<div
			style="padding-bottom: 20px; margin-left: 230px; margin-top: 10px;">
			<table border="0" cellpadding="0" cellspacing="0" width="95%">
				<tr>
					<td width="10%"><input id="inserBtn" type="button" value="Add" />
					</td>
					<td width="10%"><input type="reset" value="Reset"
						class="BtnAction" /></td>
					<td width="60%">&nbsp;</td>
				</tr>
			</table>
		</div>
		<div class="doctor">
			<p></p>

			<s:form method="post" theme="simple">
				<p></p>
				<div style="margin-left: 30px; margin-right: 0px">
					<table border="0" cellpadding="0" cellspacing="0" width="95%">

					</table>
				</div>

				<p></p>

				<div style="margin-left: 220px; margin-right: 0px">
					<table width="80%" border="1" cellpadding="0" cellspacing="0">
						<tr>
							<td align="center" width="7%" class="td_title">Chose</td>
							<td align="center" width="10%" class="td_title">id</td>
							<td align="center" width="15%" class="td_title">UserName</td>
							<td align="center" width="10%" class="td_title">Sex</td>
							<td align="center" width="10%" class="td_title">Title</td>
							<td align="center" width="10%" class="td_title">State</td>
							<td align="center" width="10%" class="td_title">Age</td>
							<td align="center" width="23%" class="td_title">Telephone</td>
						</tr>
						<s:iterator value="list" var="doctor">
							<tr>
								<td align="center" class="td_border"><input name="id"
									type="checkbox" title="选中后可进行删除操作"
									value='<s:property value="user.id" />'></td>

								<td align="center" class="td_border"><s:property value="id" />
								</td>
								<td align="center" class="td_border"><s:property
										value="username" />
								<td align="center" class="td_border"><s:property
										value="sex" /></td>
								<td align="center" class="td_border"><s:property
										value="title" />
								<td align="center" class="td_border"><s:property
										value="state" /></td>
								<td align="center" class="td_border"><s:property
										value="age" />
								<td align="center" class="td_border"><s:property
										value="tel" /></td>
							</tr>
						</s:iterator>
					</table>

				</div>
			</s:form>

		</div>
		<div style="clear: both;">&nbsp;</div>
	</div>
	<BR>
	<BR>
	<BR>
	<BR>
	<BR>
	<BR>
	<BR>
	<BR>
	<BR>
	<BR>
	<BR>
	<BR>
	<BR>
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








