package com.trade.config;

import com.mchange.v2.c3p0.ComboPooledDataSource;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.env.Environment;

import java.beans.PropertyVetoException;

/**
 * Created by maxiaochi1 on 2018/4/30.
 */
@Configuration
public class DBConfig {
    @Autowired
    private Environment env;

    @Bean(name="dataSource")
    public ComboPooledDataSource dataSource() throws PropertyVetoException {
        ComboPooledDataSource dataSource = new ComboPooledDataSource();
        dataSource.setDriverClass(env.getProperty("ms.db.driverClassName"));
        System.out.println(dataSource.getDriverClass());
        dataSource.setJdbcUrl(env.getProperty("ms.db.url"));
        System.out.println(dataSource.getJdbcUrl());
        dataSource.setUser(env.getProperty("ms.db.username"));
        System.out.println(dataSource.getUser());
        dataSource.setPassword(env.getProperty("ms.db.password"));
        System.out.println(dataSource.getPassword());
        dataSource.setMaxPoolSize(20);
        dataSource.setMinPoolSize(5);
        dataSource.setInitialPoolSize(10);
        dataSource.setMaxIdleTime(300);
        dataSource.setAcquireIncrement(5);
        dataSource.setIdleConnectionTestPeriod(60);

        return dataSource;
    }

}
