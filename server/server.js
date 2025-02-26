// Для работы с сервером подключим модуль http
const http = require("http");

// Создаем сервер с помощью вызова метода http.createServer()
const server = http.createServer((request, response) => {
  // Устанавливаем заголовок ответа с помощью метода response.writeHead()
  response.writeHead(200, { "Content-Type": "text/plain" });
  // С помощью метода response.end() отправляем ответ клиенту
  response.end("Hello");
});

// Запускаем сервер на порту 3000 c ip адресом 127.0.0.1 с помощью метода server.listen()
server.listen(3000, "127.0.0.1", () => {
  console.log("Сервер запущен на http://127.0.0.1:3000");
});
