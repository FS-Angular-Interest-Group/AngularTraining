package com.dao.impl;

import java.util.List;

import com.dao.IAdminDao;
import com.domain.AdminVo;
import com.ibatis.sqlmap.client.SqlMapClient;

@SuppressWarnings("unchecked")
public class AdminDaoImpl extends BaseDao implements IAdminDao{
	
	/**
	 * Admin登录
	 */
	@Override
	public AdminVo isLogin(AdminVo vo) throws Exception {
		AdminVo admin  = null;
		try {
			SqlMapClient smc = super.getSqlMapClient();
			smc.startTransaction();
			admin = (AdminVo) smc.queryForObject("loginAdmin.isLogin", vo);
			smc.commitTransaction();
			super.endTransaction(smc);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return admin;
	}
	/**
	 * 增加Admin
	 */
	@Override
	public Integer isAddAdmin(AdminVo vo) throws Exception  {
		//获取SqlMapClient对象
		SqlMapClient smc = super.getSqlMapClient();
		//事物开始
		smc.startTransaction();
		//执行新增语句
		Integer i = (Integer) smc.insert("user.insertA",vo);
		//提交
		smc.commitTransaction();
		//结束事物
		super.endTransaction(smc);
		return i;
	}
	
	/**
	 * 修改Admin信息
	 */
	@Override
	public int updateAdmin(AdminVo vo) throws Exception {
		//获取SqlMapClient对象
		SqlMapClient smc = super.getSqlMapClient();
		//事物开始
		smc.startTransaction();
		//执行修改语句
		smc.update("user.updateA", vo);
		//提交
		smc.commitTransaction();
		//结束事物
		super.endTransaction(smc);
		return 1;
	}

	

		/**
		 * 通过id查询Admin信息
		 */
	@Override
	public AdminVo findAdminById(AdminVo vo) throws Exception {
		SqlMapClient smc = super.getSqlMapClient();
		smc.startTransaction();
		List<AdminVo> list = smc.queryForList("user.selectById",vo);
		smc.commitTransaction();
		super.endTransaction(smc);
		return list.get(0);
	}
		
	/**
	 * 查询所Admin所有信息
	 */
	@Override
	public List<AdminVo> select(AdminVo vo) throws Exception {
		SqlMapClient smc = super.getSqlMapClient();
		smc.startTransaction();
		List<AdminVo> list = smc.queryForList("user.select");
		smc.commitTransaction();
		super.endTransaction(smc);
		return list;
	}

	@Override
	public Integer delete(AdminVo vo) {
		
		return null;
	}

}
