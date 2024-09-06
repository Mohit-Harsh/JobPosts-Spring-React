package com.jobs.JobPosts.rabbitmqconfig;

import org.springframework.amqp.core.*;
import org.springframework.amqp.rabbit.connection.ConnectionFactory;
import org.springframework.amqp.rabbit.core.RabbitTemplate;
import org.springframework.amqp.support.converter.Jackson2JsonMessageConverter;
import org.springframework.amqp.support.converter.MessageConverter;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class RabbiMQConfig
{
    @Bean
    public Queue confirmationQueue()
    {
        return new Queue("email_queue");
    }

    @Bean
    public TopicExchange exchange()
    {
        return new TopicExchange("exchange");
    }

    @Bean
    public Binding binding()
    {
        return BindingBuilder
                .bind(confirmationQueue())
                .to(exchange())
                .with("confirmation_email");
    }

    @Bean
    public MessageConverter converter()
    {
        return new Jackson2JsonMessageConverter();
    }

    @Bean
    public AmqpTemplate amqpTemplate(ConnectionFactory connectionFactory)
    {
        RabbitTemplate rabbitTemplate = new RabbitTemplate(connectionFactory);
        rabbitTemplate.setMessageConverter(converter());
        return rabbitTemplate;
    }

}
