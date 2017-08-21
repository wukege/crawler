/*Drop table*/

/*Create Tables*/
create table department( 
	id int primary key auto_increment,
	name varchar(20) not null,
	description varchar(100)
	);
	
create table employee( 
	id int primary key auto_increment, 
	name varchar(10) not null, 
	gender varchar(2) not null, 
	salary float(10,2),
	age int(2), 
	gmr int, 
	dept_id int 
	);