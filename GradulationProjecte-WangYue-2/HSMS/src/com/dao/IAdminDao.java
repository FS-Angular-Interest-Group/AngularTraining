package com.dao;

import java.util.List;

import com.domain.AdminVo;

public interface IAdminDao {
	public List<AdminVo> select(AdminVo vo) throws Exception;
	public AdminVo isLogin(AdminVo vo) throws Exception;
	public AdminVo findAdminById(AdminVo vo) throws Exception;
	public Integer isAddAdmin(AdminVo vo) throws Exception;
	public int updateAdmin(AdminVo vo) throws Exception;
	public Integer delete(AdminVo vo) throws Exception;
}
