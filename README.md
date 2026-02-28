# 🎨 PaintFlow API – Venta de Pinturas

## 📌 Descripción

PaintFlow es una API REST que simula un sistema de ventas de pintura utilizando estructuras de datos en memoria:

- Lista Enlazada → Gestión de pedidos
- Pila (Stack) → Historial de acciones
- Cola (Queue) → Procesamiento de pedidos

El proyecto implementa arquitectura por capas:

- Controller
- Service
- Repository
- Model

---

## 🛠 Tecnologías

- Node.js
- Express
- UUID

---

## ▶️ Cómo ejecutar el proyecto

1. Instalar dependencias:


npm install


2. Ejecutar servidor:


npm start


Servidor disponible en:


http://localhost:3000


---

## 🌐 Endpoints

### 📦 Pedidos (Lista Enlazada)

- POST /orders
- GET /orders
- GET /orders/{id}
- DELETE /orders/{id}

---

## 🧪 Ejemplo con cURL

Crear pedido:


curl -i -X POST http://localhost:3000/orders

-H "Content-Type: application/json"
-d '{"customerName":"Carlos","color":"Rojo","liters":10}'


Listar pedidos:


curl http://localhost:3000/orders


---

## 🏗 Arquitectura

- Controllers → Manejan HTTP
- Services → Lógica de negocio
- Repositories → Implementación de estructuras en memoria
- Models → Definición de entidades

---

Proyecto académico – Programación III