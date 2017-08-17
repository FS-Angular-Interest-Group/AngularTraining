package com.service;

import java.util.List;

import com.domain.AdminVo;

public interface IAdminService {
	
	public List<AdminVo> select(AdminVo vo) throws Exception;
	
	public AdminVo isLogin(AdminVo vo) throws Exception;
	
	public Integer isAddAdmin(AdminVo vo) throws Exception;
	
	public AdminVo findAdminById(AdminVo vo) throws Exception;
	
	public int updateAdmin(AdminVo vo) throws Exception;
	
	public Integer delete(AdminVo vo) throws Exception;

	public void updatePass(AdminVo user, String string);
}
