package com.dao.impl;

import java.util.List;

import com.dao.IPatientDao;
import com.domain.PatientVo;
import com.ibatis.sqlmap.client.SqlMapClient;

@SuppressWarnings("unchecked")
public class PatientDaoImpl extends BaseDao implements IPatientDao{
	
	/**
	 * Patient登录
	 */
	@Override
	public PatientVo isLogin(PatientVo vo) throws Exception {
		PatientVo patient  = null;
		try {
			SqlMapClient smc = super.getSqlMapClient();
			smc.startTransaction();
			patient = (PatientVo) smc.queryForObject("loginPatient.isLogin", vo);
			smc.commitTransaction();
			super.endTransaction(smc);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return patient;
	}
	/**
	 * 增加Patient
	 */
	@Override
	public Integer addPatient(PatientVo vo) throws Exception  {
		//获取SqlMapClient对象
		SqlMapClient smc = super.getSqlMapClient();
		//事物开始
		smc.startTransaction();
		//执行新增语句
		Integer i = (Integer) smc.insert("user.insert",vo);
		//提交
		smc.commitTransaction();
		//结束事物
		super.endTransaction(smc);
		
		return i;
	}

	@Override
	public void updatePatient(PatientVo vo) throws Exception {
		//获取SqlMapClient对象
		SqlMapClient smc = super.getSqlMapClient();
		//事物开始
		smc.startTransaction();
		//执行修改语句
		smc.update("update", vo);
		//提交
		smc.commitTransaction();
		//结束事物
		super.endTransaction(smc);
	}

	@Override
	public PatientVo findPatientById(PatientVo vo) throws Exception {
		SqlMapClient smc = super.getSqlMapClient();
		smc.startTransaction();
		List<PatientVo> list = smc.queryForList("user.selectpatById",vo);
		smc.commitTransaction();
		super.endTransaction(smc);
		return list.get(0);
	}
	/**
	 * 查询Patient信息
	 */
	@Override
	public List<PatientVo> selectPat(PatientVo vo) throws Exception {
		SqlMapClient smc = super.getSqlMapClient();
		smc.startTransaction();
		List<PatientVo> list = smc.queryForList("user.selectPat");
		smc.commitTransaction();
		super.endTransaction(smc);
		return list;
	}
}
