# Full Stack Developer Portfolio

A modern, responsive developer portfolio built with **React.js** (Vite), **Express.js**, and **Tailwind CSS**. Features a fully functional contact form with backend integration.

## 🎨 Features

- **Responsive Design** - Mobile-first approach using Tailwind CSS
- **Smooth Navigation** - Single-page app with smooth scrolling sections
- **Modern UI** - Dark theme inspired by contemporary developer portfolios
- **Contact Form** - Fully functional backend integration
- **Projects Showcase** - Filterable project gallery
- **Skills Section** - Visual skill proficiency display
- **Social Integration** - Links to GitHub, LinkedIn, and email
- **Fast & Optimized** - Built with Vite for optimal performance

## 📁 Project Structure

```
portfolio/
├── frontend/                 # React frontend
│   ├── src/
│   │   ├── components/       # React components
│   │   │   ├── Navbar.jsx
│   │   │   ├── Hero.jsx
│   │   │   ├── About.jsx
│   │   │   ├── Projects.jsx
│   │   │   ├── Skills.jsx
│   │   │   ├── Contact.jsx
│   │   │   └── Footer.jsx
│   │   ├── App.jsx          # Main app component
│   │   ├── main.jsx         # Entry point
│   │   └── index.css        # Global styles
│   ├── index.html           # HTML template
│   ├── vite.config.js       # Vite configuration
│   ├── tailwind.config.js   # Tailwind configuration
│   ├── postcss.config.js    # PostCSS configuration
│   └── package.json
│
├── backend/                 # Express backend
│   ├── server.js            # Main server file
│   ├── package.json
│   └── .env.example         # Environment variables example
│
├── SETUP_INSTRUCTIONS.md   # Detailed setup guide
└── README.md               # This file
```

## 🚀 Quick Start

### Prerequisites

- **Node.js** v16+ ([Download](https://nodejs.org/))
- **npm** (comes with Node.js)
- A code editor (VS Code recommended)

### Installation

#### 1. Install Frontend Dependencies

```bash
cd frontend
npm install
```

#### 2. Install Backend Dependencies

```bash
cd ../backend
npm install
```

#### 3. Configure Backend

Create a `.env` file in the `backend/` directory:

```env
PORT=5000
NODE_ENV=development
```

### Running the Application

#### Terminal 1 - Start Backend

```bash
cd backend
npm start
```

Output: `✅ Server running on http://localhost:5000`

#### Terminal 2 - Start Frontend

```bash
cd frontend
npm run dev
```

Output: `Local: http://localhost:5173/`

### Access the Portfolio

Open your browser and navigate to:
```
http://localhost:5173
```

## 📚 Technology Stack

### Frontend
- **React 18** - UI library
- **Vite** - Build tool & dev server
- **Tailwind CSS** - Utility-first CSS framework
- **JavaScript** - No TypeScript (as requested)

### Backend
- **Express.js** - Web framework
- **Node.js** - Runtime environment
- **CORS** - Cross-origin resource sharing
- **dotenv** - Environment variable management

## 🔧 API Documentation

### Contact Form Endpoint

**Endpoint:** `POST /api/contact`

**Request Body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "subject": "Project Inquiry",
  "message": "Your message content here"
}
```

**Success Response (200):**
```json
{
  "success": true,
  "message": "Thank you! Your message has been received.",
  "submissionId": 1707241234567
}
```

**Error Response (400/500):**
```json
{
  "success": false,
  "message": "Error description"
}
```

### Other Endpoints

- `GET /api/health` - Server health check
- `GET /api/submissions` - View all submissions (for demo only)

## 🎯 Component Overview

### Navbar
- Fixed sticky navigation
- Active section highlighting
- Mobile hamburger menu

### Hero Section
- Eye-catching headline
- Call-to-action buttons
- Code snippet animation
- Social media links

### About Section
- Multi-panel about content
- Experience highlights
- Skills categories

### Projects Section
- Filterable project grid
- Project cards with technologies
- External links to projects

### Skills Section
- Organized by category
- Visual proficiency bars
- Additional competencies

### Contact Section
- Fully functional contact form
- Form validation
- Success/error messages
- Alternative contact methods

### Footer
- Links and navigation
- Social media icons
- Copyright information

## 🎨 Customization Guide

### Colors
Edit `frontend/tailwind.config.js`:
```javascript
colors: {
  background: '#0a0e27',
  foreground: '#f0f4ff',
  primary: '#3b82f6',
  accent: '#10b981',
  muted: '#6b7280',
  border: '#1e293b'
}
```

### Content
- **Hero**: Edit `Hero.jsx`
- **About**: Edit `About.jsx`
- **Projects**: Update `projectsData` in `Projects.jsx`
- **Skills**: Update `skillsData` in `Skills.jsx`

### Contact Information
Update in:
- `Hero.jsx` - Email and social links
- `Footer.jsx` - Contact details
- `Contact.jsx` - Email and alternatives

## 🔐 Environment Variables

### Backend (.env)
```env
PORT=5000                    # Server port (default: 5000)
NODE_ENV=development         # Environment (development/production)

# Optional: Email configuration
# EMAIL_SERVICE=gmail
# EMAIL_USER=your_email@gmail.com
# EMAIL_PASS=your_app_password
```

## 📦 Building for Production

### Frontend Build
```bash
cd frontend
npm run build
```

Output: `dist/` folder ready for deployment

### Backend Considerations
- Set `NODE_ENV=production`
- Use environment variables for sensitive data
- Consider deploying to services like:
  - **Render** (free tier available)
  - **Railway** (free tier available)
  - **Heroku** (paid tier)

## 🐛 Troubleshooting

### Frontend won't load
```bash
# Check if backend is running
# Ensure backend is on http://localhost:5000
# Check browser console for CORS errors
```

### Backend port already in use
```bash
# Change PORT in backend/.env
# Or kill the process using the port
```

### npm install fails
```bash
npm cache clean --force
rm -rf node_modules package-lock.json
npm install
```

### Contact form not sending
1. Verify backend is running: `http://localhost:5000/api/health`
2. Check browser console for network errors
3. Ensure CORS is properly configured
4. Check backend logs for error messages

## 📝 Notes

- This portfolio uses in-memory storage for contact submissions (demo only)
- For production, implement:
  - Database storage for submissions
  - Email notifications
  - Form submission limits/rate limiting
  - Admin dashboard for managing submissions

## 🚢 Deployment

### Frontend (Vercel/Netlify)
```bash
cd frontend
npm run build
# Deploy the `dist/` folder
```

### Backend (Render/Railway)
```bash
# Push to GitHub
# Connect repo to Render/Railway
# Set environment variables
# Deploy
```

## 📖 Further Enhancements

- Add blog section with CMS
- Implement dark/light theme toggle
- Add animations with Framer Motion
- Create admin dashboard for content management
- Add analytics tracking
- Implement email notifications
- Add file upload for resume/CV
- Create testimonials section

## 💝 Support

If you encounter issues:
1. Check the browser console for errors
2. Check terminal logs for backend errors
3. Verify both servers are running
4. Review SETUP_INSTRUCTIONS.md
5. Check environment variables are set correctly

## 📄 License

This project is open source and available under the MIT License.

## 🎉 Credits

Built with ❤️ by Vishnu Vardhan | Full Stack Developer

---

**Happy Coding!** 🚀

For questions or support, reach out through the contact form or social links in the portfolio.
