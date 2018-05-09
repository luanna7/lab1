package com.trade.validate;

import org.springframework.stereotype.Component;


/**
 * author : maxiaochi1
 * date   : 2016-10-26
 * 使用正则进行测试的抽象类
 */
@Component
public abstract class TesterWithRegex extends Tester {
	
	private final String regex;
	private final String messageT;
	
	TesterWithRegex(Rule rule, String regex, String messageT){
		super(rule);
		this.regex = regex;
		this.messageT = messageT;
	}

	@Override
	public TestResult test(Object input) {
		String inputS = String.valueOf(input);
	    boolean passed = inputS.matches(regex);
	    String message = passed ? null : customMessage != null ? customMessage : messageT;
	    return new TestResult(passed, message, rule);
	}

	
}
