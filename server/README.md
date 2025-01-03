# API Documentation

## Endpoint: `/users/register`

### Method: POST

### Description:
This endpoint is used to register a new user. It requires the user's first name, last name, email, and password.

### Request Body:
```json
{
  "fullName": {
    "firstname": "string (required, min length: 3)",
    "lastname": "string (optional, min length: 3)"
  },
  "email": "string (required, must be a valid email)",
  "password": "string (required, min length: 6)"
}
```

### Responses:

#### Success:
- **Status Code:** 201 Created
- **Response Body:**
  ```json
  {
    "token": "string (JWT token)",
    "user": {
      "_id": "string",
      "fullName": {
        "firstname": "string",
        "lastname": "string"
      },
      "email": "string"
    }
  }
  ```

#### Validation Errors:
- **Status Code:** 400 Bad Request
- **Response Body:**
  ```json
  {
    "errors": [
      {
        "msg": "string",
        "param": "string",
        "location": "string"
      }
    ]
  }
  ```

### Example Request:
```bash
curl -X POST http://localhost:5000/users/register \
-H "Content-Type: application/json" \
-d '{
  "fullName": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john.doe@example.com",
  "password": "password123"
}'
```

## Endpoint: `/users/login`

### Method: POST

### Description:
This endpoint is used to log in an existing user. It requires the user's email and password.

### Request Body:
```json
{
  "email": "string (required, must be a valid email)",
  "password": "string (required, min length: 6)"
}
```

### Responses:

#### Success:
- **Status Code:** 200 OK
- **Response Body:**
  ```json
  {
    "token": "string (JWT token)",
    "user": {
      "_id": "string",
      "fullName": {
        "firstname": "string",
        "lastname": "string"
      },
      "email": "string"
    }
  }
  ```

#### Validation Errors:
- **Status Code:** 400 Bad Request
- **Response Body:**
  ```json
  {
    "errors": [
      {
        "msg": "string",
        "param": "string",
        "location": "string"
      }
    ]
  }
  ```

#### Authentication Errors:
- **Status Code:** 401 Unauthorized
- **Response Body:**
  ```json
  {
    "message": "Invalid email or password"
  }
  ```

### Example Request:
```bash
curl -X POST http://localhost:5000/users/login \
-H "Content-Type: application/json" \
-d '{
  "email": "john.doe@example.com",
  "password": "password123"
}'
```

## Endpoint: `/users/profile`

### Method: GET

### Description:
This endpoint is used to get the profile of the authenticated user.

### Headers:
- **Authorization:** Bearer token

### Responses:

#### Success:
- **Status Code:** 200 OK
- **Response Body:**
  ```json
  {
    "user": {
      "_id": "string",
      "fullName": {
        "firstname": "string",
        "lastname": "string"
      },
      "email": "string"
    }
  }
  ```

#### Authentication Errors:
- **Status Code:** 401 Unauthorized
- **Response Body:**
  ```json
  {
    "message": "Authentication failed"
  }
  ```

### Example Request:
```bash
curl -X GET http://localhost:5000/users/profile \
-H "Authorization: Bearer <your_token>"
```

## Endpoint: `/users/logout`

### Method: GET

### Description:
This endpoint is used to log out the authenticated user.

### Headers:
- **Authorization:** Bearer token

### Responses:

#### Success:
- **Status Code:** 200 OK
- **Response Body:**
  ```json
  {
    "message": "Successfully logged out"
  }
  ```

#### Authentication Errors:
- **Status Code:** 401 Unauthorized
- **Response Body:**
  ```json
  {
    "message": "Authentication failed"
  }
  ```

### Example Request:
```bash
curl -X GET http://localhost:5000/users/logout \
-H "Authorization: Bearer <your_token>"
```

## Endpoint: `/captains/register`

### Method: POST

### Description:
This endpoint is used to register a new captain. It requires the captain's first name, email, password, and vehicle details.

