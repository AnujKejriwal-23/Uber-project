# Backend API Documentation

## `/users/register` Endpoint

### Description

Registers a new user into the system.

### Method

POST

### Request Data

- **fullname**: an object containing:
  - **firstname** (string, required, minimum length: 3)
  - **lastname** (string, optional, minimum length: 3 if provided)
- **email**: string, valid email format, required
- **password**: string, required, minimum length: 6

#### Example Request Body

```json
{
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john.doe@example.com",
  "password": "secret123"
}
```

### Status Codes

- **201 Created**: User successfully registered.
- **400 Bad Request**: Validation errors in submitted data.

### Response Example

#### Success (201 Created)

```json
{
  "token": "example_token",
  "user": {
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.doe@example.com"
  }
}
```

## `/users/login` Endpoint

### Description

Allows a registered user to log in using their email and password.

### Method

POST

### Endpoint

`/users/login`

### Request Data

- **email**: string, valid email format, required
- **password**: string, required, minimum length: 6

#### Example Request Body

```json
{
  "email": "john.doe@example.com",
  "password": "secret123"
}
```

### Status Codes

- **200 OK**: User successfully logged in.
- **400 Bad Request**: Validation errors in submitted data.
- **401 Unauthorized**: Invalid email or password.

### Response Example

#### Success (200 OK)

```json
{
  "token": "example_token",
  "user": {
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.doe@example.com"
  }
}
```

## `/users/profile` Endpoint

### Description

Retrieves the authenticated user's profile information.

### Method

GET

### Endpoint

`/users/profile`

### Headers

- **Authorization**: Bearer token (or cookie containing token)

### Response Example

#### Success (200 OK)

```json
{
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john.doe@example.com"
}
```

## `/users/logout` Endpoint

### Description

Logs out the authenticated user by blacklisting the token and clearing the cookie.

### Method

GET

### Endpoint

`/users/logout`

### Headers

- **Authorization**: Bearer token (or cookie containing token)

### Response Example

#### Success (200 OK)

```json
{
  "message": "Logged out successfully"
}
```

# /captains/register Endpoint Documentation

## Description

Registers a new captain with personal details and vehicle information.

## Method

POST

## Endpoint

`/captains/register`

## Request Data

- **fullname**: an object containing:
  - **firstname** (string, required, minimum length: 3)
  - **lastname** (string, optional, minimum length: 3 if provided)
- **email**: string, valid email format, required
- **password**: string, required, minimum length: 6
- **vehicle**: an object containing:
  - **color** (string, required)
  - **plate** (string, required, minimum length: 6)
  - **capacity** (integer, required, minimum: 1)
  - **vehicleType** (string, required, one of: 'car', 'bike', 'auto')

### Example Request Body

```json
{
  "fullname": {
    "firstname": "Alice",
    "lastname": "Smith"
  },
  "email": "alice.smith@example.com",
  "password": "secret123",
  "vehicle": {
    "color": "Red",
    "plate": "ABC1234",
    "capacity": 4,
    "vehicleType": "car"
  }
}
```

## Status Codes

- **201 Created**: Captain successfully registered.
- **400 Bad Request**: Validation errors in submitted data.

## Response Example

### Success (201 Created)

```json
{
  "token": "example_token",
  "captain": {
    "fullname": {
      "firstname": "Alice",
      "lastname": "Smith"
    },
    "email": "alice.smith@example.com",
    "vehicle": {
      "color": "Red",
      "plate": "ABC1234",
      "capacity": 4,
      "vehicleType": "car"
    }
  }
}
```
