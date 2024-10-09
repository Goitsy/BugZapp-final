# BugZapp

BugZapp is a social platform where users can log in, make posts, and interact with each other. This project is a work in progress, with future plans to implement more advanced features as we continue learning backend development.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Collaborators](#collaborators)
- [License](#license)

## Features

- **Login Authentication**: Log in using Google authentication or hardcoded credentials.
- **User Feed**: Users can create posts, view other users' posts, and delete their own posts.
- **Profile Page**: Users can view and manage their own posts.
- **Dark Mode**: Toggle between light and dark themes for a better user experience.

## Technologies Used

- **Frontend**: React, CSS
- **Authentication**: Firebase (Google Sign-In)
- **State Management**: React hooks and local storage
- **Icons**: Font Awesome
- **Deployment**: Vercel

## Installation

To set up the project locally, follow these steps:

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/yourusername/bugzapp.git
   cd bugzapp
   npm install
   npm run dev
   ```

## Set Up Firebase:

Create a Firebase project at Firebase Console.
Enable Google authentication in the Firebase authentication settings.
Add your Firebase configuration details in src/login/Auth/firebaseConfig.js.

## Usage

- **Login:** Log in using Google authentication, or use the hardcoded credentials (admin / 12345 or user / password).
- **User Feed:** After login, you can create posts, view other users' posts, and delete your own.
- **Profile Page:** View only your posts on your profile page. You can also create or delete your posts.
- **Dark Mode:** Toggle the dark mode by using the switch on the UI.

## Contributing

### Contributions are welcome! If you have suggestions or improvements, please follow these steps:

Fork the repository.
Create a new branch (git checkout -b feature/YourFeature).
Make your changes and commit them (git commit -m 'Add some feature').
Push to the branch (git push origin feature/YourFeature).
Open a pull request.

## Collaborators

Abdelrahman Ibrahim - Collaborator
