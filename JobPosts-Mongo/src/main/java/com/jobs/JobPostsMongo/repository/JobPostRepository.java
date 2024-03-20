package com.jobs.JobPostsMongo.repository;

import com.jobs.JobPostsMongo.model.JobPost;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface JobPostRepository extends MongoRepository<JobPost, Integer>{
}
