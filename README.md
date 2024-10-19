# ToDoList API

## Deskripsi

ToDoList API adalah layanan web yang menyediakan fungsionalitas untuk mengelola daftar tugas (ToDo). API ini memungkinkan pengguna untuk mendaftar, masuk, dan mengelola tugas mereka dengan menggunakan RESTful API.

## Fitur

- **Registrasi Pengguna**
- **Autentikasi Pengguna**
- **CRUD Tugas** (Buat, Baca, Perbarui, Hapus)

## Teknologi

- Node.js
- Express.js
- MongoDB
- Mongoose
- JSON Web Token (JWT)

## Rute API

### Pengguna

#### 1. Mendaftar Pengguna

- **URL**: `/api/user/register`
- **Metode**: `POST`
- **Body**:
  ```json
  {
    "username": "string",
    "email": "string",
    "password": "string"
  }
  ```
- **Respon**:
  - **201 Created**
  ```json
  {
    "message": "User registered successfully!"
  }
  ```
  - **400 Bad Request** (jika terjadi kesalahan)
  ```json
  {
    "error": "error message"
  }
  ```

#### 2. Masuk Pengguna

- **URL**: `/api/user/login`
- **Metode**: `POST`
- **Body**:
  ```json
  {
    "email": "string",
    "password": "string"
  }
  ```
- **Respon**:
  - **200 OK**
  ```json
  {
    "token": "jwt_token"
  }
  ```
  - **401 Unauthorized** (jika kredensial tidak valid)
  ```json
  {
    "message": "Invalid credentials"
  }
  ```

#### 3. Mendapatkan Semua Pengguna

- **URL**: `/api/user`
- **Metode**: `GET`
- **Respon**:
  - **200 OK**
  ```json
  [
    {
      "_id": "user_id",
      "username": "string",
      "email": "string"
    }
  ]
  ```

#### 4. Mendapatkan Pengguna Berdasarkan ID

- **URL**: `/api/user/:id`
- **Metode**: `GET`
- **Respon**:
  - **200 OK**
  ```json
  {
    "_id": "user_id",
    "username": "string",
    "email": "string"
  }
  ```
  - **404 Not Found** (jika pengguna tidak ditemukan)
  ```json
  {
    "message": "User not found"
  }
  ```

### Tugas

#### 1. Membuat Tugas

- **URL**: `/api/todos`
- **Metode**: `POST`
- **Body**:
  ```json
  {
    "title": "string",
    "description": "string"
  }
  ```
- **Respon**:
  - **201 Created**
  ```json
  {
    "message": "Task created successfully!"
  }
  ```

#### 2. Mendapatkan Semua Tugas

- **URL**: `/api/todos`
- **Metode**: `GET`
- **Respon**:
  - **200 OK**
  ```json
  [
    {
      "_id": "task_id",
      "title": "string",
      "description": "string",
      "completed": false
    }
  ]
  ```

#### 3. Mengupdate Tugas

- **URL**: `/api/todos/:id`
- **Metode**: `PUT`
- **Body**:
  ```json
  {
    "title": "string",
    "description": "string",
    "completed": true
  }
  ```
- **Respon**:
  - **200 OK**
  ```json
  {
    "message": "Task updated successfully!"
  }
  ```

#### 4. Menghapus Tugas

- **URL**: `/api/todos/:id`
- **Metode**: `DELETE`
- **Respon**:
  - **200 OK**
  ```json
  {
    "message": "Task deleted successfully!"
  }
  ```

## Menjalankan Aplikasi

1. **Clone Repository**
   ```bash
   git clone https://github.com/ynudin/todo_ListApp.git
   cd Tugas_TODO
   ```
