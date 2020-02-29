# Runningman
课设项目————基于微信小程序的帮跑腿平台设计
## 背景
在大城市生活的人，工作生活节奏快，时间紧，但有些事情必须做 却没有时间，比如送孩子上学，接孩子放学，带生病的老人去医院看病 等，如果有一个平台，能提供帮忙跑腿的有偿服务，就会给人提供很多方便。本课题的目标是设计这样一微信小程序，时间比较紧张的人，可以发布任务，并设定酬金。有时间的人，可以去接跑腿任务赚钱。
## 部署
可参考SpringBoot+MyBatis 搭建迷你小程序
https://www.imooc.com/learn/945

#### Spring中的依赖包
在讲SpringBoot中的事务管理之前，先来讲下Spring的事务管理。在Spring项目中，加入的是spring-jdbc依赖：
 
#### 配置版事务config
在使用配置文件的方式中，通常会在Spring的配置文件中配置事务管理器，并注入数据源：接下来可以直接在业务层Service的方法上或者类上添加 @Transactional。
 
#### 注解版事务
在大多数SpringBoot项目中，简单地只要在配置类或者主类上添加 @EnableTransactionManagement，并在业务层Service上添加 @Transactional即可实现事务的提交和回滚。
因为在依赖jdbc或者jpa之后，会自动配置TransactionManager。
依赖jdbc会自动配置DataSourceTransactionManager：
依赖jpa会自动配置JpaTransactionManager:
Json配置文件，将null值转为空

springboot框架整合mybatis+微信小程序
Mybatis-config.xml配置文件,实体类，dao接口，mybatis的mapper映射文件，service接口及对service接口的实现serviceimpl,，控制类
