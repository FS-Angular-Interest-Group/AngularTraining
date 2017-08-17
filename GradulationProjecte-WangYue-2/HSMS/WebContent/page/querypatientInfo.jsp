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
						<li><a href="<%=request.getContextPath()%>/page/pagePage.jsp"
							title="The hospital home page">Home page</a></li>

						<li><a href="queryDoctorInfo!selectdoc" title="DoctorInfo">DoctorInfo</a></li>

						<li><a
							href="queryPatient!findPatientById?user.id=<s:property value="user.id" />"
							title="PatientInfo">PatientInfo</a>
							<ul>
								<li><a
									href="<%=request.getContextPath()%>/page/medicalRecord.jsp"
									title="MedicalRecord" target="main">MedicalRecord</a></li>

							</ul></li>

						<li><a
							href="<%=request.getContextPath()%>/page/modifyPass.jsp"
							title="ModifyPawd">ModifyPawd</a></li>
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
			<div class="patient">
				<p></p>

				<s:form action="PatientAction" method="post" theme="simple">
					<p></p>
					<div style="margin-left: 30px; margin-right: 0px">
						<table border="0" cellpadding="0" cellspacing="0" width="95%">

						</table>
					</div>

					<p></p>

					<div style="margin-left: 250px; margin-right: 0px">
						<table width="70%" border="1" cellpadding="0" cellspacing="0">

							<tr>
								<td align="center" width="7%" class="td_title">Chose</td>
								<td align="center" width="10%" class="td_title">id</td>
								<td align="center" width="10%" class="td_title">UserName</td>
								<td align="center" width="7%" class="td_title">Sex</td>
								<td align="center" width="7%" class="td_title">Age</td>
								<td align="center" width="15%" class="td_title">Telephone</td>
							</tr>

							<s:iterator value="list" var="patient">
								<tr>
									<td align="center" class="td_border"><input name="id"
										type="checkbox" value='<s:property value="user.id" />'>
									</td>
									<td align="center" class="td_border"><s:property
											value="id" /></td>
									<td align="center" class="td_border"><s:property
											value="username" /></td>
									<td align="center" class="td_border"><s:property
											value="sex" /></td>
									<td align="center" class="td_border"><s:property
											value="age" /></td>
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
		<br> <br> <br> <br> <br> <br> <br>
		<br> <br> <br> <br> <br> <br> <br>
		<!-- end page -->
	</div>
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
