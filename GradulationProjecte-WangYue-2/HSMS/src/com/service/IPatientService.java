package com.service;

import java.util.List;

import com.domain.PatientVo;

public interface IPatientService {
	
	public List<PatientVo> selectPat(PatientVo vo) throws Exception;
	
	public PatientVo isLogin(PatientVo vo) throws Exception;
	
	public Integer addPatient(PatientVo vo) throws Exception;
	
	public PatientVo findPatientById(PatientVo vo) throws Exception;
	
	public void update(PatientVo vo) throws Exception;

	public void updatePass(PatientVo vo,String newpassword);
}
