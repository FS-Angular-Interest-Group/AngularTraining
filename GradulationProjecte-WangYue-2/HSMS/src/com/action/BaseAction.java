package com.action;

import java.io.IOException;

import org.apache.struts2.ServletActionContext;

import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.serializer.SerializerFeature;
import com.domain.AdminVo;
import com.opensymphony.xwork2.ActionSupport;
public class BaseAction extends ActionSupport {
	private static final long serialVersionUID = -4920902583390210810L;

	public void writeJson(Object object,String jsonCallBack) {
		try {
			String json = JSON.toJSONStringWithDateFormat(object, "yyyy-MM-dd HH:mm:ss", new SerializerFeature[0]);
			ServletActionContext.getResponse().setContentType("text/html;charset=utf-8");
			ServletActionContext.getResponse().getWriter().write(jsonCallBack+"("+json+")");
			ServletActionContext.getResponse().getWriter().flush();
			ServletActionContext.getResponse().getWriter().close();
		} catch (IOException e) {
			e.printStackTrace();
		}
	}
	
	public void writeJson(Object object) {
		try {
			String json = JSON.toJSONStringWithDateFormat(object, "yyyy-MM-dd HH:mm:ss", new SerializerFeature[0]);
			ServletActionContext.getResponse().setContentType("text/html;charset=utf-8");
			ServletActionContext.getResponse().getWriter().write(json);
			ServletActionContext.getResponse().getWriter().flush();
			ServletActionContext.getResponse().getWriter().close();
		} catch (IOException e) {
			e.printStackTrace();
		}
	}
	/**
	 * 增加session
	 * 2014-4-13 下午09:52:42
	 * @param name
	 * @param object
	 */
	public void addAttributeForSession(String name, Object object) {
		ServletActionContext.getRequest().getSession().setAttribute(name, object);
	}
	
	public AdminVo getSessionUser() {
		return (AdminVo) ServletActionContext.getRequest().getSession().getAttribute("user");
	}
	
}
