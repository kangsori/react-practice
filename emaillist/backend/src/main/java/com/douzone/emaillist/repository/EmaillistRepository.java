package com.douzone.emaillist.repository;

import java.util.List;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.douzone.emaillist.vo.EmailVo;

@Repository
public class EmaillistRepository {
	
	@Autowired
	private SqlSession sqlSession;
	
	public List<EmailVo> findAll() {
		return sqlSession.selectList("email.findAll");
	}

	public boolean insert(EmailVo emailVo) {
		return sqlSession.insert("email.insert", emailVo) == 1;
		
	}

	public boolean delete(Long no) {
		return sqlSession.delete("email.delete", no) == 1;
		
	}

}
