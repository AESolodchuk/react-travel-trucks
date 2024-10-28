# Travel Trucks

Welcome to the **Travel Trucks** project! This is a web application designed to help users find and explore various camper options. Built with Vite and React, this app provides an engaging and user-friendly interface for camper enthusiasts.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Contributing](#contributing)

## Features

- Browse through a list of available campers.
- Filter campers based on various criteria.
- Load more campers with an intuitive load more button.
- Detailed view of each camper, including reviews and features.
- Responsive design for mobile and desktop users.

## Technologies Used

- **Frontend**:
  - [React](https://reactjs.org/) - A JavaScript library for building user interfaces.
  - [Vite](https://vitejs.dev/) - A fast development server and build tool.
  - [Redux Toolkit](https://redux-toolkit.js.org/) - For state management.
  - [React Router](https://reactrouter.com/) - For client-side routing.
- **Styling**:
  - [CSS Modules](https://github.com/css-modules/css-modules) - For modular and scoped CSS.
- **Others**:
  - [Axios](https://axios-http.com/) - For making HTTP requests.
  - [MockAPI](https://mockapi.io/) - For simulating backend data.

## Installation

To get started with the Travel Trucks project, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/travel-trucks.git
   ```
2. Navigate to the project directory:
   cd travel-trucks

3. Install the dependencies:
   npm install

## Usage

To run the application in development mode, use the following command:
npm run dev

Open your browser and go to http://localhost:5173/ to view the application.

To build the project for production, use:
npm run build

This will create a dist directory containing the optimized files for deployment.

## Project Structure

Here's a basic overview of the project structure:

/travel-trucks
├── public**          # Static files
├── **src**             # Source files
│   ├── **assets**      # Images and other assets
│   ├── **components**  # Reusable components
│   ├── **pages**       # Page components
│   ├── **redux**       # Redux setup (slices, store, etc.)
│   └── **App.jsx**     # Main application component
├── **package.json**   # Project metadata and dependencies
└── **vite.config.js**  # Vite configuration file

## Contributing

Contributions are welcome! If you'd like to contribute to the Travel Trucks project, please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bug fix:
   git checkout -b feature/your-feature-name
3. Make your changes and commit them:
   git commit -m "Add your commit message"
4. Push to the branch:
   git push origin feature/your-feature-name
5. Open a pull request.