### Request Body:
```json
{
  "fullName": {
    "firstname": "string (required, min length: 3)"
  },
  "email": "string (required, must be a valid email)",
  "password": "string (required, min length: 6)",
  "vehicle": {
    "colour": "string (required, min length: 3)",
    "vehicleType": "string (required, must be one of ['car', 'motorcycle', 'auto'])",
    "plate": "string (required, min length: 3)",
    "capacity": "integer (required, min: 1)"
  }
}
```

### Responses:

#### Success:
- **Status Code:** 201 Created
- **Response Body:**
  ```json
  {
    "token": "string (JWT token)",
    "captain": {
      "_id": "string",
      "fullName": {
        "firstname": "string"
      },
      "email": "string",
      "vehicle": {
        "colour": "string",
        "vehicleType": "string",
        "plate": "string",
        "capacity": "integer"
      }
    }
  }
  ```

#### Validation Errors:
- **Status Code:** 400 Bad Request
- **Response Body:**
  ```json
  {
    "errors": [
      {
        "msg": "string",
        "param": "string",
        "location": "string"
      }
    ]
  }
  ```

### Example Request:
```bash
curl -X POST http://localhost:5000/captains/register \
-H "Content-Type: application/json" \
-d '{
  "fullName": {
    "firstname": "Jane"
  },
  "email": "jane.doe@example.com",
  "password": "password123",
  "vehicle": {
    "colour": "red",
    "vehicleType": "car",
    "plate": "ABC123",
    "capacity": 4
  }
}'
```

## Endpoint: `/captains/login`

### Method: POST

### Description:
This endpoint is used to log in an existing captain. It requires the captain's email and password.

### Request Body:
```json
{
  "email": "string (required, must be a valid email)",
  "password": "string (required, min length: 6)"
}
```

### Responses:

#### Success:
- **Status Code:** 200 OK
- **Response Body:**
  ```json
  {
    "token": "string (JWT token)",
    "captain": {
      "_id": "string",
      "fullName": {
        "firstname": "string"
      },
      "email": "string",
      "vehicle": {
        "colour": "string",
        "vehicleType": "string",
        "plate": "string",
        "capacity": "integer"
      }
    }
  }
  ```

#### Validation Errors:
- **Status Code:** 400 Bad Request
- **Response Body:**
  ```json
  {
    "errors": [
      {
        "msg": "string",
        "param": "string",
        "location": "string"
      }
    ]
  }
  ```

#### Authentication Errors:
- **Status Code:** 401 Unauthorized
- **Response Body:**
  ```json
  {
    "message": "Invalid email or password"
  }
  ```

### Example Request:
```bash
curl -X POST http://localhost:5000/captains/login \
-H "Content-Type: application/json" \
-d '{
  "email": "jane.doe@example.com",
  "password": "password123"
}'
```

## Endpoint: `/captains/profile`

### Method: GET

### Description:
This endpoint is used to get the profile of the authenticated captain.

### Headers:
- **Authorization:** Bearer token

### Responses:

#### Success:
- **Status Code:** 200 OK
- **Response Body:**
  ```json
  {
    "captain": {
      "_id": "string",
      "fullName": {
        "firstname": "string"
      },
      "email": "string",
      "vehicle": {
        "colour": "string",
        "vehicleType": "string",
        "plate": "string",
        "capacity": "integer"
      }
    }
  }
  ```

#### Authentication Errors:
- **Status Code:** 401 Unauthorized
- **Response Body:**
  ```json
  {
    "message": "Authentication failed"
  }
  ```

### Example Request:
```bash
curl -X GET http://localhost:5000/captains/profile \
-H "Authorization: Bearer <your_token>"
```

## Endpoint: `/captains/logout`

### Method: GET

### Description:
This endpoint is used to log out the authenticated captain.

### Headers:
- **Authorization:** Bearer token

### Responses:

#### Success:
- **Status Code:** 200 OK
- **Response Body:**
  ```json
  {
    "message": "Successfully logged out"
  }
  ```

#### Authentication Errors:
- **Status Code:** 401 Unauthorized
- **Response Body:**
  ```json
  {
    "message": "Authentication failed"
  }
  ```

### Example Request:
```bash
curl -X GET http://localhost:5000/captains/logout \
-H "Authorization: Bearer <your_token>"
```