package com.service;

import java.util.List;

import com.domain.DoctorVo;

public interface IDoctorService {
	
	public List<DoctorVo> selectdoc(DoctorVo vo) throws Exception;
	
	public DoctorVo isLogin(DoctorVo vo) throws Exception;
	
	public Integer isAddDoctor(DoctorVo vo) throws Exception;
	
	public DoctorVo findDoctorById(DoctorVo vo) throws Exception;
	
	public void update(DoctorVo vo) throws Exception;
	
	public Integer delete(DoctorVo vo) throws Exception;

	public int updateDoctor(DoctorVo user) throws Exception;


}
