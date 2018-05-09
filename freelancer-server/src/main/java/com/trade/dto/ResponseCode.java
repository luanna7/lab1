package com.trade.dto;

/**
 * Created by maxiaochi1 on 2018/4/30.
 */
public enum  ResponseCode {

    SUCCESS("00000","成功"),

    ERROR_PARAM_ERROR("1000002", "请求参数错误"),

    SYSTEM_ERROR("99999","系统异常");


    private String code;
    private String msg;

    ResponseCode(String code , String msg){
        this.code = code;
        this.msg = msg;
    }

    public String getCode() {
        return code;
    }

    public void setCode(String code) {
        this.code = code;
    }

    public String getMsg() {
        return msg;
    }

    public void setMsg(String msg) {
        this.msg = msg;
    }
}
