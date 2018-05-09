package com.trade.holder;

import org.springframework.beans.BeansException;
import org.springframework.context.ApplicationContext;
import org.springframework.context.ApplicationContextAware;
import org.springframework.stereotype.Component;

/**
 * Created by maxiaochi1 on 2018/4/30.
 */
@Component
public class SpringApplicationHolder  implements ApplicationContextAware {
    private static ApplicationContext applicationContext = null;
    @Override
    public void setApplicationContext(ApplicationContext applicationContext) throws BeansException {
        this.applicationContext = applicationContext;
    }

    public static <T> T getBean(String name,Class<T> clazz){
        return applicationContext.getBean(name, clazz);
    }
}
