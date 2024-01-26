# Elysio - Journaling App

## Overview
Elysio is a journaling app designed to provide a convenient and enjoyable way to record daily events, thoughts, and feelings. With a focus on privacy and ease of use, this application offers a digital space for personal growth and memory keeping.

## Features

### Secure Authentication
- Utilizes JSON Web Tokens (JWT) for secure authentication.
- Supports login/logout flow ensuring that journal entries are personal and private.

### Journal Form
- Provides a user-friendly form to input new journal entries.
- Fields include Title, Description, Text, and Date, allowing for detailed and organized entries.
- The form validates input to ensure that all necessary information is provided before saving.

![image](https://github.com/BenjaminMalachi/SEIF-PROJ3-FE/assets/136752154/567dbba8-e565-4276-b26e-9b1bc5b841e1)


### Dynamic Journal Entries
- Users can create and view journal entries for different dates.
- Each entry is associated with a "DayCard" that reflects the specific date, enhancing the sense of a personal timeline.

![image](https://github.com/BenjaminMalachi/SEIF-PROJ3-FE/assets/136752154/7b805c30-22b6-4413-b7d2-df07e0a47cb4)

### Inspirational Quotes
- Features "Quote Cards" that display random motivational quotes to inspire users as they reflect on their day.

![image](https://github.com/BenjaminMalachi/SEIF-PROJ3-FE/assets/136752154/ef88d8c3-0461-4bef-b6e8-985e6b7c60cb)

### Persistent Storage
- Integrates with MongoDB Atlas using Mongoose for data modeling.
- All journal entries and user details are securely stored and managed in the cloud.


## Technologies Used
- **Frontend**: Vite React
- **Backend**: Node.js, Express.js
- **Database**: MongoDB Atlas with Mongoose
- **Authentication**: JSON Web Tokens (JWT)

## Local Development

### Prerequisites
- Node.js 
- npm 
- MongoDB Atlas account for the database

### Setup Instructions
1. Clone the repository to your local machine.
2. Navigate to the project directory and install dependencies:
    ```
    npm install
    ```

3. Create a `.env` file in the root directory and add the following environment variables:
    ```
    DATABASE_URL=your_mongodb_atlas_url
    SECRET=your_jwt_secret
    ```
4. Start the server locally:
    ```
    npm start
    ```

## Deployment
This application is deployed on Vercel. Any pushes to the main branch will automatically trigger a new deployment.


