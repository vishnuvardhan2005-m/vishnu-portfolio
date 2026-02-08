# MERN Portfolio Setup Instructions

This project is a complete standalone application with a React frontend and Express backend. Follow these steps to run it locally.

## Project Structure

```
portfolio/
├── frontend/          # React + Vite frontend
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   ├── package.json
│   └── vite.config.js
└── backend/           # Express.js backend
    ├── server.js
    ├── package.json
    └── .env.example
```

## Prerequisites

- **Node.js** (v16 or higher) - [Download](https://nodejs.org/)
- **npm** (comes with Node.js)

## Installation & Running

### Step 1: Clone/Setup the Repository
Make sure both `frontend` and `backend` folders exist in your project directory.

### Step 2: Install Frontend Dependencies

```bash
cd frontend
npm install
```

### Step 3: Install Backend Dependencies

```bash
cd ../backend
npm install
```

### Step 4: Configure Backend Environment

Create a `.env` file in the `backend/` directory:

```
PORT=5000
NODE_ENV=development
```

For email functionality (optional), add your email service details:
```
EMAIL_SERVICE=gmail
EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_app_password
```

### Step 5: Start the Backend Server

```bash
cd backend
npm start
```

You should see: `Server running on http://localhost:5000`

### Step 6: Start the Frontend (in a new terminal)

```bash
cd frontend
npm run dev
```

You should see: `Local: http://localhost:5173/`

## Access the Application

Open your browser and navigate to:
```
http://localhost:5173
```

## Frontend Features

- **Responsive Design** with Tailwind CSS
- **Smooth Scrolling** navigation
- **Projects Showcase** with filterable projects
- **Skills Section** organized by category
- **Contact Form** (connected to backend)
- **Social Links** integration
- **Dark theme** inspired by modern developer portfolios

## Backend Features

- **Express.js** server running on port 5000
- **Contact Form API** at `/api/contact`
- **CORS** enabled for frontend communication
- **Email Validation** and error handling
- **Error Handling** middleware

## API Endpoints

### POST `/api/contact`
Send a contact form submission.

**Request Body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "subject": "Project Inquiry",
  "message": "Your message here"
}
```

**Response:**
```json
{
  "success": true,
  "message": "Email sent successfully"
}
```

## Troubleshooting

### Frontend won't connect to backend
- Ensure backend is running on `http://localhost:5000`
- Check browser console for CORS errors
- Verify `API_URL` in frontend `.env` file

### Backend port already in use
```bash
# Change PORT in backend/.env to a different number (e.g., 5001)
```

### npm install fails
```bash
# Clear npm cache
npm cache clean --force
rm -rf node_modules package-lock.json
npm install
```

## Next Steps

1. **Customize Portfolio Content**: Edit the data in frontend components
2. **Add Your Projects**: Update the projects list with your work
3. **Setup Email**: Configure email service for contact form
4. **Deploy**: Use services like Vercel (frontend) and Render (backend)

## Support

For issues or questions, check:
- Frontend errors in browser DevTools Console
- Backend errors in terminal where `npm start` is running
- Ensure both servers are running before testing features

Happy coding! 🚀
