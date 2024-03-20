package com.jobs.JobPostsMongo.controller;

import com.jobs.JobPostsMongo.model.JobPost;
import com.jobs.JobPostsMongo.service.JobPostService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class JobPostController
{
    @Autowired
    private JobPostService service;

    @GetMapping("/")
    public List<JobPost> getposts()
    {
        return service.getposts();
    }

    @PostMapping("/")
    public JobPost addpost(@RequestBody JobPost post)
    {
        return service.addpost(post);
    }
}
