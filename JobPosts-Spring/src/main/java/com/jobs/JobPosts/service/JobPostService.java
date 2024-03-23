package com.jobs.JobPosts.service;

import com.jobs.JobPosts.model.JobApplicant;
import com.jobs.JobPosts.model.JobPost;
import com.jobs.JobPosts.repository.JobApplicantRepository;
import com.jobs.JobPosts.repository.JobPostRepository;
import org.springframework.amqp.rabbit.core.RabbitTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

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

    public JobPost addpost(JobPost post)
    {
        rabbitTemplate.convertAndSend("exchange","post_routing_key",post);
        return repo.save((post));
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
                return "You have already applied for this job";
            }
        }
        JobApplicant newapplicant = arepo.save(jobApplicant);
        post.getJobapplicants().add(newapplicant);
        repo.save(post);
        return "You application was successfully accepted. Check your email for the confirmation details.";
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
