const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const path = require('path');
 
const app = express();
 
app.use(cors());
app.use(express.json());
 
app.use(express.static(path.join(__dirname, 'public')));
 
// Подключение к MySQL
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'rootsssM',
    database: 'marili'
});
 
// Проверка подключения
db.connect(err => {
    if (err) {
        console.log('Ошибка подключения:', err);
    } else {
        console.log('MySQL подключен');
    }
});
 
// Сохранение брони
app.post('/reserve', (req, res) => {
 
    const { name, phone, date, time, tableNumber } = req.body;
 
    const sql = `
        INSERT INTO reservations
        (name, phone, date, time, table_number)
        VALUES (?, ?, ?, ?, ?)
    `;
 
    db.query(
        sql,
        [name, phone, date, time, tableNumber],
        (err, result) => {
 
            if (err) {
                console.log(err);
                res.status(500).json({
                    message: 'Ошибка сервера'
                });
            } else {
                res.json({
                    message: 'Бронь сохранена'
                });
            }
        }
    );
});
 
app.listen(3000, () => {
    console.log('Сервер запущен: http://localhost:3000');
});