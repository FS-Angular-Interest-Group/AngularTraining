package com.domain;

import java.util.Date;

public class BookVo {
	private Integer id;
	private String username;
	private String sex;
	private String age;
	private String tel;
	private String describe;
	private Date booktime;	
	
	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
	}
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public String getTel() {
		return tel;
	}
	public void setTel(String tel) {
		this.tel = tel;
	}
	public String getSex() {
		return sex;
	}
	public void setSex(String sex) {
		this.sex = sex;
	}
	public String getAge() {
		return age;
	}
	public void setAge(String age) {
		this.age = age;
	}

	public String getDescribe() {
		return describe;
	}
	public void setDescribe(String describe) {
		this.describe = describe;
	}
	public Date getBooktime() {
		return booktime;
	}
	public void setBooktime(Date booktime) {
		this.booktime = booktime;
	}


}
