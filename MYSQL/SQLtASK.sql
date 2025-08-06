use employee;



drop table employee_details;



rename table employee_details to employee;

alter table employee
add experience_in_years Integer not null;

show tables;
select * from employee;

CREATE TABLE employee (
    eid INT PRIMARY KEY,
    name VARCHAR(50),
    job VARCHAR(50),
    salary INT,
    experience INT,
    did INT,
    hiredate DATE
);

INSERT INTO employee (eid, name, job, salary, experience, did, hiredate) VALUES
(101, 'John', 'Developer', 60000, 3, 5, '2021-01-15'),
(102, 'Alice', 'HR Executive', 50000, 4, 1, '2020-07-20'),
(103, 'David', 'Sales Rep', 45000, 2, 4, '2022-03-05'),
(104, 'Priya', 'Clerk', 30000, 1, 2, '2023-11-10'),
(105, 'Suresh', 'Developer', 65000, 3, 6, '2021-09-25'),
(106, 'Meena', 'Manager', 80000, 5, 3, '2019-06-15'),
(107, 'Arun', 'Developer', 62000, 1, 8, '2023-01-18'),
(108, 'Deepa', 'Clerk', 31000, 2, 9, '2022-08-02'),
(109, 'Ravi', 'HR Manager', 55000, 4, 10, '2020-10-10'),
(110, 'Sneha', 'Manager', 75000, 3, 11, '2021-04-07'),
(111, 'Karthik', 'Developer', 61000, 2, 12, '2023-05-20'),
(112, 'Divya', 'Developer', 62000, 2, 13, '2023-03-12'),
(113, 'Sathish', 'Developer', 59000, 3, 14, '2021-02-22'),
(114, 'Keerthi', 'Developer', 60000, 2, 15, '2022-12-01'),
(115, 'Vikram', 'Sales Rep', 46000, 4, 7, '2021-08-14'),
(116, 'Latha', 'Clerk', 29000, 1, 17, '2023-06-01'),
(117, 'Anand', 'Developer', 63000, 0, 18, '2024-01-09'),
(118, 'Renu', 'Clerk', 30500, 2, 19, '2022-04-28'),
(119, 'Ganesh', 'Developer', 64000, 3, 20, '2021-10-17'),
(120, 'Bharath', 'Sales Rep', 47000, 1, 16, '2023-07-05');


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



CREATE TABLE dept (
    dept_id INT PRIMARY KEY,
    department_name VARCHAR(50),
    location VARCHAR(50)
);

INSERT INTO dept (dept_id, department_name, location) VALUES
(1, 'HR', 'New York'),
(2, 'Finance', 'London'),
(3, 'Sales', 'San Francisco'),
(4, 'Marketing', 'Chicago'),
(5, 'IT', 'Seattle'),
(6, 'HR', 'Denver'),
(7, 'R&D', 'Boston'),
(8, 'Finance', 'Atlanta'),
(9, 'Production', 'Houston'),
(10, 'Marketing', 'Washington DC'),
(11, 'Administration', 'Miami'),
(12, 'Sales', 'Dallas'),
(13, 'Procurement', 'Phoenix'),
(14, 'Security', 'Las Vegas'),
(15, 'Public Relations', 'San Diego'),
(16, 'Business Development', 'Detroit'),
(17, 'Training', 'Portland'),
(18, 'Operations', 'Minneapolis'),
(19, 'Compliance', 'Philadelphia'),
(20, 'IT', 'Austin');

-- More Developers
UPDATE dept SET department_name = 'Developer' WHERE dept_id IN (1,3,5,7,9,11,13,15);

-- Clerks
UPDATE dept SET department_name = 'Clerk' WHERE dept_id IN (2,4,6,8);

-- Sales
UPDATE dept SET department_name = 'Sales' WHERE dept_id IN (10,12,14);

-- HR
UPDATE dept SET department_name = 'HR' WHERE dept_id IN (16,17,18);

-- Managers
UPDATE dept SET department_name = 'Manager' WHERE dept_id IN (19,20);

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

/* 6.Show departments where the total salary budget is over ₹2,50,000. */

select dept
from employee
group by dept
having sum(salary) > 250000 ;

/*7.For each project, find out how many hours have been logged across all employees.*/

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

select employee.*, salary
from employee;

/*10.Find the project with the highest total hours logged.*/
select project_id as Project,sum(hours_spent) as Total_hours_logged
from projectassignments
group by project_id
order by Total_hours_logged desc
limit 1;

select max(salary) as Second_Max_Salary,dept
from employee
group by dept
order by Second_Max_Salary desc ; 

select salary
from employee
order by salary desc limit 1 offset 2 ; 


select max(salary) as Third_Max_salary
from employee
where salary <(select max(salary)
from employee
where salary <(select max(salary)
from employee));

select * from employee;
select max(salary)
from employee;
commit;

GRANT ALL PRIVILEGES
ON employee.employee
TO 'root'@'localhost';

SHOW GRANTS FOR 'root'@'localhost';

REVOKE ALL PRIVILEGES
ON employee.employee
FROM 'root'@'localhost';

START TRANSACTION;
SAVEPOINT before_update;
UPDATE employee SET salary = salary + 1000 WHERE empid = 1;
ROLLBACK TO SAVEPOINT before_update;
COMMIT;

select * from dept;

select ename,department_name
 from employee,dept
 where employee.dept_id=dept.empid;

SHOW TABLE STATUS LIKE 'employee';

select * from dept;

-- Q1. List all employees with their department names.
select e.*,d.dname
from employee e inner join dept d
on e.did=d.did;

-- Q2. Show department names along with the names of employees in those departments.
select d.dname, group_concat(e.name separator ",") Employee
from employee e inner join dept d
on e.did = d.did
group by d.dname;

-- Q3.Count how many employees are in each department.
SELECT d.dname,count(*)
from dept d inner join employee e
on e.did = d.did
 group by dname;
 
 -- Q4.Get details of employees who work in the "HR" department.
 
 select *
 from employee e inner join dept d
 on e.did = d.did and d.dname ="hr";
 
 -- Q5.Find the names of employees and their department IDs where both the employee and department exist
select e.name,e.eid,d.dname
from employee e inner join dept d
on e.did = d.did;

select * from employee;

-- Q6.Get the names of employees along with department names, sorted by department name
select group_concat(e.name separator ",") as employees ,d.dname as department
from employee e inner join dept d
on e.did = d.did 
group by d.dname
order by d.dname;






