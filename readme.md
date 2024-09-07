
---

# 📝 JobPosts-Spring-React

🚀 **JobPosts-Spring-React** is a full-stack web development project designed to streamline job postings and applications. Built using modern Java and JavaScript frameworks, this application leverages **Spring Boot** for the backend and **React.js** for the frontend. It uses **RabbitMQ** for handling email messaging queues and **PostgreSQL** as the database, ensuring robust data handling and smooth communication between services.

---

## 📂 Project Overview

This project is developed with a microservice architecture, and it is fully containerized using **Docker** and **Docker Compose** for easy deployment. By utilizing **Git** for version control, the development is seamless and scalable.

---

## ✨ Key Features

- **Job Post**:  
  - Add new job posts with an intuitive form UI.
  - Utilize an **embedded Markdown renderer** that previews job descriptions in real-time.
  - Job posters can design job descriptions in Markdown format, preview, and save them.  
  - Job descriptions maintain the same Markdown styling when viewed by applicants.

- **Job Application**:  
  - Apply to jobs through a streamlined application form.  
  - Each application is stored in the **PostgreSQL** database and added to the `email_queue`.  
  - The **email_queue** is listened to by a dedicated microservice that sends a confirmation email to the applicant.

---

## 🛠️ Technologies Used

![React.js]  ![html] ![css] ![Spring] ![RabbitMQ] ![Postgres] ![Docker]  ![git]

- **Frontend**:  
  - [React.js](https://reactjs.org/)  
  - Interactive and dynamic form UIs for job postings and applications.  

- **Backend**:  
  - [Spring Boot](https://spring.io/projects/spring-boot)  
  - Handles the business logic, job posts, and application management.

- **Messaging**:  
  - [RabbitMQ](https://www.rabbitmq.com/)  
  - Ensures that job applications trigger an email notification through a message queue.

- **Database**:  
  - [PostgreSQL](https://www.postgresql.org/)  
  - Stores job posts and job application details.

- **Containerization & Deployment**:  
  - [Docker](https://www.docker.com/) & [Docker Compose](https://docs.docker.com/compose/)  
  - Easy deployment of both backend and frontend services, along with RabbitMQ.

- **Version Control**:  
  - [Git](https://git-scm.com/)  
  - For efficient version management and collaboration.

---

## 🚀 Deployment Instructions

1. **Clone the Repository**:  
   First, clone the project repository to your local machine:
   ```bash
   git clone https://github.com/Mohit-Harsh/JobPosts-Microservice.git
   ```

2. **Run Docker Compose**:  
   Navigate to the project directory and run the following command:
   ```bash
   docker compose up
   ```

   This command will build, create, and run Docker containers for the project’s microservices.
   For further details visit the [JobPosts-Microserices](https://github.com/Mohit-Harsh/JobPosts-Microservice.git) repository.

3. **Access the Application**:  
   - **Frontend**: Access the React website at [http://localhost:5173](http://localhost:5173).  
   - **Backend**: Access the backend services at [http://localhost:8080/post/](http://localhost:8080/post/).

---


[HTML]: https://img.shields.io/badge/HTML-grey?style=for-the-badge&logo=html5
[CSS]: https://img.shields.io/badge/CSS-blue?style=for-the-badge&logo=css3
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[spring]: https://img.shields.io/badge/Spring--Boot-249141?style=for-the-badge&logo=spring&logoColor=white
[rabbitmq]: https://img.shields.io/badge/RabbitMQ-orange?style=for-the-badge&logo=rabbitmq&logoColor=white
[postgres]: https://img.shields.io/badge/PostgreSQL-blue?style=for-the-badge&logo=postgresql&logoColor=white
[docker]: https://img.shields.io/badge/Docker-20232A?style=for-the-badge&logo=docker
[git]: https://img.shields.io/badge/Git-262626?style=for-the-badge&logo=git