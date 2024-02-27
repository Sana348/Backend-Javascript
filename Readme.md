# Centralized YouTube Backend

This project is a centralized YouTube backend application developed over a period of 3-4 months. It provides functionalities similar to YouTube, allowing channel owners to manage their content, users to interact with videos, and administrators to oversee the database.

## Features

- Channel owners can:
  - Tweet
  - Upload videos
  - Choose thumbnail, title, and description for videos
  - Save videos in playlists
- Users can:
  - Like and dislike videos
  - Subscribe to channels
  - Comment on videos
- Admin Dashboard:
  - Allows administrative tasks such as managing database entries
  - Utilizes MongoDB aggregation pipelines for efficient data handling
- Environment Variables:
  - Utilizes environment variables for sensitive information and configuration settings
- Technologies Used:
  - MongoDB for database storage
  - Express.js for handling HTTP routes
  - Mongoose for MongoDB object modeling
  - Bycrypt, JWT, and cookie-parser for user authentication and authorization
  - Multer and Cloudinary for file uploading
  - Postman for API testing

## API Documentation

- **[Postman API Documentation](link-to-postman-api-docs)**: Detailed documentation for API endpoints
- **[Swagger API Documentation](link-to-swagger-api-docs)**: Alternative documentation using Swagger

## Setup Instructions

1. Clone the repository: `git clone https://github.com/your-username/centralized-youtube-backend.git`
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

This project is licensed under the [MIT License].
