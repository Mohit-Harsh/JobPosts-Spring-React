package com.jobs.JobPostsMongo.service;

import com.jobs.JobPostsMongo.model.JobPost;
import com.jobs.JobPostsMongo.repository.JobPostRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class JobPostService
{
    @Autowired
    private JobPostRepository repo;

    public List<JobPost> getposts()
    {
        return repo.findAll();
    }

    public JobPost addpost(JobPost post)
    {
        return repo.save(post);
    }
}
