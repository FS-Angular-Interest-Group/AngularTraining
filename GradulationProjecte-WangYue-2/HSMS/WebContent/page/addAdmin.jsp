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

<title>Hospital management system</title>
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
							<li><a href="queryAdmin!select" title="AdministratorInfo">allAdminInfo</a>
							</li>
						</ul></li>

					<li><a href="QDoctor!selectdoc" title="DoctorInfo">DoctorInfo</a>
					</li>

					<li><a href="QPatient!selectPat" title="PatienInfo">PatienInfo</a>
					</li>

					<li><a href="#" title="Education">Education</a></li>

					<li><a href="*" title="Research" target="main">Research</a></li>

					<li><a href="*" title="About">About</a></li>
				</ul>
			</div>
		</div>
		<br> <br>
	</div>

	<div class="center" style="margin-left: 200px; margin-top: 10px;">
		<s:form action="queryAdmin" method="post" theme="simple">

			<table border="0" cellpadding="1" cellspacing="1" width="95%">
				<tr>
					<td align="right" width="10%">AdminName</td>
					<td width="20%"><s:textfield name="user.username"
							cssClass="TextInput" id="name" /></td>
					<td align="right" width="10%">PassWord</td>
					<td width="20%"><s:textfield name="user.password"
							cssClass="TextInput" id="password" /></td>
					<td align="right" width="10%">AdminTel</td>
					<td width="20%"><s:textfield name="user.tel"
							cssClass="TextInput" id="tel" /></td>
					<td width="10%">&nbsp;</td>
				</tr>
			</table>

			<p></p>
			<div style="margin-left: 100px; margin-right: 100px">
				<table border="0" cellpadding="0" cellspacing="0" width="95%">
					<tr>
						<td width="10%"><s:submit value="Save" cssClass="BtnAction"
								method="isAddAdmin"></s:submit></td>
						<td width="10%"><input type="button" class="BtnAction"
							value="Back" /></td>
						<td width="80%">&nbsp;</td>
					</tr>
				</table>
			</div>
		</s:form>

		<!-- end sidebars -->
		<div style="clear: both;">&nbsp;</div>
	</div>
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