use employee;
create table employee_details 
(empid Integer primary key,
name varchar(20) not null,
gender varchar(10) not null,
dept varchar(10) not null,
salary decimal(20) not null);

select * from employee_details;

rename table employee_details to employee;

alter table employee
add experience_in_years Integer not null;

select * from employee;
insert into employee (empid,name,gender,dept,salary,experience_in_years) 
values (1,'nishanth','male','manager',120000,6),
(2, 'Priya', 'Female', 'HR', 60000, 3),
(3, 'Arun', 'Male', 'Developer', 80000, 4),
(4, 'Divya', 'Female', 'Designer', 70000, 2),
(5, 'Karthik', 'Male', 'Developer', 90000, 5),
(6, 'Sneha', 'Female', 'Tester', 65000, 3),
(7, 'Ravi', 'Male', 'Support', 55000, 2),
(8, 'Meena', 'Female', 'HR', 62000, 3),
(9, 'Vikram', 'Male', 'Manager', 110000, 7),
(10, 'Aishwarya', 'Female', 'Developer', 95000, 6),
(11, 'Manoj', 'Male', 'Tester', 70000, 4),
(12, 'Lakshmi', 'Female', 'Support', 50000, 1),
(13, 'Suresh', 'Male', 'Developer', 88000, 5),
(14, 'Anjali', 'Female', 'Designer', 72000, 3),
(15, 'Ramesh', 'Male', 'HR', 63000, 2),
(16, 'Kavya', 'Female', 'Developer', 91000, 5),
(17, 'Harish', 'Male', 'Manager', 115000, 8),
(18, 'Deepa', 'Female', 'Tester', 68000, 4),
(19, 'Surya', 'Male', 'Support', 52000, 2),
(20, 'Janani', 'Female', 'Designer', 75000, 3);




create table ProjectAssignments
(empid Integer primary key,
project_id Integer not null,
hours_spent Integer not null);

INSERT INTO ProjectAssignments (empid, project_id, hours_spent) VALUES
(1, 101, 120),
(2, 102, 80),
(3, 103, 95),
(4, 104, 70),
(5, 105, 110),
(6, 101, 75),
(7, 106, 60),
(8, 102, 90),
(9, 107, 130),
(10, 103, 105),
(11, 104, 85),
(12, 105, 50),
(13, 101, 100),
(14, 106, 95),
(15, 102, 80),
(16, 107, 115),
(17, 108, 140),
(18, 104, 88),
(19, 105, 65),
(20, 103, 92);

select * from ProjectAssignments;

create table TrainingAttendance
(empid Integer primary key,
Training_code varchar(10) not null,
passed varchar(10) not null
);

INSERT INTO TrainingAttendance (empid, Training_code, passed) VALUES
(1, 'T101', 'Yes'),
(2, 'T102', 'No'),
(3, 'T101', 'Yes'),
(4, 'T103', 'Yes'),
(5, 'T102', 'No'),
(6, 'T101', 'Yes'),
(7, 'T104', 'No'),
(8, 'T102', 'Yes'),
(9, 'T105', 'Yes'),
(10, 'T103', 'No'),
(11, 'T101', 'Yes'),
(12, 'T104', 'No'),
(13, 'T102', 'Yes'),
(14, 'T105', 'Yes'),
(15, 'T101', 'No'),
(16, 'T103', 'Yes'),
(17, 'T105', 'Yes'),
(18, 'T104', 'No'),
(19, 'T102', 'Yes'),
(20, 'T101', 'Yes');

select * from TrainingAttendance;


/*1.Find all departments with more than 7 employees and an average salary above ₹70,000.*/
select dept as Department,avg(salary) as Average_Salary
from employee
group by dept
having count(*) > 2 and avg(salary) > 70000;

/*2.List all employees who have worked on
 at least 3 distinct projects and whose total hours exceed 200.*/

 select *
 from employee
 where empid in (select empid
 from projectassignments
 group by empid
 having count(Distinct project_id) >= 3 and sum(hours_spent) > 10);
 
 

/* 4. How many employees work in each department?*/
select count(*) as no_of_emp,dept
from employee
group by dept;

/* 5. For each department, show total, average, minimum, and maximum salary. */
select dept, sum(salary) as Total_Salary,
avg(salary) as Average_Salary,
min(salary) as Minimum_Salary,
max(salary) as Maximum_Salary
from employee
group by dept;

/* 6.Show departments where the total salary budget is over ₹2,500,000. */

select dept
from employee
group by dept
having sum(salary) > 250000 ;

/*7.For each project, find out how many hours have been logged across all employees.*/

select *
from ProjectAssignments;

select project_id as project,sum(hours_spent)
from ProjectAssignments
group by project_id;

/*8.List departments with average experience ≥ 5 years*/
select * from employee;

select dept,avg(experience_in_years) as Experience
from employee
group by dept
having avg(experience_in_years) >= 5;

/*9.Which gender has the higher average salary?*/
SELECT gender, AVG(salary) AS avg_salary
FROM employee
GROUP BY gender
ORDER BY avg_salary DESC
limit 1;

/*10.Find the project with the highest total hours logged.*/
select project_id as Project,sum(hours_spent) as Total_hours_logged
from projectassignments
group by project_id
order by Total_hours_logged desc
limit 1;