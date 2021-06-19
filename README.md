# E-commerce Back End

## Description 

## User Story

>AS A manager at an internet retail company  
I WANT a back end for my e-commerce website that uses the latest technologies  
SO THAT my company can compete with other e-commerce companies  

## Acceptance Criteria

>GIVEN a functional Express.js API  
WHEN I add my database name, MySQL username, and MySQL password to an environment variable file  
THEN I am able to connect to a database using Sequelize  
WHEN I enter schema and seed commands  
THEN a development database is created and is seeded with test data  
WHEN I enter the command to invoke the application  
THEN my server is started and the Sequelize models are synced to the MySQL database  
WHEN I open API GET routes in Insomnia Core for categories, products, or tags  
THEN the data for each of these routes is displayed in a formatted JSON  
WHEN I test API POST, PUT, and DELETE routes in Insomnia Core  
THEN I am able to successfully create, update, and delete data in my database  

## Installation

1. Clone e-commerce repository
2. Run <code> npm install </code> to install dependencies
    - Ensure you have the following dependencies
        a. Express.js
        b. dotenv
        c. mysql2
        d. sequelize
3. Run <code> mysql -u root -p </code> to initialize mysql
4. Run <code> source db/schema.sql </code> to reset database 
    - Run <code> exit </code> to leave mysql
5. Run <code> npm run seed </code> to seed database with dummy info to test the routes
6. Run <code> npm start </code> to initialize the app
7. Use Insomnia to test the routes

## Usage

### Video

### Screenshots