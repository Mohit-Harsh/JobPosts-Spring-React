package com.jobs.JobPosts.controller;

import com.jobs.JobPosts.model.JobApplicant;
import com.jobs.JobPosts.model.JobPost;
import com.jobs.JobPosts.service.JobPostService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:5173")
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
    public JobPost addpost(@RequestBody JobPost post)
    {
        return service.addpost(post);
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
