document.writeln("<script src=\"http://s13.cnzz.com/stat.php?id=4849440&web_id=4849440\" language=\"JavaScript\"></script>");
document.writeln("<script  type=\"text/javascript\" charset=\"utf-8\"  src=\"http://tui.cnzz.net/cs.php?id=1000009022\"></script>");
document.writeln("<script type=\"text/javascript\">");

document.writeln("/*两侧浮动 120*270*/");
document.writeln("var cpro_id = \"u1089586\";");
document.writeln("</script>");
document.writeln("<script src=\"http://cpro.baidustatic.com/cpro/ui/f.js\" type=\"text/javascript\"></script>");

document.writeln("<script type=\"text/javascript\">");
document.writeln("var _bdhmProtocol = ((\"https:\" == document.location.protocol) ? \" https://\" : \" http://\");");
document.writeln("document.write(unescape(\"%3Cscript src=\'\" + _bdhmProtocol + \"hm.baidu.com/h.js%3Ff4e2ac2659d57bcbd4548697ffbebf01\' type=\'text/javascript\'%3E%3C/script%3E\"));");
document.writeln("</script>");
document.writeln("");




function goTop(){
	var _btn = document.getElementById("goTop");
	if (document.documentElement && document.documentElement.scrollTop) {
		var _con = document.documentElement;
	} else if (document.body) {
		var _con = document.body;
	}
	window.onscroll = set;
	_btn.style.left = document.documentElement.scrollWidth/2 + 500 + "px";
	_btn.onclick = function (){
		_btn.style.display = "none";
		window.onscroll = null;
		this.timer = setInterval(function() {
			_con.scrollTop -= Math.ceil(_con.scrollTop * 0.3);
			if (_con.scrollTop == 0) clearInterval(_btn.timer, window.onscroll = set);
		},10);
	};
	function set() {
		_btn.style.display = _con.scrollTop ? 'block': "none";
	}
};
document.write("<div id=\"goTop\" style=\"position:fixed; bottom:60px; display:none; cursor:pointer; z-index:1; _position:absolute; _top:expression(eval(document.compatMode && document.compatMode == \'CSS1Compat\') ? documentElement.scrollTop + (documentElement.clientHeight - this.clientHeight) - 60 : document.body.scrollTop + (document.body.clientHeight - this.clientHeight) - 60);\"><a href=\"javescript:void(0)\"></a></div>");
window.onscroll = goTop;


