package com.trade.controller;

import com.trade.domain.UserDomain;
import com.trade.dto.CommResult;
import com.trade.dto.ResponseCode;
import org.springframework.web.bind.annotation.*;

/**
 * Created by maxiaochi1 on 2018/4/30.
 */
@RestController
public class UserController {

    @RequestMapping("/register")
    @ResponseBody
    public CommResult<Boolean> registerUser(@RequestParam String name,@RequestParam String email,@RequestParam String password){
        UserDomain user = new UserDomain();
        user.setEmail(email);
        user.setPassword(password);
        user.setName(name);

        CommResult<Boolean> result = user.registerUser();

        return result;
    }

    @RequestMapping("/login")
    @ResponseBody
    public CommResult<Boolean> login(@RequestParam String name,@RequestParam String password){
        UserDomain user = new UserDomain();
        user.setName(name);
        user.setPassword(password);
        CommResult<Boolean> result = user.login();
        return result;
    }

}
