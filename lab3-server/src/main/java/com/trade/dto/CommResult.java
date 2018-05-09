package com.trade.dto;

import java.io.Serializable;

/**
 * Created by maxiaochi1 on 2018/4/30.
 */
public class CommResult<T> implements Serializable   {

    private String code;

    private String msg;

    private T data;

    public CommResult(String code, String msg) {
        this.code = code;
        this.msg = msg;
    }

    public CommResult(String code, String msg, T data) {
        this.code = code;
        this.msg = msg;
        this.data = data;
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

    public T getData() {
        return data;
    }

    public void setData(T data) {
        this.data = data;
    }



    public static <T> CommResult<T> createResult(ResponseCode code, String msg) {
        return new CommResult<T>(code.getCode(), msg);
    }

    public static <T> CommResult<T> createResult(ResponseCode code, String msg, T data) {
        return new CommResult<T>(code.getCode(), msg, data);
    }
}
