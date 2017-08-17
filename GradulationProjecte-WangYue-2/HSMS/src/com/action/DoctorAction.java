package com.action;

import java.util.List;

import com.domain.DoctorVo;
import com.service.IDoctorService;
import com.service.impl.DoctorServiceImpl;

/**
 * @author wy
 *
 */
public class DoctorAction extends BaseAction{
	private static final long serialVersionUID = -3736466485870891702L;
	private DoctorVo user = new DoctorVo();
	private List<DoctorVo> list;
	private IDoctorService service = new DoctorServiceImpl();
	
	@Override
	public String execute() throws Exception {
		return super.execute();
	}
	
	/**
	 * 登录方法
	 * @return
	 */
	public String isLogin(){
		System.out.println("-------Doctor------");
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
	 * 增加Doctor用户
	 */
	
	public String isAddDoctor(){
		try {
			int i = service.isAddDoctor(user);
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
	 * 通过Id查询doctor信息
	 * @return
	 */
	public String findDoctorById(){
		try {
			user = service.findDoctorById(user);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return "find";
	}
	
	/**
	 * 查询所有doc信息
	 * @return
	 */
	public String selectdoc(){
		try {
			list = service.selectdoc(user);
		} catch (Exception e) {
			e.printStackTrace();
		}
		for(int i=0;i<list.size();i++){
			System.out.println(list.get(i).getId()+"--------");
		}
		return "success";
	}
	
	/**
	 * modify doctor info
	 * @return
	 */
	public String updateDoctor(){
		try {
			int i = service.updateDoctor(user);
			if(i<0){
				return "failure";
			}
		} catch (Exception e) {
			e.printStackTrace();
			return "failure";
		}
		return "success";
	}
	public DoctorVo getUser() {
		return user;
	}

	public void setUser(DoctorVo user) {
		this.user = user;
	}

	public IDoctorService getService() {
		return service;
	}

	public void setService(IDoctorService service) {
		this.service = service;
	}

	public static long getSerialversionuid() {
		return serialVersionUID;
	}

	public List<DoctorVo> getList() {
		return list;
	}

	public void setList(List<DoctorVo> list) {
		this.list = list;
	}
	
	}
	
	

