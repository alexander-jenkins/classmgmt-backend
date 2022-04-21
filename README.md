# Class Management - Backend Services

## Description

Backend to connect to the Postgress database for the Class Management system project for the Church of Philippi in COSC 412.

## Members

- Alexander Jenkins
- Alecia Rotunno
- Dushaw Hockett
- Emma Camelo
- Neil Labio
- Jacob Weagly

## .env file
You must add a .env file in the root of the project folder with the following variables:
```txt
// TypeORM settings
SYNC_DB = true

// NestJS settings
PORT = 3000
MODE = DEV
RUN_MIGRATIONS = true

// databse settings
POSTGRES_HOST = {replace}
POSTGRES_PORT = 5432
POSTGRES_USER = {replace}
POSTGRES_PASSWORD = {replace}
POSTGRES_DB = {replace}
```