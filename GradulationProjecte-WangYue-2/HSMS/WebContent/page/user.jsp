<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="s" uri="/struts-tags"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%
	String path = request.getContextPath();
	String basePath = request.getScheme() + "://"
			+ request.getServerName() + ":" + request.getServerPort()
			+ path + "/";
%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<base href="<%=basePath %>">
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Insert title here</title>
<script type="text/javascript" src="js/jquery-1.9.1.js"></script>
<script type="text/javascript">
$(function(){
	$("#inserBtn").click(function(){
		location.href = "page/insertUser.jsp";
	});
	$("#jsonBtn").click(function(){
		location.href = "page/userJson.jsp";
	});
	$("#updateBtn").click(function(){
		var id = $("input[type=radio]:checked:checked").val();
		location.href = "userAction!selectById.action?id="+id;
	});
});
</script>
</head>
<body>
	<s:form id="form" action="">
		<s:submit id="manage" method="select" value="查询" />
		<input id="inserBtn" type="button" value="新增">
		<input id="updateBtn" type="button" value="修改">
		<input id="jsonBtn" type="button" value="通过Josn方式的查询页面">
		<table border="1">
			<thead>
				<tr>
					<th></th>
					<th>ID</th>
					<th>用户名</th>
					<th>密码</th>
				</tr>
			</thead>
			<tbody>
				<s:iterator id="user" value="list">
					<tr>
						<td><input name="id" type="radio"
							value="<s:property value="#user.id"/>" /></td>
						<td><s:property value="#user.id" /></td>
						<td><s:property value="#user.username" /></td>
						<td><s:property value="#user.password" /></td>
					</tr>
				</s:iterator>
			</tbody>
		</table>

	</s:form>

</body>
</html>