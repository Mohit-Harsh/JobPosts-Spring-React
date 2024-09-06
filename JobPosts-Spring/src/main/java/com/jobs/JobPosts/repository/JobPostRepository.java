package com.jobs.JobPosts.repository;

import com.jobs.JobPosts.model.JobPost;
import jakarta.websocket.server.PathParam;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface JobPostRepository extends JpaRepository<JobPost,Integer>
{
    @Query("Select post from JobPost post where post.description ilike %:text% or post.title ilike %:text% or array_to_string(post.skills,',') ilike %:text%")
    List<JobPost> searchPost(@PathParam("text") String text);
}
