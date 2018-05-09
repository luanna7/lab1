package com.trade.service.impl;

import com.trade.bean.UserBean;
import com.trade.dao.UserJpaDao;
import com.trade.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 * Created by maxiaochi1 on 2018/4/30.
 */
@Service("userService")
public class UserServiceImpl implements UserService {

    @Autowired
    private UserJpaDao userJpaDao;

    @Override
    public UserBean getUserByNameAndPassword(String name, String password) {
        return userJpaDao.findByNameAndPassword(name,password);
    }

    @Override
    public UserBean save(UserBean user) {
        UserBean save = userJpaDao.save(user);
        return save;
    }
}
