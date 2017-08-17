function openModulUrl(modulUrl) {
	parent.mainFrame.location = modulUrl;
}

function replaceModulUrl(modulUrl) {
	document.location = modulUrl;
}

function deleteRecords(url) {
	//ȡ�õ�һ��?
	var actionForm = document.forms[0];

	var cbs = actionForm.elements;
	var i;
	for (i = 0; i < cbs.length; i++) {
		if (cbs[i].type == "checkbox" && cbs[i].checked) {
			if (!window.confirm("\u786e\u5b9a\u8981\u5220\u9664\u9009\u4e2d\u7684\u8bb0\u5f55\u5417\uff1f")) {
				return;
			} else {
				break;
			}
		}
	}
	if (i == cbs.length) {
		alert("\u8b7f\u9009\u4e2d\u8981\u5220\u9664\u7684\u8bb0\u5f55!");
		return;
	}

	actionForm.action = url;
	actionForm.submit();

}
//���ò�ѯҳ��ؼ���ֵ
function resetForm() {
	//ȡ�õ�һ��form�?
	var actionForm = document.forms[0];

	var cbs = actionForm.elements;
	var i;
	for (i = 0; i < cbs.length; i++) {
		// alert(cbs[i].type);
		if (cbs[i].type == "checkbox" && cbs[i].checked) {
			cbs[i].checked = false;
		} else if (cbs[i].type == "text") {
			cbs[i].value = "";
		} else {
			// alert(cbs[i].type);
		}
	}

}
//��ʾ��Ϣ flag=0:������Ϣ  flag=1:��ȷ��Ϣ  flag=2:��ʾ��Ϣ
function show_message(objName, flg, message) {
	var preText = "";

	var obj = document.getElementById(objName);
	if (flg == 0) {
		obj.className = "box_div_wrong";
		preText = "<img src='image/wrong.gif' style='margin-right:5px;' />";

	} else if (flg == 1) {
		obj.className = "box_div_right";
		preText = "<img src='image/right.gif' style='margin-right:5px;' />";
	} else {
		obj.className = "box_div_right";
	}
	obj.innerHTML = preText + message;

}
// ȥ��߿ո�
function trimString(str) {
	var i, j;
	if (str == "")
		return "";
	for (i = 0; i < str.length; i++)
		if (str.charAt(i) != ' ')
			break;
	if (i >= str.length)
		return "";
	for (j = str.length - 1; j >= 0; j--)
		if (str.charAt(j) != ' ')
			break;
	return str.substring(i, j + 1);
}

function out_chkEmpty(chkObjName, msg_labelName, errMessage) {
	var chk = false;
	var obj = document.getElementById(chkObjName);

	if (trimString(obj.value) != '') {
		show_message(msg_labelName, "1", '\u8f93\u5165\u6b63\u786e!');
		chk = true;
	} else {
		show_message(msg_labelName, "0", errMessage);
	}
	return chk;
}
function out_chkMaxLength(chkObjName, msg_labelName, errMessage, length) {
	var chk = false;
	var obj = document.getElementById(chkObjName);
	if ((trimString(obj.value).length > 0)
			&& (trimString(obj.value).length < length)) {
		show_message(msg_labelName, "1", '\u8f93\u5165\u6b63\u786e!');
		chk = true;
	} else {
		show_message(msg_labelName, "0", errMessage);
	}
	return chk;
}
function out_chkEmail(chkObjName, msg_labelName, errMessage, length) {
	var chk = false;
	var exp = /^[\w\.\-]+@([\w\-]+\.)+[a-z]{2,4}$/ig;
	var obj = document.getElementById(chkObjName);
	if (!out_chkMaxLength(chkObjName, msg_labelName, errMessage, length)) {
		return chk;
	}
	if (trimString(obj.value).match(exp)) {
		show_message(msg_labelName, "1", '\u8f93\u5165\u6b63\u786e!');
		chk = true
	} else {
		show_message(msg_labelName, "0", errMessage);
	}

	return chk;
}
function out_chkPhone(chkObjName, msg_labelName, errMessage) {
	var exp = /^\d{11,12}$/ig;

	var chk = false;
	var obj = document.getElementById(chkObjName);

	if ((trimString(obj.value).length > 0)
			&& (trimString(obj.value).match(exp))) {
		show_message(msg_labelName, "1", '\u8f93\u5165\u6b63\u786e!');
		chk = true
	} else {
		show_message(msg_labelName, "0", errMessage);
	}

	return chk;
}
function out_pickerDate(chkObjName, msg_labelName, errMessage) {
	var chk = false;
	var obj = dojo.widget.byId(chkObjName);
	if (trimString(obj.getValue()) != '') {
		show_message(msg_labelName, "1", '\u8f93\u5165\u6b63\u786e!');
		chk = true;
	} else {
		show_message(msg_labelName, "0", errMessage);
	}

	return chk;
}