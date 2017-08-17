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
<title>update the doctorInfo</title>

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
						<td align="right" width="10%">Sex：</td>
						<td width="20%"><s:select label="sex" name="user.sex"
								list="#{'m':'m','f':'f'}" theme="simple" emptyOption="true"
								id="sex">
							</s:select></td>
					</tr>
					<tr>
						<td align="right" width="10%">Title：</td>
						<td width="20%"><s:textfield name="user.title"
								cssClass="TextInput" id="title" /></td>
						<td align="right" width="10%">State：</td>
						<td width="20%"><s:textfield name="user.state"
								cssClass="TextInput" id="state" /></td>
						<td align="right" width="5%">Age：</td>
						<td width="10%"><s:textfield name="user.age"
								cssClass="TextInput" id="age" /></td>
					</tr>
					<tr>
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
									method="updateDoctor"></s:submit></td>
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