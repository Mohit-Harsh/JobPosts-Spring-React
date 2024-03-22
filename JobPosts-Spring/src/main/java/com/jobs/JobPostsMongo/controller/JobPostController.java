package com.jobs.JobPostsMongo.controller;

import com.jobs.JobPostsMongo.model.JobApplicant;
import com.jobs.JobPostsMongo.model.JobPost;
import com.jobs.JobPostsMongo.service.JobPostService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Set;

@RestController
@RequestMapping("post")
public class JobPostController
{
    @Autowired
    private JobPostService service;

    @GetMapping("/")
    public List<JobPost> getposts()
    {
        return service.getposts();
    }

    @GetMapping("/{pid}/applicants")
    public List<JobApplicant> getapplicants(@PathVariable int pid)
    {
        return service.getapplicants(pid);
    }

    @PostMapping("/")
    public void addpost(@RequestBody JobPost post)
    {
        service.addpost(post);
    }

    @DeleteMapping("/{pid}")
    public void deletepost(@PathVariable int pid)
    {
        service.deletepost(pid);
    }

    @PostMapping("/{pid}/apply")
    public String apply(@PathVariable int pid, @RequestBody JobApplicant jobApplicant)
    {
        return service.apply(pid, jobApplicant);
    }

    @GetMapping("/search/{text}")
    public List<JobPost> searchpost(@PathVariable String text)
    {
        return service.searchPost(text);
    }

}
