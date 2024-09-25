# API de Panel Administrativo

Esta API permite a los administradores gestionar productos mediante diversas acciones como agregar, editar, eliminar, y filtrar productos. También incluye la administración de usuarios que tienen acceso al panel.

## Endpoints

### Usuarios Administrativos

#### 1. Crear Administrador
- **Método:** `POST`
- **Ruta:** `/admin/register`
- **Descripción:** Registra un nuevo usuario administrador.
- **Cuerpo (JSON):**
    ```json
    {
      "name": "Admin Name",
      "username": "adminUsername",
      "password": "password123",
      "confirmPassword": "password123"
    }
    ```
- **Respuesta Exitosa:**
    ```json
    {
      "message": "Administrador registrado con éxito."
    }
    ```

#### 2. Iniciar Sesión Administrador
- **Método:** `POST`
- **Ruta:** `/admin/login`
- **Descripción:** Autentica a un administrador y devuelve un token JWT.
- **Cuerpo (JSON):**
    ```json
    {
      "username": "adminUsername",
      "password": "password123"
    }
    ```
- **Respuesta Exitosa:**
    ```json
    {
      "token": "jwtToken"
    }
    ```

#### 3. Editar Perfil de Administrador
- **Método:** `PUT`
- **Ruta:** `/admin/edit/:id`
- **Descripción:** Actualiza los detalles de un administrador.
- **Cuerpo (JSON):**
    ```json
    {
      "name": "Updated Name",
      "username": "newUsername",
      "password": "newPassword"
    }
    ```
- **Respuesta Exitosa:**
    ```json
    {
      "message": "Perfil de administrador actualizado con éxito."
    }
    ```

#### 4. Eliminar Administrador
- **Método:** `DELETE`
- **Ruta:** `/admin/delete/:id`
- **Descripción:** Elimina un administrador existente.
- **Respuesta Exitosa:**
    ```json
    {
      "message": "Administrador eliminado con éxito."
    }
    ```

---

### Productos

#### 1. Agregar Producto
- **Método:** `POST`
- **Ruta:** `/products/add`
- **Descripción:** Agrega un nuevo producto al inventario.
- **Cuerpo (JSON):**
    ```json
    {
      "name": "Product Name",
      "image": "imageURL",
      "category": "Category",
      "price": 100.50,
      "weight": 1.5,
      "description": "Product description",
      "stock": 50,
      "status": "active"
    }
    ```
- **Respuesta Exitosa:**
    ```json
    {
      "message": "Producto agregado con éxito."
    }
    ```

#### 2. Editar Producto
- **Método:** `PUT`
- **Ruta:** `/products/edit/:id`
- **Descripción:** Edita un producto existente por su ID.
- **Cuerpo (JSON):**
    ```json
    {
      "name": "Updated Product Name",
      "image": "newImageURL",
      "category": "Updated Category",
      "price": 150.00,
      "weight": 2.0,
      "description": "Updated description",
      "stock": 40,
      "status": "inactive"
    }
    ```
- **Respuesta Exitosa:**
    ```json
    {
      "message": "Producto actualizado con éxito."
    }
    ```

#### 3. Eliminar Producto
- **Método:** `DELETE`
- **Ruta:** `/products/delete/:id`
- **Descripción:** Elimina un producto del inventario por su ID.
- **Respuesta Exitosa:**
    ```json
    {
      "message": "Producto eliminado con éxito."
    }
    ```

#### 4. Cambiar Estado del Producto
- **Método:** `PATCH`
- **Ruta:** `/products/status/:id`
- **Descripción:** Cambia el estado de un producto (activo o inactivo).
- **Cuerpo (JSON):**
    ```json
    {
      "status": "inactive"
    }
    ```
- **Respuesta Exitosa:**
    ```json
    {
      "message": "Estado del producto actualizado con éxito."
    }
    ```

#### 5. Filtrar Productos por Categoría
- **Método:** `GET`
- **Ruta:** `/products/category/:category`
- **Descripción:** Filtra los productos por categoría.
- **Respuesta Exitosa:**
    ```json
    [
      {
        "id": 1,
        "name": "Product 1",
        "category": "Category 1",
        "price": 100.00,
        "stock": 20
      },
      {
        "id": 2,
        "name": "Product 2",
        "category": "Category 1",
        "price": 120.00,
        "stock": 15
      }
    ]
    ```

#### 6. Controlar Stock del Producto
- **Método:** `PATCH`
- **Ruta:** `/products/stock/:id`
- **Descripción:** Actualiza el stock de un producto.
- **Cuerpo (JSON):**
    ```json
    {
      "stock": 60
    }
    ```
- **Respuesta Exitosa:**
    ```json
    {
      "message": "Stock actualizado con éxito."
    }
    ```

---

### Consideraciones adicionales

- **Autenticación:** Todos los endpoints relacionados con productos y administradores requerirán un token de autenticación (JWT).
- **Validación de datos:** Asegúrate de validar todos los campos tanto en el cliente como en el servidor para garantizar que los datos enviados sean correctos.


