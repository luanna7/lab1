package com.trade.validate;
import org.springframework.beans.factory.InitializingBean;


public class EmailTester extends TesterWithRegex implements InitializingBean {

	
	static final String EMAIL_REGEX =
			"^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$";
	
	static final String messageT = "Please enter a valid email address.";
	
	public EmailTester() {
		super(Rule.Email,EMAIL_REGEX,messageT);
	}

	@Override
	public void afterPropertiesSet() throws Exception {
	}


}
