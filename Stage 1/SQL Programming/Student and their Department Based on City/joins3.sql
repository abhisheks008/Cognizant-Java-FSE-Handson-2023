select student.student_name, department.department_name 
from student, department
where student.department_id = department.department_id
and student.city = "Coimbatore"
order by student.student_name;
