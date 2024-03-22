package com.jobs.JobPostsMongo.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.CreatedDate;

import java.util.*;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class JobPost
{
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    @Column(columnDefinition = "SERIAL")
    private Long pid;

    @Temporal(TemporalType.DATE)
    private Date date = new Date();

    @Column(length = 20)
    private String title;

    @Column(length = 20)
    private String company;

    @Column(columnDefinition = "TEXT")
    private String location;

    @Column(nullable = true)
    private int exp;

    @Column(nullable = true, precision = 5)
    private Float salary;

    @Column(length = 10)
    private String type;

    @Column(columnDefinition = "TEXT")
    private String description;

    @Column(length = 20)
    private List<String> skills;

    @ManyToMany
    private List<JobApplicant> jobapplicants;

}
