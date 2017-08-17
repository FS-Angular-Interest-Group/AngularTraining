package com.dao;

import java.util.List;

import com.domain.DoctorVo;

public interface IDoctorDao {
	public List<DoctorVo> selectdoc(DoctorVo vo) throws Exception;
	public DoctorVo isLogin(DoctorVo vo) throws Exception;
	public DoctorVo findDoctorById(DoctorVo vo) throws Exception;
	public Integer isAddDoctor(DoctorVo vo) throws Exception;
	public int updateDoctor(DoctorVo vo) throws Exception;
	public Integer delete(DoctorVo vo) throws Exception;
}
