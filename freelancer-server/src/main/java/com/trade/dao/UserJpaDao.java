package com.trade.dao;

import com.trade.bean.UserBean;
import org.springframework.data.jpa.repository.JpaRepository;


/**
 * Created by maxiaochi1 on 2018/4/30.
 */
public interface UserJpaDao extends JpaRepository<UserBean, Long> {

    UserBean findByNameAndPassword(String name,String password);
}

