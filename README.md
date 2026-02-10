# Final Project

### Name:Abrayev Daniyal  
### Group: SE-2432


# Project description
This project introduces Web application Role-Based
Access Control (RBAC) using password hashing and JWT (JSON Web Tokens) to protect
your resources that connects to MongoDb database system. It is a implementation of the Learning Management System(LMS)

With the functions like:
1) Creating courses
2) Managing course materials
3) grading students
4) User stats


## Requirements
This project uses environment variables for security. You must create a .env file with MongoDB connections string locally.

Example:
`"MONGO_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/name"`

## How to install dependencies

`npm install`  

## How to run the server

`npm start` 

# 1. Refined Project Architecture (MVC Pattern)
![Server is running](https://github.com/helpicantchoose/helpicantchoose-web_technologies_2_assignment_4/blob/main/imgages/%D0%A1%D0%BD%D0%B8%D0%BC%D0%BE%D0%BA%20%D1%8D%D0%BA%D1%80%D0%B0%D0%BD%D0%B0%202026-02-01%20014914.png?raw=true)

# 2. My objects
![Server is running](https://github.com/helpicantchoose/helpicantchoose-web_technologies_2_assignment_4/blob/main/imgages/%D0%A1%D0%BD%D0%B8%D0%BC%D0%BE%D0%BA%20%D1%8D%D0%BA%D1%80%D0%B0%D0%BD%D0%B0%202026-02-01%20015150.png?raw=true)

# 3. Authentication & Role-Based Access Control (RBAC)
![Server is running](https://github.com/helpicantchoose/helpicantchoose-web_technologies_2_assignment_4/blob/main/imgages/%D0%A1%D0%BD%D0%B8%D0%BC%D0%BE%D0%BA%20%D1%8D%D0%BA%D1%80%D0%B0%D0%BD%D0%B0%202026-02-01%20015225.png?raw=true)


## Example 
Good request
![Server is running](https://github.com/helpicantchoose/helpicantchoose-web_technologies_2_assignment_4/blob/main/imgages/%D0%A1%D0%BD%D0%B8%D0%BC%D0%BE%D0%BA%20%D1%8D%D0%BA%D1%80%D0%B0%D0%BD%D0%B0%202026-02-01%20015510.png?raw=true)

Unauthorized
![Server is running](https://github.com/helpicantchoose/helpicantchoose-web_technologies_2_assignment_4/blob/main/imgages/%D0%A1%D0%BD%D0%B8%D0%BC%D0%BE%D0%BA%20%D1%8D%D0%BA%D1%80%D0%B0%D0%BD%D0%B0%202026-02-01%20015831.png?raw=true)

Pages example
![Server is running](https://github.com/helpicantchoose/helpicantchoose-web_technologies_2_assignment_4/blob/main/imgages/%D0%A1%D0%BD%D0%B8%D0%BC%D0%BE%D0%BA%20%D1%8D%D0%BA%D1%80%D0%B0%D0%BD%D0%B0%202026-02-06%20031653.png?raw=true)
![Server is running](https://github.com/helpicantchoose/helpicantchoose-web_technologies_2_assignment_4/blob/main/imgages/%D0%A1%D0%BD%D0%B8%D0%BC%D0%BE%D0%BA%20%D1%8D%D0%BA%D1%80%D0%B0%D0%BD%D0%B0%202026-02-06%20031747.png?raw=true)
![Server is running](https://github.com/helpicantchoose/helpicantchoose-web_technologies_2_assignment_4/blob/main/imgages/%D0%A1%D0%BD%D0%B8%D0%BC%D0%BE%D0%BA%20%D1%8D%D0%BA%D1%80%D0%B0%D0%BD%D0%B0%202026-02-06%20031725.png?raw=true)
![Server is running](https://github.com/helpicantchoose/helpicantchoose-web_technologies_2_assignment_4/blob/main/imgages/%D0%A1%D0%BD%D0%B8%D0%BC%D0%BE%D0%BA%20%D1%8D%D0%BA%D1%80%D0%B0%D0%BD%D0%B0%202026-02-06%20031710.png?raw=true)
