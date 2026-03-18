# MyPortfolio
# Mohammad Kaif - AI Portfolio Website

A modern, fully responsive AI-powered portfolio website for a Machine Learning and Software Developer.

## Features

- ✨ Modern, futuristic design with glassmorphism effects
- 🌓 Dark/Light theme toggle
- 📱 Fully responsive (mobile, tablet, desktop)
- 🎨 Smooth animations and micro-interactions
- 🤖 Interactive AI Playground with Movie Recommendation System
- 📧 Contact form with backend API
- 🎯 Skills showcase with progress bars
- 📊 GitHub activity display
- ⏱️ Experience timeline
- 🚀 Project portfolio with filtering

## Tech Stack

### Frontend

- React 19
- Tailwind CSS
- Shadcn/ui components
- Lucide React icons
- Axios for API calls

### Backend

- FastAPI
- MongoDB (Motor async driver)
- Pydantic for validation
- Python 3.9+

## Project Structure

```
.
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── ui/              # Shadcn UI components
│   │   │   ├── Header.jsx
│   │   │   ├── Hero.jsx
│   │   │   ├── About.jsx
│   │   │   ├── Skills.jsx
│   │   │   ├── Projects.jsx
│   │   │   ├── AIPlayground.jsx
│   │   │   ├── Experience.jsx
│   │   │   ├── GitHubActivity.jsx
│   │   │   ├── Contact.jsx
│   │   │   └── Footer.jsx
│   │   ├── hooks/
│   │   │   └── use-toast.js
│   │   ├── lib/
│   │   │   └── utils.js
│   │   ├── mock.js             # Mock data
│   │   ├── App.js
│   │   ├── App.css
│   │   ├── index.js
│   │   └── index.css
│   ├── public/
│   ├── package.json
│   └── tailwind.config.js
│
├── backend/
│   ├── server.py               # FastAPI server
│   ├── models.py               # Pydantic models
│   └── requirements.txt
│
└── contracts.md                # API contracts documentation
```

## Setup Instructions

### Prerequisites

- Node.js 16+ and Yarn
- Python 3.9+
- MongoDB instance
