package com.trade.domain;

import com.alibaba.fastjson.JSON;
import com.google.common.base.Strings;
import com.trade.bean.UserBean;
import com.trade.dto.CommResult;
import com.trade.dto.ResponseCode;
import com.trade.holder.SpringApplicationHolder;
import com.trade.service.UserService;
import com.trade.validate.EmailTester;
import com.trade.validate.TestResult;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.util.Date;

/**
 * Created by maxiaochi1 on 2018/4/30.
 */
public class UserDomain {

    Logger logger= LoggerFactory.getLogger(UserDomain.class);

    private String name;

    private String email;

    private String password;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public CommResult<Boolean> registerUser() {
        if (Strings.isNullOrEmpty(this.getName())){
            return CommResult.createResult(ResponseCode.ERROR_PARAM_ERROR,"用户姓名为空!",Boolean.FALSE);
        }
        //邮箱格式校验
        EmailTester emailTester = new EmailTester();
        if (!emailTester.test(this.getEmail()).passed){
            return CommResult.createResult(ResponseCode.ERROR_PARAM_ERROR,"用户邮箱有误!",Boolean.FALSE);
        }
        //密码加密 TODO
        UserService userService = SpringApplicationHolder.getBean("userService", UserService.class);
        UserBean user = new UserBean();
        user.setName(this.getName());
        user.setPassword(this.getPassword());
        user.setEmail(this.getEmail());
        UserBean save = userService.save(user);
        if (save.getId() != null){
            return CommResult.createResult(ResponseCode.SUCCESS,"success",Boolean.TRUE);
        }
        return CommResult.createResult(ResponseCode.SYSTEM_ERROR,"系统异常");
    }

    public CommResult<Boolean> login() {
        //参数检验 TODO

        UserService userService = SpringApplicationHolder.getBean("userService", UserService.class);
        UserBean loginUser = userService.getUserByNameAndPassword(this.getName(), this.getPassword());
        logger.info("login:"+this.getName()+"|password:"+this.getPassword()+"|loginUser:"+JSON.toJSONString(loginUser));
        if (loginUser != null){
            return CommResult.createResult(ResponseCode.SUCCESS,"success",Boolean.TRUE);
        }
        return CommResult.createResult(ResponseCode.SUCCESS,"fail",Boolean.FALSE);
    }
}
