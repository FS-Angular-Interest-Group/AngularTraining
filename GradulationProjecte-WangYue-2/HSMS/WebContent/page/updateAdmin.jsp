<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="s" uri="/struts-tags"%>
<%
	String path = request.getContextPath();
	String basePath = request.getScheme() + "://"
			+ request.getServerName() + ":" + request.getServerPort()
			+ path + "/";
%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<link href="css/main.css" rel="stylesheet" type="text/css" />
<link href="css/middle.css" rel="stylesheet" type="text/css" />
<script type="text/javascript" src="js/jquery.js"></script>
<script type="text/javascript" src="js/work.js"></script>
<base href="<%=basePath %>">
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>update the adminInfo</title>

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
					<li><a href="<%=request.getContextPath()%>/page/adminPage.jsp"
						title="The hospital home page">Home page</a></li>

					<li><a
						href="queryAdmin!findAdminById?user.id=<s:property value="user.id" />"
						title="AdministratorInfo">AdminInfo</a>
						<ul>
							<li><a href="queryAdmin!select" title="AdministratorInfo">QueryAdminInfo</a>
							</li>
						</ul></li>

					<li><a
						href="<%=request.getContextPath()%>/page/doctorPage.jsp"
						title="DoctorInfo">DoctorInfo</a>
						<ul>
							<li><a
								href="<%=request.getContextPath()%>/page/doctor/ModifydoctorPage.jsp"
								title="ModifyDoctorInfo" target="main">QueryDoctorInfo</a></li>
							<li><a
								href="<%=request.getContextPath()%>/page/doctor/AddDctor.jsp"
								title="AddDctor" target="main">AddDctor</a></li>
						</ul></li>

					<li><a
						href="<%=request.getContextPath()%>/page/patient/patientInfo.jsp"
						title="PatienInfo">PatienInfo</a></li>

					<li><a href="#" title="Education">Education</a></li>

					<li><a href="*" title="Research" target="main">Research</a></li>

					<li><a href="*" title="About">About</a></li>
				</ul>
			</div>
		</div>
		<br> <br>
	</div>
	<form id="form">
		<div class="user" style="margin-left: 200px;">
			<s:form method="post" theme="simple" onsubmit="return formSubmit();">
				<p></p>
				<table border="0" cellpadding="1" cellspacing="1" width="95%">
					<s:hidden name="user.id" />
					<tr>
						<td align="right" width="10%">UserName：</td>
						<td width="20%"><s:textfield name="user.username"
								cssClass="TextInput" id="username" /></td>
						<td align="right" width="10%">PassWord：</td>
						<td width="20%"><s:textfield name="user.passwd"
								cssClass="TextInput" id="passwd" /></td>
						<td align="right" width="10%">TelePhone：</td>
						<td width="20%"><s:textfield name="user.tel"
								cssClass="TextInput" id="tel" /></td>
						<td width="10%">&nbsp;</td>
					</tr>
				</table>
				<p></p>
				<div style="margin-left: 30px; margin-right: 0px">
					<table border="0" cellpadding="0" cellspacing="0" width="95%">
						<tr>
							<td width="10%"><s:submit value="Save" cssClass="BtnAction"
									method="updateAdmin"></s:submit></td>
							<td width="10%"><input type="button" class="BtnAction"
								value="Back" onClick="history.go(-1);" /></td>
							<td width="80%">&nbsp;</td>
						</tr>
					</table>
				</div>
			</s:form>
		</div>
	</form>
	<br>
	<br>
	<br>
	<br>
	<br>
	<br>
	<br>
	<br>
	<br>
	<br>
	<br>
	<br>
	<br>
	<br>
	<br>
	<br>
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
</body>
</html>