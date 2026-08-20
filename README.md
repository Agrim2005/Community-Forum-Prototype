# Community Forum

A modern and responsive full-stack community forum web application built with React, TypeScript, Vite, Tailwind CSS, Zustand, Express, Prisma, and PostgreSQL.

The application provides a messaging interface for viewing conversations and sending messages, with final end-to-end conversation flow testing remaining.

## Features

### Authentication
- User registration
- User login
- Password hashing
- JWT-based authentication
- Protected backend routes
- Protected frontend routes
- Form validation with Zod
- Persistent authentication state
- Loading states

### Posts
- Create posts
- View the community feed
- Edit posts
- Delete posts with confirmation
- Like posts
- Add and view comments
- Save posts as bookmarks
- 500-character post limit

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
- View messages within conversations
- Send messages
- Send messages using the Enter key
- Automatic scrolling to the latest message
- Distinct styling for sent and received messages
- Backend message and conversation API structure

*Note: The messaging UI and backend API structure are implemented. Final end-to-end testing of conversation creation and the complete messaging flow remains pending.*

### User Profile
- Profile information
- Avatar and cover image
- Bio and location
- Dynamic post statistics
- View user posts

### Settings and Appearance
- Account settings interface
- Notification preferences
- Light and dark mode
- Persistent theme preference

### Responsive Design
- Responsive navigation
- Mobile-friendly layouts
- Responsive post actions
- Optimized layouts for mobile, tablet, laptop, and desktop screens
- Shared navigation back to the Home page

## Tech Stack

### Frontend
- React
- TypeScript
- Vite
- Tailwind CSS
- Zustand
- React Router
- React Hook Form
- Zod
- Axios

### Backend
- Node.js
- Express
- TypeScript
- Prisma ORM
- PostgreSQL
- JSON Web Tokens (JWT)
- bcrypt

### Additional Libraries
The project also includes:
- TanStack Query
- Framer Motion
- Lucide React
- clsx
- tailwind-merge

## State Management

Zustand is used to manage shared frontend application state.
The application includes stores for:

- Authentication
- Posts
- Bookmarks
- Theme preferences

Selected state is persisted using Zustand's persistence middleware and browser storage. 
Backend data operations are handled through REST APIs using Express and Prisma.

## Project Structure

```text
Community-Forum-Prototype/
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── common/
│   │   │   ├── layout/
│   │   │   └── ui/
│   │   ├── data/
│   │   ├── layouts/
│   │   ├── pages/
│   │   ├── routes/
│   │   ├── services/
│   │   ├── store/
│   │   ├── types/
│   │   └── utils/
│   └── package.json
│
├── backend/
│   ├── prisma/
│   │   └── schema.prisma
│   │
│   ├── src/
│   │   ├── config/
│   │   ├── constants/
│   │   ├── controllers/
│   │   ├── middleware/
│   │   ├── routes/
│   │   ├── services/
│   │   ├── types/
│   │   ├── utils/
│   │   ├── app.ts
│   │   └── server.ts
│   │
│   └── package.json
│
└── README.md
```

## Backend Architecture

The backend follows a layered structure:

```text
Routes
   ↓
Middleware
   ↓
Controllers
   ↓
Services
   ↓
Prisma ORM
   ↓
PostgreSQL Database
```

### Routes
Routes define API endpoints and connect them to controllers. Examples include:
- Authentication routes
- Post routes
- Comment routes
- Community routes
- Message routes
- Notification routes
- Like routes
- Bookmark routes

### Controllers
Controllers handle HTTP requests and responses. Their responsibilities include:
- Reading request parameters and request bodies
- Calling the appropriate service
- Returning API responses
- Handling authorization checks

### Services
Services contain the main database interaction logic using Prisma. Examples include:
- Creating and retrieving posts
- Registering users
- Authenticating users
- Managing comments
- Managing bookmarks
- Managing likes
- Retrieving notifications
- Managing conversations and messages

### Middleware
The backend includes middleware for:
- JWT authentication
- Request validation
- Error handling
- Not-found route handling

### Database
The application uses PostgreSQL as its database. Database access and schema management are handled using Prisma ORM.
The database schema includes models for application entities such as:
- User
- Post
- Comment
- Community
- CommunityMember
- Like
- Bookmark
- Notification
- Conversation
- ConversationMember
- Message

Relationships between these models are managed through Prisma.

### Prisma
Prisma is used for:
- Database schema definition
- Model relationships
- Type-safe database queries
- Database migrations
- CRUD operations

Typical Prisma commands:
- `npx prisma generate` - Generate the Prisma Client.
- `npx prisma migrate dev` - Create and apply a development migration.
- `npx prisma studio` - Open Prisma Studio to inspect and manage database records.

