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
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>Login page</title>
<link rel="stylesheet" href="css/main.css" type="text/css" />
<style type="text/css">
* {
	margin: 0;
	padding: 0;
}

body {
	font-size: 14px;
	color: #000;
}

.input_out {
	padding: 2px 8px 0pt 3px;
	height: 18px;
	border: 1px solid #CCC;
	background-color: #6699FF;
}

ul.input_test {
	margin: 20px auto 0 auto;
	width: 500px;
	list-style-type: none;
}

ul.input_test li {
	width: 500px;
	height: 22px;
	margin-bottom: 10px;
}

.input_test label {
	float: left;
	padding-right: 10px;
	width: 100px;
	line-height: 22px;
	text-align: right;
	font-size: 14px;
}

div {
	padding-top: 250px;
	width: 500px;
	margin-left: auto;
	margin-right: 100px;
}

input {
	margin-left: 10px;
}
</style>

<!-- 判断权限 -->

<script type="text/javascript">
	function login() {
		var qx = document.getElementsByName("radio");
		if (qx != null) {
			for (i = 0; i < qx.length; i++) {
				if (qx[i].checked) {
					if(qx[i].value==1){
						f1.action="loginAdmin!isLogin.action";
						f1.submit();
					}else
					if(qx[i].value==2){
						f1.action="loginDoctor!isLogin.action";
						f1.submit();
					}else{
						f1.action="loginPatient!isLogin.action";
						f1.submit();
					}
				}
			}

		}
	}
</script>
</head>
<body
	style="background-image: url('image/login.jpg'); background-repeat: no-repeat; background-position: center; background-color: #6699FF;">

	<div class="div">

		<s:form name="f1" action="" method="post">

			<table height="140">
				<tr>
					<td><s:textfield size="18" cssClass="input_out"
							name="user.username" label="UserName" /></td>
					<td><s:password size="18" cssClass="input_out"
							name="user.password" label="PassWord" /></td>
					<td><s:radio name="radio"
							list="#{'1':'Admin','2':'Doctor','3':'Patient'}" value="1" /></td>
					<td colspan="2" align="center"><input type="button"
						value="Login" onclick="login()" /> <input type="reset"
						value="Reset" /></td>

				</tr>
			</table>

			<tr>
				<td><font color="white" size="3px" style="margin-left: 100px;">
						No account? click on the <a
						href="<%=request.getContextPath() %>/page/regist.jsp">regist</a>
				</font></td>
			</tr>
		</s:form>
	</div>
</body>
</html>

