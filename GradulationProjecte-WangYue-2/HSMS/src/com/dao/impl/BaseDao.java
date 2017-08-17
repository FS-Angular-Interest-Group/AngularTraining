package com.dao.impl;

import java.io.IOException;
import java.io.Reader;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;

import com.domain.AdminVo;
import com.ibatis.common.resources.Resources;
import com.ibatis.sqlmap.client.SqlMapClient;
import com.ibatis.sqlmap.client.SqlMapClientBuilder;
@SuppressWarnings("unused")
public class BaseDao{
	
	protected SqlMapClient getSqlMapClient() throws IOException {
		String resource = "SqlMapConfig.xml";
		Reader reader = Resources.getResourceAsReader(resource);
		return SqlMapClientBuilder.buildSqlMapClient(reader);
	}
	
	protected void endTransaction(SqlMapClient smc) {
		if (smc == null) {
			return;
		}
		try {
			smc.endTransaction();
		} catch (Exception e) {
			e.printStackTrace();
		}
	}

}
