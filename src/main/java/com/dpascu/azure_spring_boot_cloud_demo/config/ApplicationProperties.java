package com.dpascu.azure_spring_boot_cloud_demo.config;

import org.springframework.boot.context.properties.ConfigurationProperties;

/**
 * Properties specific to Azure Spring Boot Cloud Demo.
 * <p>
 * Properties are configured in the {@code application.yml} file.
 * See {@link io.github.jhipster.config.JHipsterProperties} for a good example.
 */
@ConfigurationProperties(prefix = "application", ignoreUnknownFields = false)
public class ApplicationProperties {
}
