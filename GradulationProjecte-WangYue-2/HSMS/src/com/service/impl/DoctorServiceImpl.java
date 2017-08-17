package com.service.impl;

import java.util.List;

import com.dao.IDoctorDao;
import com.dao.impl.DoctorDaoImpl;
import com.domain.DoctorVo;
import com.service.IDoctorService;

public class DoctorServiceImpl implements IDoctorService{
	IDoctorDao doctorDao = new DoctorDaoImpl();

	/**
	 * Doctor登录
	 */
	@Override
	public DoctorVo isLogin(DoctorVo vo) throws Exception {
		return doctorDao.isLogin(vo);
	}

	/**
	 * 增加Doctor
	 */
	@Override

	public Integer isAddDoctor(DoctorVo vo) throws Exception{
		int a=-1;
		try {
			doctorDao.isAddDoctor(vo);
			a=1;
		} catch (Exception e) {
			e.printStackTrace();
		}
		return a;
	}
	/**
	 * 删除Doctor
	 */
	@Override
	public Integer delete(DoctorVo vo) throws Exception {
		
		return doctorDao.delete(vo);
	}

	/**
	 * 查询Doctor
	 */
	@Override
	public DoctorVo findDoctorById(DoctorVo vo) throws Exception {
		return doctorDao.findDoctorById(vo);
	}
	
	/**
	 * 修改Doctor
	 */
	@Override
	public void update(DoctorVo vo) throws Exception {
		doctorDao.updateDoctor(vo);
	}


	
	@Override
	public List<DoctorVo> selectdoc(DoctorVo vo) throws Exception {
		List<DoctorVo> list = doctorDao.selectdoc(vo);
		return list;
	}

	@Override
	public int updateDoctor(DoctorVo user) throws Exception{
		
		return doctorDao.updateDoctor(user);
	}
}
