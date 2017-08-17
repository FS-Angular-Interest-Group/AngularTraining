package com.service.impl;

import java.util.List;

import com.dao.IBookDao;
import com.dao.IPatientDao;
import com.dao.impl.BookDaoImpl;
import com.dao.impl.PatientDaoImpl;
import com.domain.PatientVo;
import com.service.IPatientService;

public class PatientServiceImpl implements IPatientService{
	IPatientDao patientDao = new PatientDaoImpl();
	IBookDao bookDao = new BookDaoImpl();
	/**
	 * Patient登录
	 */
	@Override
	public PatientVo isLogin(PatientVo vo) throws Exception {
		return patientDao.isLogin(vo);
	}

	/**
	 * 增加Patient
	 */
	@Override
	public Integer addPatient(PatientVo vo) throws Exception {
		int a=-1;
		try {
			patientDao.addPatient(vo);
			a=1;
		} catch (Exception e) {
			e.printStackTrace();
		}
		return a;
	}

	/**
	 * 查询Patient
	 */
	@Override
	public PatientVo findPatientById(PatientVo vo) throws Exception {
		return patientDao.findPatientById(vo);
	}
	
	/**
	 * 修改Patient
	 */
	@Override
	public void update(PatientVo vo) throws Exception {
		patientDao.updatePatient(vo);
	}


	/**
	 * 查询所有patient
	 */
	@Override
	public List<PatientVo> selectPat(PatientVo vo) throws Exception {
		List<PatientVo> list = patientDao.selectPat(vo);	
		return list;
	}
	/**
	 * 修改该密码
	 * @param id 用户id
	 * @param password 新密码
	 */
	@Override
	public void updatePass(PatientVo vo, String newpassword) {
		try {
			PatientVo patientVo = findPatientById(vo);
			if(patientVo != null){
				if(patientVo.getPassword().equals(vo.getPassword())){
					patientVo.setPassword(newpassword);
					update(patientVo);
				}
			}
		} catch (Exception e) {
			e.printStackTrace();
		}
	}

}
