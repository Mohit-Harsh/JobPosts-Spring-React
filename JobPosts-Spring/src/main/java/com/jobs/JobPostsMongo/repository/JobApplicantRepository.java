package com.jobs.JobPostsMongo.repository;

import com.jobs.JobPostsMongo.model.JobApplicant;
import org.springframework.data.jpa.repository.JpaRepository;

public interface JobApplicantRepository extends JpaRepository<JobApplicant,Integer>{
}
