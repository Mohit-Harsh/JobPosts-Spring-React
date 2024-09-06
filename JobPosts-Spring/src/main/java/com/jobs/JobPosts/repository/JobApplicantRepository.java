package com.jobs.JobPosts.repository;

import com.jobs.JobPosts.model.JobApplicant;
import org.springframework.data.jpa.repository.JpaRepository;

public interface JobApplicantRepository extends JpaRepository<JobApplicant,Integer>{
}
