const tables = document.querySelectorAll('.table');
const selectedTableInput = document.getElementById('selectedTable');
const confirmation = document.getElementById('confirmation');
 
let selectedTable = null;
 
// Выбор столика
tables.forEach(table => {
 
    table.addEventListener('click', () => {
 
        if (table.classList.contains('busy')) return;
 
        if (selectedTable) {
            selectedTable.classList.remove('selected');
        }
 
        table.classList.add('selected');
 
        selectedTable = table;
 
        selectedTableInput.value = table.dataset.id;
    });
 
});
 
// Отправка формы
document.getElementById('reserveForm')
.addEventListener('submit', async e => {
 
    e.preventDefault();
 
    const name = document.getElementById('name').value.trim();
 
    const phone = document.getElementById('phone').value.trim();
 
    const date = document.getElementById('date').value;
 
    const time = document.getElementById('time').value;
 
    const tableNumber = selectedTableInput.value;
 
    if (!name || !phone || !date || !time || !tableNumber) {
 
        confirmation.textContent =
            'Заполните все поля';
 
        confirmation.style.color = '#ff8888';
 
        return;
    }
 
    try {
 
        const response = await fetch('/reserve', {
 
            method: 'POST',
 
            headers: {
                'Content-Type': 'application/json'
            },
 
            body: JSON.stringify({
                name,
                phone,
                date,
                time,
                tableNumber
            })
        });
 
        const data = await response.json();
 
        confirmation.style.color = '#f1d6a1';
 
        confirmation.textContent =
            `Столик №${tableNumber} забронирован!`;
 
        selectedTable.classList.remove('selected');
 
        selectedTable.classList.add('busy');
 
        selectedTable = null;
 
        selectedTableInput.value = '';
 
        document.getElementById('reserveForm').reset();
 
    } catch (error) {
 
        confirmation.style.color = '#ff8888';
 
        confirmation.textContent =
            'Ошибка соединения с сервером';
    }
 
});

















// const tables = document.querySelectorAll('.table');
// const selectedTableInput = document.getElementById('selectedTable');
// const confirmation = document.getElementById('confirmation');
// let selectedTable = null;
 
// // Выбор столика
// tables.forEach(table => {
//   table.addEventListener('click', () => {
//     if (table.classList.contains('busy')) return; // нельзя выбрать занятый
//     if (selectedTable) selectedTable.classList.remove('selected');
//     table.classList.add('selected');
//     selectedTable = table;
//     selectedTableInput.value = table.dataset.id;
//   });
// });
 
// // Обработка формы
// document.getElementById('reserveForm').addEventListener('submit', e => {
//   e.preventDefault();
//   const name = document.getElementById('name').value.trim();
//   const phone = document.getElementById('phone').value.trim();
//   const date = document.getElementById('date').value;
//   const time = document.getElementById('time').value;
//   const table = selectedTableInput.value;
 
//   if (!name || !phone || !date || !time || !table) {
//     confirmation.textContent = 'Пожалуйста, заполните все поля и выберите столик.';
//     confirmation.style.color = '#f88';
//     return;
//   }
 
//   confirmation.style.color = '#f1d6a1';
//   confirmation.textContent = `Столик №${table} успешно забронирован на ${date} в ${time}. До встречи в MariLi, ${name}!`;
 
//   // Помечаем столик как занятый
//   selectedTable.classList.remove('selected');
//   selectedTable.classList.add('busy');
//   selectedTable = null;
//   selectedTableInput.value = '';
// });
 