package com.trade.service;

import com.trade.bean.UserBean;

/**
 * Created by Anna on 2018/4/30.
 */
public interface UserService {

    UserBean getUserByNameAndPassword(String name, String password);

    UserBean save(UserBean user);
}
