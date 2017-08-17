package com.service.impl;

import com.dao.IBookDao;
import com.dao.impl.BookDaoImpl;
import com.domain.BookVo;
import com.service.IBookService;

public class BooktServiceImpl implements IBookService{
	IBookDao bookDao = new BookDaoImpl();

	/**
	 * book
	 */
	@Override
	public Integer book(BookVo vo) throws Exception {
		int a=-1;
		try {
			bookDao.book(vo);
			a=1;
		} catch (Exception e) {
			e.printStackTrace();
		}
		return a;
	}



}
