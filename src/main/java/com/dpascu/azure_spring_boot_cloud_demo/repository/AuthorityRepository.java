package com.dpascu.azure_spring_boot_cloud_demo.repository;

import com.dpascu.azure_spring_boot_cloud_demo.domain.Authority;

import org.springframework.data.jpa.repository.JpaRepository;

/**
 * Spring Data JPA repository for the {@link Authority} entity.
 */
public interface AuthorityRepository extends JpaRepository<Authority, String> {
}