## Getting Started

### Prerequisites
Before running the project, make sure the following are installed:
- Node.js
- npm
- Git
- PostgreSQL

### Installation
Clone the repository:
```bash
git clone https://github.com/Agrim2005/Community-Forum-Prototype.git
```

Move into the project directory:
```bash
cd Community-Forum-Prototype
```

### Frontend Setup
Move into the frontend directory:
```bash
cd frontend
```

Install dependencies:
```bash
npm install
```

Start the frontend development server:
```bash
npm run dev
```
Vite will display the local development URL in the terminal.

### Backend Setup
Open a separate terminal and move into the backend directory:
```bash
cd backend
```

Install dependencies:
```bash
npm install
```

Create a `.env` file based on the backend configuration requirements.
Example:
```env
PORT=5000
DATABASE_URL="postgresql://USERNAME:PASSWORD@localhost:5432/DATABASE_NAME"
JWT_SECRET="your_secret_key"
JWT_EXPIRES_IN="7d"
```

Generate the Prisma Client:
```bash
npx prisma generate
```

Apply database migrations:
```bash
npx prisma migrate dev
```

Start the backend development server:
```bash
npm run dev
```
The backend runs on: `http://localhost:5000`

## API Overview

The backend exposes REST API endpoints for the main application features.

**Authentication**
- `POST /api/auth/register`
- `POST /api/auth/login`

**Posts**
- `GET    /api/posts`
- `POST   /api/posts`
- `PUT    /api/posts/:id`
- `DELETE /api/posts/:id`

**Comments**
- `GET  /api/comments/:postId`
- `POST /api/comments`

**Communities**
- `GET    /api/communities`
- `POST   /api/communities/:id/join`
- `DELETE /api/communities/:id/leave`

**Messages**
- `GET  /api/messages/conversations`
- `POST /api/messages/conversations`
- `GET  /api/messages/conversations/:conversationId`
- `POST /api/messages`

**Notifications**
- `GET /api/notifications`

**Likes**
- `POST   /api/likes`
- `DELETE /api/likes/:postId`

**Bookmarks**
- `GET    /api/bookmarks`
- `POST   /api/bookmarks`
- `DELETE /api/bookmarks/:postId`

Most protected endpoints require a valid JWT token in the Authorization header.
Example: `Authorization: Bearer YOUR_JWT_TOKEN`

## Available Scripts

### Frontend
Start the development server:
```bash
npm run dev
```

Create a production build:
```bash
npm run build
```

Run linting:
```bash
npm run lint
```

Preview the production build:
```bash
npm run preview
```

### Backend
Start the backend development server:
```bash
npm run dev
```

Build the backend:
```bash
npm run build
```

Run the production build:
```bash
npm start
```
*The exact available backend scripts may depend on the backend/package.json configuration.*

## Authentication Flow

The authentication system uses JWT-based authentication.

1. A user registers through the frontend.
2. The backend validates the request.
3. The password is hashed before being stored.
4. A JWT token is generated after successful authentication.
5. The frontend stores the token locally.
6. Protected API requests include the token in the Authorization header.
7. Backend authentication middleware verifies the token before allowing access to protected resources.

## Data and Persistence

The project uses a combination of:
- PostgreSQL for backend application data
- Prisma ORM for database operations
- REST APIs for frontend-backend communication
- Zustand for frontend shared state
- Browser storage for selected persistent frontend state

Some frontend functionality may still use local state, mock data, or browser persistence while backend integration is completed incrementally.

## Dark Mode

The application supports both light and dark themes.
The selected theme is managed using Zustand and persisted in browser storage, allowing the user's preference to remain after refreshing the application.

## Responsive Design

The application is designed to work across different screen sizes:
- Mobile devices
- Tablets
- Laptops
- Desktop displays

Responsive layouts are implemented using Tailwind CSS breakpoints.

## Future Improvements

Potential future improvements include:
- Complete end-to-end messaging flow testing
- Real-time messaging with WebSockets or Socket.IO
- Real-time notifications
- Image and file uploads
- Expanded profile editing
- Advanced community management
- Improved accessibility
- Automated testing
- API integration completion for all frontend features
- Production deployment

## Project Status

This project was developed as a React, TypeScript, and full-stack community forum application focused on:
- Component-based architecture
- Reusable UI components
- Responsive design
- Routing and protected routes
- Form handling and validation
- Zustand state management
- CRUD operations
- REST API development
- JWT authentication
- Prisma ORM
- PostgreSQL database integration
- Backend architecture using routes, controllers, services, and middleware
- Git and GitHub workflow

The core frontend and backend structure has been implemented. Some features, particularly the final end-to-end messaging conversation flow, remain suitable for further testing and refinement.

## Author
Agrim Sharma