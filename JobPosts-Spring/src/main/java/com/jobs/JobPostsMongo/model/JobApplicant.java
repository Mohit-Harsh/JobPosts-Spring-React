package com.jobs.JobPostsMongo.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.Set;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class JobApplicant
{
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    @Column(columnDefinition = "SERIAL")
    private int uid;

    @Column(length = 30)
    private String name;

    @Column(length = 64)
    private String email;

    @Column(columnDefinition = "BIGINT",precision = 10, scale = 0)
    private Long phone;

    @Column(columnDefinition = "TEXT")
    private String qualification;

    @JsonIgnore
    @ManyToMany(mappedBy = "jobapplicants", cascade = CascadeType.ALL)
    private List<JobPost> jobpostlist;

}
