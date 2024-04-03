INSERT INTO departments(department_name)
VALUES('It'),
 ('Management'),    
('Sales'),    
('Grunt'), 
('Operator'),    
('Lead');

INSERT INTO roles (title, salary, department_id)
VALUES('Center Field', 500000, 2), 
('Left Field', 79832714, 4),
('Pitcher', 57484, 5),
('Catcher', 182893, 3),
('First Base', 1627222, 2),
('Runner', 189, 6),

INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES ("Bob", "Bobson", 1, null ), 
("Ben", "Mallar", 2, 1), 
("Barry", "Bonds", 1, 1),
("Hank", "Hill", 5, 1),
("Ricky", "Spanish", 3, 1),
("Nikko", "Malilo", 6, 1), 
("Bill", "Boldy", 4, 1),
("Han", "Hilljab", 3, 1),
("Rico", "Nasty", 2, 1),

