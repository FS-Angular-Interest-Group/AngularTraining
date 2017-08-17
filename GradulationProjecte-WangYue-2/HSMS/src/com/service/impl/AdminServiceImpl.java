package com.service.impl;

import java.util.List;

import com.dao.IAdminDao;
import com.dao.impl.AdminDaoImpl;
import com.domain.AdminVo;
import com.service.IAdminService;

public class AdminServiceImpl implements IAdminService{
	IAdminDao adminDao = new AdminDaoImpl();

	/**
	 * Admin登录
	 */
	@Override
	public AdminVo isLogin(AdminVo vo) throws Exception {
		AdminVo adminVo = adminDao.isLogin(vo);
		if(adminVo != null){
			if(adminVo.getPassword().equals(vo.getPassword())){
				return adminVo;
			}
		}
		return null;
	}

	/**
	 * 增加Admin
	 */
	@Override
	public Integer isAddAdmin(AdminVo vo) throws Exception {
		int a=-1;
		try {
			adminDao.isAddAdmin(vo);
			a=1;
		} catch (Exception e) {
			e.printStackTrace();
		}
		return a;
	}
	
	/**
	 * 删除Admin
	 */
	@Override
	public Integer delete(AdminVo vo) throws Exception {
		
		return adminDao.delete(vo);
	}

	/**
	 * 查询Admin
	 */
	@Override
	public AdminVo findAdminById(AdminVo vo) throws Exception {
		return adminDao.findAdminById(vo);
	}
	
	/**
	 * 修改Admin
	 * @return 
	 */
	@Override
	public int updateAdmin(AdminVo vo) throws Exception {
		return adminDao.updateAdmin(vo);
	}
	
	@Override
	public List<AdminVo> select(AdminVo vo) throws Exception {
		List<AdminVo> list = adminDao.select(vo);
		return list;
	}

	@Override
	public void updatePass(AdminVo user, String string) {
		// TODO Auto-generated method stub
		
	}

}
