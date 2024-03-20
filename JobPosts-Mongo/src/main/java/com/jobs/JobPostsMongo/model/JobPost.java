package com.jobs.JobPostsMongo.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

import java.util.List;
import java.util.Map;

@Document
@Data
@NoArgsConstructor
@AllArgsConstructor
public class JobPost
{
    @Id
    private int pid;

    @Field("title")
    private String title;
    @Field("location")
    private String location;
    @Field("exp")
    private int exp;
    @Field("salary")
    private int salary;
    @Field("type")
    private String type;
    @Field("skills")
    private List<String> skills;
    @Field("description")
    private Map<String,String> description;
}
