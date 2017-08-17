package com.action;

import java.util.List;

import com.domain.AdminVo;
import com.opensymphony.xwork2.ModelDriven;
import com.service.IAdminService;
import com.service.impl.AdminServiceImpl;

public class AdminAction extends BaseAction implements ModelDriven<AdminVo>{
	private static final long serialVersionUID = -3736466485870891702L;
	private AdminVo user = new AdminVo();
	private List<AdminVo> list;
	private IAdminService service = new AdminServiceImpl();

	
	/**
	 * 登录方法
	 * @return
	 */

	public String isLogin(){
		System.out.println("-------Admin------");
		try {
			user = service.isLogin(user);
		} catch (Exception e) {
			e.printStackTrace();
		}
		if(user !=null){
			return "sucess";
		}else{
			return "false";
		}	
	}
	
	/**
	 * 增加Admin用户
	 */
	
	public String isAddAdmin(){
		try {
			int i = service.isAddAdmin(user);
			if(i<0){
				return "failure";
			}
		} catch (Exception e) {
			e.printStackTrace();
			return "failure";
		}
		return "success";
	}
	
	/**
	 * 修改Admin
	 */
//	public void updateAdmin(){
//		Json json = new Json();
//		try {
//			service.updateAdmin(user);
//			json.setMsg("success!");
//			json.setSuccess(true);
//		} catch (Exception e) {
//			e.printStackTrace();
//			json.setSuccess(false);
//			json.setMsg("Internal fault server!");
//		}
//		this.writeJson(json);
//	}
	public String updateAdmin(){
		try {
			int i = service.updateAdmin(user);
			if(i<0){
				return "failure";
			}
		} catch (Exception e) {
			e.printStackTrace();
			return "failure";
		}
		return "success";
	}
	
	/**
	 * 通过Id查询admin信息
	 * @return
	 */
	public String findAdminById(){
		try {
			user = service.findAdminById(user);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return "find";
	}

	/**
	 * 查询所有Admin信息
	 * @return
	 */
	public String select(){
		try {
			list = service.select(user);
		} catch (Exception e) {
			e.printStackTrace();
		}
		
		return "success";
	}
	/**
	 * 重置密码
	 * @return
	 */
	public String updatepass(){
		try {
			service.updatePass(user,"123456");
			return "sucess";
		} catch (Exception e) {
			e.printStackTrace();
		}
		return "false";
	}
	
	
	@Override
	public AdminVo getModel() {
		return user;
	}

	public AdminVo getUser() {
		return user;
	}
	

	public void setUser(AdminVo user) {
		this.user = user;
	}

	public List<AdminVo> getList() {
		return list;
	}

	public void setList(List<AdminVo> list) {
		this.list = list;
	}

	public IAdminService getService() {
		return service;
	}

	public void setService(IAdminService service) {
		this.service = service;
	}
}
