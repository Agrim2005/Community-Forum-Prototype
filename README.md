# Community Forum

A modern and responsive community forum web application built with React, TypeScript, Vite, Tailwind CSS, and Zustand.

The application provides an interactive frontend platform where users can create and manage posts, browse communities, save content, view notifications, exchange messages, manage their profile, and customize the application's appearance.

## Features

### Authentication

- Login and registration interfaces
- Form validation
- Protected routes
- Loading states
- Persistent authentication state

### Posts

- Create posts
- View the community feed
- Like posts
- Add and view comments
- Edit posts
- Delete posts with confirmation
- Save posts as bookmarks
- 500-character post limit
- Persistent post data

### Communities

- Browse communities
- Search communities
- Join and leave communities

### Bookmarks

- Save posts
- View bookmarked posts
- Remove bookmarks
- Persistent bookmark state

### Notifications

- View notifications
- Mark notifications as read or unread
- Visual unread indicators

### Messaging

- View conversations
- Send messages
- Send messages using the Enter key
- Automatic scrolling to the latest message
- Distinct styling for sent and received messages

### User Profile

- Profile information
- Avatar and cover image
- Bio and location
- Skills and badges
- Dynamic post statistics
- View the user's posts

### Settings and Appearance

- Account settings interface
- Notification preferences
- Light and dark mode
- Persistent theme preference

### Responsive Design

- Responsive navigation
- Mobile-friendly page layouts
- Responsive post actions
- Optimized layouts for mobile, tablet, and desktop screens
- Shared navigation back to the Home page

## Tech Stack

### Core

- React
- TypeScript
- Vite
- Tailwind CSS

### State Management

- Zustand

### Routing and Forms

- React Router
- React Hook Form
- Zod
- Hookform Resolvers

### Additional Libraries

The project also includes:

- TanStack Query
- Axios
- Framer Motion
- Lucide React
- clsx
- tailwind-merge

## State Management and Persistence

Zustand is used to manage shared application state.

The application currently uses stores for:

- Authentication
- Posts
- Bookmarks
- Theme preferences

Selected application state is persisted in browser storage using Zustand's persistence middleware.

## Project Structure

```text
src/
├── components/
│   ├── common/
│   ├── layout/
│   └── ui/
├── data/
├── layouts/
├── pages/
├── routes/
├── services/
├── store/
├── types/
└── utils/
```

## Getting Started

### Prerequisites

Before running the project, make sure the following are installed:

- Node.js
- npm
- Git

### Installation

Clone the repository:

```bash
git clone https://github.com/Agrim2005/Community-Forum-Prototype.git
```

Move into the project directory:

```bash
cd Community-Forum-Prototype
```

Install the project dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open the local development URL displayed by Vite in your browser.

## Available Scripts

Start the development server:

```bash
npm run dev
```

Create a production build:

```bash
npm run build
```

Run linting checks:

```bash
npm run lint
```

Preview the production build locally:

```bash
npm run preview
```

## Data and Persistence

This project currently uses frontend mock data and browser storage instead of a production backend and database.

Authentication, posts, bookmarks, and theme preferences are managed on the client side. Selected application state is persisted using browser local storage.

The current authentication system is a frontend simulation and should not be considered production authentication.

## Responsive Design

The application is designed to work across different screen sizes, including:

- Mobile devices
- Tablets
- Laptops
- Desktop displays

Responsive layouts are implemented using Tailwind CSS breakpoints.

## Dark Mode

The application supports both light and dark themes.

The selected theme is managed using Zustand and persisted in browser storage, allowing the user's preference to remain after refreshing the application.

## Future Improvements

Potential future improvements include:

- Backend API integration
- Database integration
- Production authentication
- Real-time messaging
- Real-time notifications
- Image and file uploads
- User profile editing
- Advanced community management
- Improved accessibility
- Automated testing

## Project Status

This project was developed as a four-week React and TypeScript project focused on:

- Component-based architecture
- Reusable UI components
- Routing and protected routes
- State management with Zustand
- Form handling and validation
- CRUD operations
- Browser-based persistence
- Responsive design
- Dark mode
- Git and GitHub workflow

## Author

Agrim Sharma