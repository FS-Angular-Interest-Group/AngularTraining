package com.dao;

import java.util.List;

import com.domain.PatientVo;

public interface IPatientDao {
	
	public List<PatientVo> selectPat(PatientVo vo) throws Exception;
	
	public PatientVo isLogin(PatientVo vo) throws Exception;
	
	public PatientVo findPatientById(PatientVo vo) throws Exception;
	
	public Integer addPatient(PatientVo vo) throws Exception;
	
	public void updatePatient(PatientVo vo) throws Exception;
	
}
