package com.trade.validate;

public abstract class Tester {

    static final String ONLY_STRING_INPUT = "Parameter 'input' ONLY support primitive type.";

    public final Rule rule;

    protected Object[] args;
    protected String customMessage;

    /**
     * Define, Return in TestResult
     *
     * @param customMessage
     */
    public void setCustomMessage(String customMessage) {
        this.customMessage = customMessage;
    }

    /**
     * @param rule
     */
    Tester(Rule rule) {
        this.rule = rule;
    }

    /**
     * Execute
     *
     * @param input 
     * @return
     */
    public abstract TestResult test(Object input);

    public void setParameters(Object[] args) {
        this.args = args;
    }
}
