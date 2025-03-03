
---

# Memories App

![Memories App Screenshot](src/images/memories.png)

Memories is a social media application that allows users to post and share their memories with others. Users can create, edit, delete, and like posts, as well as authenticate using Google OAuth. The app is built using the MERN stack (MongoDB, Express, React, Node.js).

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Repositories](#repositories)
- [Setup Instructions](#setup-instructions)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Features

- Create, edit, and delete memories (posts)
- Like posts
- Authentication with Google OAuth
- Search and filter posts by title, message, creator, or tags
- Responsive design for both desktop and mobile devices
- Modal view for image zooming with close functionality
- Interactive hover effect for posts

## Technologies Used

- **Frontend:**
  - React
  - Material-UI (MUI) components
  - Axios for HTTP requests
- **Backend:**
  - Node.js
  - Express.js
  - MongoDB (Mongoose)
  - JWT Authentication
- **Authentication:**
  - Google OAuth 2.0
- **Deployment:**
  - Frontend: GitHub Pages
  - Backend: Heroku

## Repositories

- **Frontend:** [Memories Repository](https://github.com/stanleyluong/Memories)
- **Backend:** [Memories Backend Repository](https://github.com/stanleyluong/Memories-backend)

## Setup Instructions

### Prerequisites:

- Node.js installed
- MongoDB database setup
- Google OAuth credentials created

### 1. Clone the Repositories:

#### Frontend:

```bash
git clone https://github.com/stanleyluong/Memories.git
cd Memories
npm install
```

#### Backend:

```bash
git clone https://github.com/stanleyluong/Memories-backend.git
cd Memories-backend
npm install
```

### 2. Environment Variables:

#### Backend:

Create a `.env` file in the `Memories-backend` directory with the following:

```bash
PORT=5001
MONGO_URI=your-mongodb-uri
JWT_SECRET=your-jwt-secret
```

#### Frontend:

In the `Memories` project, create a `.env` file with the following:

```bash
REACT_APP_GOOGLE_CLIENT_ID=your-google-client-id
REACT_APP_BACKEND_URL=https://your-backend-url.com
```

### 3. Running the Application:

#### Backend:

```bash
cd Memories-backend
npm start
```

#### Frontend:

```bash
cd Memories
npm start
```

### 4. Access the App:

- Open your browser and go to `http://localhost:3000`.

## Usage

- **Create Posts:** Fill out the form to create a new post, add a title, message, tags, and an image.
- **Edit/Delete Posts:** If you are the creator of a post, you will see the edit and delete buttons on the post.
- **Like Posts:** Click the like button to like a post.
- **Google OAuth:** Sign in with your Google account to create, like, and manage your posts.

## Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/stanleyluong/Memories/issues).

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

This version should now match your project's structure! Let me know if you need further adjustments.
