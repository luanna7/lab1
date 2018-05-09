package com.trade.validate;

/**
 * Created by maxiaochi1 on 2018/4/30.
 */
public abstract class Tester {

    static final String ONLY_STRING_INPUT = "Parameter 'input' ONLY support primitive type.";

    public final Rule rule;

    protected Object[] args;
    protected String customMessage;

    /**
     * 设置自定义消息，此消息在 TestResult 中返回
     *
     * @param customMessage 消息
     */
    public void setCustomMessage(String customMessage) {
        this.customMessage = customMessage;
    }

    /**
     * @param rule 内建Tester要标识其所属规则类型
     */
    Tester(Rule rule) {
        this.rule = rule;
    }

    /**
     * 执行测试
     *
     * @param input 请求测试的数据。此参数首先被过滤，在被传入测试对象时，必定不为null。
     * @return 如果测试通过，返回TestResult.passed为true的对象。否则，返回TestResult.passed为true的对象，并中TestResult.message中描述出错原因或者提示语。
     */
    public abstract TestResult test(Object input);

    /**
     * 根据各个测试对象不同，其它测试参数由此对象数组传入。自定义测试类中，此参数为null。
     *
     * @param args 参数
     */
    public void setParameters(Object[] args) {
        this.args = args;
    }
}

