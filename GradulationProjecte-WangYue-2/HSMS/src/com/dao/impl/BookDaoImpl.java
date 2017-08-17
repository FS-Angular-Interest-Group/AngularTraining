package com.dao.impl;

import com.dao.IBookDao;
import com.domain.BookVo;
import com.ibatis.sqlmap.client.SqlMapClient;

public class BookDaoImpl extends BaseDao implements IBookDao{
	
	/**
	 * book
	 */
	@Override
	public Integer book(BookVo vo) throws Exception  {
		//获取SqlMapClient对象
		SqlMapClient smc = super.getSqlMapClient();
		//事物开始
		smc.startTransaction();
		//执行新增语句
		Integer i = (Integer) smc.insert("user.insertBook",vo);
		//提交
		smc.commitTransaction();
		//结束事物
		super.endTransaction(smc);
		return i;
	}

}
