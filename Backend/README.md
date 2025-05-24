# Backend API Documentation

## `/users/register` Endpoint

## Description

Registers a new user into the system.

## Method

POST

## Request Data

- **fullname**: an object containing:
  - **firstname** (string, required, minimum length: 3)
  - **lastname** (string, optional, minimum length: 3 if provided)
- **email**: string, valid email format, required
- **password**: string, required, minimum length: 6

### Example Request Body

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

## Status Codes

- **201 Created**: User successfully registered.
- **400 Bad Request**: Validation errors in submitted data.

## Response Example

### Success (201 Created)

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
