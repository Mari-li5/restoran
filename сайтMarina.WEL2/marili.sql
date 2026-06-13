CREATE DATABASE marili;
 
USE marili;
 
CREATE TABLE reservations (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    phone VARCHAR(50) NOT NULL,
    reservation_date DATE NOT NULL,
    reservation_time VARCHAR(20) NOT NULL,
    table_number INT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);