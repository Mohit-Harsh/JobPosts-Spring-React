package com.jobs.JobPostsMongo.service;

import com.jobs.JobPostsMongo.model.JobApplicant;
import com.jobs.JobPostsMongo.model.JobPost;
import com.jobs.JobPostsMongo.repository.JobApplicantRepository;
import com.jobs.JobPostsMongo.repository.JobPostRepository;
import org.springframework.amqp.rabbit.core.RabbitTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Set;

@Service
public class JobPostService
{
    @Autowired
    private JobPostRepository repo;

    @Autowired
    private RabbitTemplate rabbitTemplate;

    @Autowired
    private JobApplicantRepository arepo;

    public List<JobPost> getposts()
    {
        return repo.findAll();
    }

    public void addpost(JobPost post)
    {
        repo.save(post);
        rabbitTemplate.convertAndSend("exchange","post_routing_key",post);
    }

    public void deletepost(int pid)
    {
        repo.deleteById(pid);
    }

    public String apply(int pid, JobApplicant jobApplicant)
    {
        JobPost post = repo.findById(pid).get();
        for(JobApplicant applicant : post.getJobapplicants())
        {
            if(applicant.getEmail().equals(jobApplicant.getEmail()))
            {
                return "already applied";
            }
        }
        JobApplicant newapplicant = arepo.save(jobApplicant);
        post.getJobapplicants().add(newapplicant);
        repo.save(post);
        return "success";
    }

    public List<JobApplicant> getapplicants(int pid)
    {
        return repo.findById(pid).get().getJobapplicants();
    }

    public List<JobPost> searchPost(String text)
    {
        return repo.searchPost(text);
    }
}
