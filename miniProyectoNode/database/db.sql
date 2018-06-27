--Base de datos --

CREATE DATABASE crudnode;

USE crudnode;

CREATE TABLE clientes(

    id int  UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    address VARCHAR(100) NOT NULL,
    phone VARCHAR(15),
);