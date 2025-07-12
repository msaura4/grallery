# 🎨 Grallery

A beautiful, modern art gallery web application that showcases random artworks from The Metropolitan Museum of Art's collection. Built with React frontend and Node.js backend.

![Grallery Preview](https://img.shields.io/badge/Status-Live-brightgreen)
![React](https://img.shields.io/badge/React-18.2.0-blue)
![Node.js](https://img.shields.io/badge/Node.js-18+-green)
![Express](https://img.shields.io/badge/Express-5.1.0-orange)

## ✨ Features

- **🎨 Dynamic Art Collection**: Fetches random artworks from The Metropolitan Museum of Art API
- **📱 Responsive Design**: Beautiful, mobile-first responsive layout
- **🖼️ Interactive Gallery**: Click any artwork to view details in a modal
- **🔄 Fresh Collections**: Generate new random artwork collections with one click
- **⚡ Modern UI**: Sleek design with smooth animations and hover effects
- **🎯 Error Handling**: Graceful error states with retry functionality
- **📊 Loading States**: Elegant loading animations

## 🏗️ Architecture

### Frontend (React + Vite)
- **Framework**: React 18 with Vite for fast development
- **Styling**: Modern CSS with responsive grid layout
- **State Management**: React hooks (useState, useEffect)
- **API Integration**: Fetch API for backend communication

### Backend (Node.js + Express)
- **Runtime**: Node.js with Express framework
- **API**: RESTful endpoints for artwork data
- **External API**: Integration with The Metropolitan Museum of Art API
- **CORS**: Enabled for cross-origin requests

## 🚀 Getting Started

### Prerequisites
- Node.js (version 18 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/grallery.git
   cd grallery
   ```

2. **Install backend dependencies**
   ```bash
   cd backend
   npm install
   ```

3. **Install frontend dependencies**
   ```bash
   cd ../frontend
   npm install
   ```

### Running the Application

1. **Start the backend server**
   ```bash
   cd backend
   npm start
   ```
   The backend will run on `http://localhost:3001`

2. **Start the frontend development server**
   ```bash
   cd frontend
   npm run dev
   ```
   The frontend will run on `http://localhost:5173`

3. **Open your browser**
   Navigate to `http://localhost:5173` to view the application

## 📁 Project Structure

```
grallery/
├── backend/
│   ├── index.js          # Express server and API endpoints
│   ├── package.json      # Backend dependencies
│   └── package-lock.json
├── frontend/
│   ├── src/
│   │   ├── App.jsx       # Main React component
│   │   ├── App.css       # Styles for the gallery
│   │   ├── main.jsx      # React entry point
│   │   └── index.css     # Global styles
│   ├── public/
│   ├── package.json      # Frontend dependencies
│   └── vite.config.js    # Vite configuration
└── README.md
```

## 🔧 API Endpoints

### Backend API (`http://localhost:3001`)

- `GET /` - Health check endpoint
- `GET /api/random-artworks` - Fetches 8 random artworks from The Met

### Response Format
```json
[
  {
    "id": 12345,
    "title": "Artwork Title",
    "artist": "Artist Name",
    "year": "1900",
    "image": "https://images.metmuseum.org/..."
  }
]
```

## 🎨 Design Features

### Visual Design
- **Color Scheme**: Purple gradient background with white cards
- **Typography**: Modern system fonts with proper hierarchy
- **Layout**: CSS Grid for responsive gallery layout
- **Animations**: Smooth transitions and hover effects

### User Experience
- **Loading States**: Elegant spinner with descriptive text
- **Error Handling**: User-friendly error messages with retry options
- **Modal Views**: Full-screen artwork details
- **Responsive**: Optimized for desktop, tablet, and mobile

## 🛠️ Technologies Used

### Frontend
- **React 18** - UI framework
- **Vite** - Build tool and dev server
- **CSS3** - Styling with modern features (Grid, Flexbox, Animations)

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** - Web framework
- **node-fetch** - HTTP client for API calls
- **CORS** - Cross-origin resource sharing

### External APIs
- **The Metropolitan Museum of Art API** - Artwork data source

## 🔍 Key Implementation Details

### Frontend Implementation
- **Component Architecture**: Single-page application with modal system
- **State Management**: Local state with React hooks
- **API Integration**: Fetch API with error handling
- **Responsive Design**: Mobile-first approach with CSS Grid

### Backend Implementation
- **API Proxy**: Fetches and formats data from external API
- **Error Handling**: Comprehensive error catching and logging
- **Random Selection**: Algorithm to select random artworks
- **Data Filtering**: Ensures only artworks with images are returned

## 🚀 Deployment

### Backend Deployment
The backend can be deployed to platforms like:
- Heroku
- Railway
- Render
- Vercel (with serverless functions)

### Frontend Deployment
The frontend can be deployed to:
- Vercel
- Netlify
- GitHub Pages
- Firebase Hosting

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **The Metropolitan Museum of Art** for providing the artwork data API
- **React Team** for the amazing frontend framework
- **Express.js Team** for the robust backend framework

## 📞 Support

If you encounter any issues or have questions:
1. Check the [Issues](https://github.com/yourusername/grallery/issues) page
2. Create a new issue with detailed information
3. Contact the maintainers

---

**Made with ❤️ for art lovers everywhere** 