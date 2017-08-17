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
</head>

<body>
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
						href="<%=request.getContextPath()%>/page/patientPage.jsp"
						title="The hospital home page">Home page</a></li>

					<li><a href="queryDoctor!select" title="DoctorInfo">DoctorInfo</a></li>

					<li><a
						href="queryPatient!findPatientById?user.id=<s:property value="user.id" />"
						title="PatientInfo">PatientInfo</a>
						<ul>
							<li><a
								href="<%=request.getContextPath()%>/page/medicalRecord.jsp"
								title="MedicalRecord" target="main">MedicalRecord</a></li>

						</ul></li>

					<li><a
						href="<%=request.getContextPath()%>/page/patModifyPasd.jsp"
						title="ModifyPawd">ModifyPawd</a></li>
					<li><a href="#" title="Education">Education</a></li>

					<li><a href="#" title="Research" target="main">Research</a></li>

					<li><a href="#" title="About">About</a></li>
				</ul>
			</div>
		</div>
		<br> <br>
	</div>
	<s:form action="bookAction" theme="simple"
		style="margin-left:150px; margin-right:150px; margin-top:50px;">

		<p></p>
		<table border="0" cellpadding="1" cellspacing="1" width="95%">
			<tr>
				<td align="right" width="10%">Name</td>
				<td width="20%"><s:textfield name="user.username"
						cssClass="TextInput" id="name" /></td>
				<td align="right" width="10%">Sex</td>
				<td width="20%"><s:select label="sex" name="user.sex"
						list="#{'m':'m','f':'f'}" theme="simple" emptyOption="true"
						id="sex">
					</s:select></td>
				<td align="right" width="10%">Age</td>
				<td width="20%"><s:textfield name="user.age"
						cssClass="TextInput" id="age" /></td>
				<td width="10%">&nbsp;</td>
			</tr>
			<tr>

				<td align="right" width="10%">TelePhone</td>
				<td width="20%"><s:textfield name="user.tel"
						cssClass="TextInput" id="tel" /></td>

				<td align="right" width="10%">Description</td>
				<td width="20%"><s:textfield name="user.describe"
						cssClass="TextInput" id="description" /></td>
				<td align="right" width="10%">BookTime</td>
				<td width="20%"><s:textfield name="user.booktime"
						cssClass="TextInput" id="booktime" /></td>
				<td colspan="3">&nbsp;</td>
			</tr>
		</table>

		<p></p>
		<div style="margin-left: 100px; margin-right: 100px">
			<table border="0" cellpadding="0" cellspacing="0" width="95%">
				<tr>
					<td width="10%"><s:submit value="Submint" cssClass="BtnAction"
							method="book"></s:submit></td>
					<td width="10%"><input type="reset" class="BtnAction"
						value="Reset" /></td>
					<td width="80%">&nbsp;</td>
				</tr>
			</table>
		</div>
	</s:form>
</body>
<div style="clear: both;">&nbsp;</div>
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

