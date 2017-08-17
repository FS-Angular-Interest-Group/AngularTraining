package com.dao.impl;

import java.util.List;

import com.dao.IDoctorDao;
import com.domain.DoctorVo;
import com.ibatis.sqlmap.client.SqlMapClient;

@SuppressWarnings("unchecked")
public class DoctorDaoImpl extends BaseDao implements IDoctorDao{
	
	/**
	 * Doctor登录
	 */
	@Override
	public DoctorVo isLogin(DoctorVo vo) throws Exception {
		DoctorVo docotr  = null;
		try {
			SqlMapClient smc = super.getSqlMapClient();
			smc.startTransaction();
			docotr = (DoctorVo) smc.queryForObject("loginDoctor.isLogin", vo);
			smc.commitTransaction();
			super.endTransaction(smc);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return docotr;
	}
	/**
	 * 增加Doctor
	 */
	@Override
	public Integer isAddDoctor(DoctorVo vo) throws Exception  {
		//获取SqlMapClient对象
		SqlMapClient smc = super.getSqlMapClient();
		//事物开始
		smc.startTransaction();
		//执行新增语句
		Integer i = (Integer) smc.insert("user.insertDoctor",vo);
		//提交
		smc.commitTransaction();
		//结束事物
		super.endTransaction(smc);
		return i;
	}

	@Override
	public int updateDoctor(DoctorVo vo) throws Exception {
		//获取SqlMapClient对象
		SqlMapClient smc = super.getSqlMapClient();
		//事物开始
		smc.startTransaction();
		//执行修改语句
		smc.update("updateD", vo);
		//提交
		smc.commitTransaction();
		//结束事物
		super.endTransaction(smc);
		return 1;
	}

	@Override
	public Integer delete(DoctorVo vo) {
		
		return null;
	}
/**
 * 通过ID查询Doctor信息
 */
	@Override
	public DoctorVo findDoctorById(DoctorVo vo) throws Exception {
		SqlMapClient smc = super.getSqlMapClient();
		smc.startTransaction();
		List<DoctorVo> list = smc.queryForList("user.selectdocById",vo);
		smc.commitTransaction();
		super.endTransaction(smc);
		return list.get(0);
	}

	@Override
	/**
	 * 查询所doc所有信息
	 */
	public List<DoctorVo> selectdoc(DoctorVo vo) throws Exception {
		SqlMapClient smc = super.getSqlMapClient();
		smc.startTransaction();
		List<DoctorVo> list = smc.queryForList("user.selectdoc");
		smc.commitTransaction();
		super.endTransaction(smc);
		return list;
	}

	
}
