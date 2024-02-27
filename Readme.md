# Centralized YouTube Backend

This project is a centralized YouTube backend application. It provides functionalities similar to YouTube, allowing channel owners to manage their content, users to interact with videos, and administrators to oversee the database.

## Features

- Channel owners can:
  - **Tweet**
  - **Upload videos**
  - **Choose thumbnail, title, and description for videos**
  - **Save videos in playlists**
- Users can:
  - **Like and dislike videos**
  - **Subscribe to channels**
  - **Comment on videos**
- Admin Dashboard:
  - Allows administrative tasks such as managing database entries
  - Utilizes MongoDB aggregation pipelines for efficient data handling
- Environment Variables:
  - Utilizes environment variables for sensitive information and configuration settings

## Technologies Used

- **Database:** MongoDB
- **Server Framework:** Express.js
- **Database Modeling:** Mongoose
- **Authentication and Authorization:** Bycrypt, JWT, cookie-parser
- **File Uploading:** Multer, Cloudinary
- **API Testing:** Postman

## API Documentation

- ***[Postman API'S](https://red-astronaut-474428.postman.co/workspace/New-Team-Workspace~bfbc0679-6577-4ca9-b4ae-d7f2ecf31a12/collection/32758929-bcf644d0-658a-4883-a271-64f7e4f15456?action=share&creator=27400704)***:API endpoints


## Setup Instructions

1. Clone the repository: `https://github.com/Sana348/Backend-Javascript`
2. Install dependencies: `npm install`
3. Set up environment variables: Create a `.env` file and add necessary variables
4. Start the server: `npm start`

## Testing

- Ensure all APIs are working as expected using Postman
- Test functionality and edge cases thoroughly
- Utilize Mocha/Chai for automated testing if applicable

## Contributing

Contributions are welcome! Please open an issue or pull request for any improvements or bug fixes.

## License

This project is licensed under the **MIT License**.


