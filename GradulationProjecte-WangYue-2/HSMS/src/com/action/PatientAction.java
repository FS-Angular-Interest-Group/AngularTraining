package com.action;

import java.util.List;

import javax.servlet.http.HttpSession;

import com.domain.Json;
import com.domain.PatientVo;
import com.opensymphony.xwork2.ModelDriven;
import com.service.IPatientService;
import com.service.impl.PatientServiceImpl;

public class PatientAction extends BaseAction implements ModelDriven<PatientVo>{
	private static final long serialVersionUID = -3736466485870891702L;
	private PatientVo user = new PatientVo();
	private String newPassword;
	private List<PatientVo> list;
	private IPatientService service = new PatientServiceImpl();
	
	
	/**
	 * 登录方法
	 * @return
	 */

	public String isLogin(){
		System.out.println("-------Patient------");
		try {
			user = service.isLogin(user);
		} catch (Exception e) {
			e.printStackTrace();
		}
		if(user.getId()!=null){
			return "sucess";
		}else{
			return "false";
		}	
	}
	
	
	/**
	 * 增加patient用户
	 * @return 
	 * @return 
	 */
	
	public String addPatient(){
		try {
			int i = service.addPatient(user);
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
	 * 修改patient
	 */
	public void updateAdmin(){
		Json json = new Json();
		try {
			service.update(user);
			json.setMsg("success!");
			json.setSuccess(true);
		} catch (Exception e) {
			e.printStackTrace();
			json.setSuccess(false);
			json.setMsg("Internal fault server!");
		}
		this.writeJson(json);
	}
	
	/**
	 * 通过Id查询patient信息
	 * @return
	 */
	public String findPatientById(){
		try {
			user = service.findPatientById(user);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return "find";
	}
	/**
	 * x修改前查询用户
	 * @param session
	 * @return
	 */
	public String toupdatpassword(HttpSession session){
		int userid=(Integer) session.getAttribute("userid");
		if(userid==0){
			return "e";
		}
		return "s";
	}
	
	/**
	 * 修改密码
	 * @return
	 */
	public String updatePass(int userid){
		try {
			user.setId(userid);
			if(user.getPassword().trim().length() < 1 && user.getPassword() == null){
				return "false";
			}
			if(newPassword.trim().length() < 1 && newPassword == null){
				return "false";
			}
			service.updatePass(user,newPassword);
			return "sucess";
		} catch (Exception e) {
			e.printStackTrace();
		}
		return "false";
	}
	
	public String selectPat(){
		try {
			list = service.selectPat(user);
		} catch (Exception e) {
			e.printStackTrace();
		}
		for(int i=0;i<list.size();i++){
			System.out.println(list.get(i).getId()+"--------");
		}
		return "success";
	}
	@Override
	public PatientVo getModel() {
		return null;
	}
	

	public PatientVo getUser() {
		return user;
	}

	public void setUser(PatientVo user) {
		this.user = user;
	}

	public List<PatientVo> getList() {
		return list;
	}

	public void setList(List<PatientVo> list) {
		this.list = list;
	}

	public IPatientService getService() {
		return service;
	}

	public void setService(IPatientService service) {
		this.service = service;
	}

	public String getNewPassword() {
		return newPassword;
	}

	public void setNewPassword(String newPassword) {
		this.newPassword = newPassword;
	}




}
