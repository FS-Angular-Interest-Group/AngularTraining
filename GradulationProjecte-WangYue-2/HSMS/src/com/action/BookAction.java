package com.action;

import java.util.List;

import com.domain.BookVo;
import com.opensymphony.xwork2.ModelDriven;
import com.service.IBookService;
import com.service.impl.BooktServiceImpl;

public class BookAction extends BaseAction implements ModelDriven<BookVo> {
	private static final long serialVersionUID = -3736466485870891702L;
	private BookVo user = new BookVo();
	private List<BookVo> list;
	private IBookService service = new BooktServiceImpl();

	/**
	 * book
	 * 
	 * @return
	 * @return
	 */
	public String book() {
		try {
			int i = service.book(user);
			if (i < 0) {
				return "failure";
			}
		} catch (Exception e) {
			e.printStackTrace();
			return "failure";
		}
		return "success";
	}

	public BookVo getUser() {
		return user;
	}

	public void setUser(BookVo user) {
		this.user = user;
	}

	public List<BookVo> getList() {
		return list;
	}

	public void setList(List<BookVo> list) {
		this.list = list;
	}

	public IBookService getService() {
		return service;
	}

	public void setService(IBookService service) {
		this.service = service;
	}

	@Override
	public BookVo getModel() {
		// TODO Auto-generated method stub
		return null;
	}

}
