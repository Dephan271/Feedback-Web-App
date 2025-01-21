# Feedback App

A simple and efficient web application for collecting and managing user feedback. Built with **Express.js** and **Mongoose**, this app provides an intuitive way for users to submit their feedback and for administrators to review and manage it.

## Features

- **User Feedback Submission**: Allows users to share feedback easily through a simple form.
- **Database Integration**: Utilizes MongoDB with Mongoose for seamless data storage and management.

## Installation

1. Clone this repository:
   ```bash
   git clone https://github.com/Dephan271/Feedback-Web-App.git
   ```
2. Navigate to the project directory:
   ```bash
   cd feedback-app
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Create a `.env` file with the following variables:
   ```env
   MONGO_URI=your_mongodb_connection_string
   PORT=3000
   ```
5. Start the server:
   ```bash
   npm start
   ```

## Usage

1. Open your browser and go to `http://localhost:3000` (or the port specified in your `.env` file).
2. Submit feedback using the provided form.
3. If implemented, access the admin panel to view and manage feedback.

## Tech Stack

- **Backend**: Node.js, Express.js
- **Database**: MongoDB, Mongoose
- **Frontend**: HTML, CSS (or your preferred framework/library)

## Contributing

Contributions are welcome! Please fork this repository, create a feature branch, and submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).
