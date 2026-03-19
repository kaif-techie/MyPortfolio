// Mock data for Mohammad Kaif's Portfolio

export const personalInfo = {
  name: "Mohammad Kaif",
  title: "Machine Learning Engineer | AI Developer | Software Engineer",
  tagline:
    "Building intelligent systems using Machine Learning, Deep Learning, and Data.",
  email: "codewithkaif.03@gmail.com",
  linkedin:
    "https://www.linkedin.com/authwall?trk=gf&trkInfo=AQGbvhDaBB4mNQAAAZwxw0oA3hX9CQr5P8D0hyrQogIHXRiAogL0WeagloL0fAaapWtha5vJpXNaaNeUKv6Ujvmk_KieGSdpy07oqqNJyKHx41ShLRCxmByEKyfS3EyiXUYMGfg=&original_referer=https://l.instagram.com/&sessionRedirect=https%3A%2F%2Fwww.linkedin.com%2Fin%2Fmohd-kaif-923036165%3Futm_source%3Dshare%26utm_campaign%3Dshare_via%26utm_content%3Dprofile%26utm_medium%3Dios_app%26fbclid%3DPAZXh0bgNhZW0CMTEAc3J0YwZhcHBfaWQMMjU2MjgxMDQwNTU4AAGneo_e1nA1Z-08xg_t4rQYrv0ar_R4ENQ9EVO3OGd9MKbpF7qqR6jZJ8nNbg8_aem_u_OglrO4sDKJV13v3DL3VA",
  github: "https://github.com/kaif-techie",
  resumeUrl: "#",
};

export const aboutMe = {
  description:
    "I'm a Computer Science graduate from Maharaja Agrasen College with a deep passion for Artificial Intelligence and Machine Learning. My journey in tech is driven by curiosity and the desire to solve real-world problems using intelligent systems. I specialize in building ML models, developing data-driven solutions, and creating software that makes a difference. Currently, I'm advancing my expertise in Deep Learning architectures and distributed system design, while actively working on projects that bridge the gap between research and practical applications. I believe in continuous learning and staying at the forefront of AI innovation.",
};

export const skills = {
  // programming: [
  //   { name: "Python", level: 90 },
  //   { name: "JavaScript", level: 80 },
  //   { name: "Java", level: 75 }
  // ],
  machineLearning: [
    { name: "Scikit-learn", level: 85 },
    { name: "Pandas", level: 90 },
    { name: "NumPy", level: 88 },
    { name: "Matplotlib", level: 80 },
    { name: "Seaborn", level: 75 },
  ],
  deepLearning: [
    { name: "TensorFlow", level: 80 },
    { name: "PyTorch", level: 85 },
    { name: "Neural Networks", level: 82 },
    { name: "CNN", level: 78 },
    { name: "NLP Basics", level: 75 },
  ],
  webDevelopment: [
    { name: "React", level: 85 },
    { name: "Node.js", level: 80 },
    { name: "Express", level: 78 },
    { name: "MongoDB", level: 75 },
    { name: "Streamlit", level: 85 },
  ],
  tools: [
    { name: "Git", level: 88 },
    { name: "Docker", level: 75 },
    { name: "Linux", level: 82 },
    { name: "VS Code", level: 90 },
  ],
};

export const projects = [
  {
    id: 1,
    title: "Movie Recommendation System",
    description:
      "Built using Machine Learning and cosine similarity. Uses TMDB API to fetch movie posters and recommends movies based on similarity analysis.",
    tech: ["Python", "Pandas", "Scikit-learn", "Streamlit", "API"],
    image:
      "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=800&q=80",
    github: "https://github.com/yourprofile/movie-recommendation",
    demo: "#",
    category: "Machine Learning",
  },
  {
    id: 2,
    title: "AI Chatbot",
    description:
      "Conversational chatbot using NLP with voice interaction support. Leverages LLM and speech recognition for natural conversations.",
    tech: ["Python", "NLP", "LLM", "Speech Recognition"],
    image:
      "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=800&q=80",
    github: "https://github.com/yourprofile/ai-chatbot",
    demo: "#",
    category: "Deep Learning",
  },
  {
    id: 3,
    title: "Stock Price Prediction",
    description:
      "Predict future stock trends using machine learning. Includes data preprocessing, visualization, feature engineering, and model evaluation.",
    tech: ["Python", "Pandas", "Scikit-learn", "LSTM", "Matplotlib"],
    image:
      "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80",
    github: "https://github.com/yourprofile/stock-prediction",
    demo: "#",
    category: "Machine Learning",
  },
];

export const experience = [
  {
    id: 1,
    title: "Machine Learning Specialization",
    period: "2025 - Present",
    description:
      "Completed comprehensive ML courses covering supervised, unsupervised learning, and neural networks.",
  },
  {
    id: 2,
    title: "Building AI Projects",
    period: "2025 - Present",
    description:
      "Developing real-world AI applications including recommendation systems and predictive models.",
  },
  {
    id: 3,
    title: "Software Engineering Preparation",
    period: "2024 - Present",
    description:
      "Preparing for roles at top tech companies with focus on system design and scalable architectures.",
  },
  {
    id: 4,
    title: "Learning Data Structures & Algorithms",
    period: "2024 - 2025",
    description:
      "Mastering problem-solving techniques and optimizing code efficiency through algorithmic thinking.",
  },
];

export const githubActivity = {
  username: "mohammadkaif",
  totalContributions: 847,
  currentStreak: 23,
  repositories: [
    {
      name: "movie-recommendation-system",
      description: "ML-based movie recommendation engine",
      stars: 45,
      language: "Python",
      updated: "2 days ago",
    },
    {
      name: "stock-price-predictor",
      description: "Stock market prediction using LSTM",
      stars: 32,
      language: "Python",
      updated: "1 week ago",
    },
    {
      name: "ai-chatbot",
      description: "Conversational AI with NLP",
      stars: 28,
      language: "Python",
      updated: "3 days ago",
    },
    {
      name: "ml-algorithms-from-scratch",
      description: "Implementing ML algorithms without libraries",
      stars: 67,
      language: "Python",
      updated: "5 days ago",
    },
  ],
};

export const movieDatabase = [
  {
    id: 1,
    title: "Inception",
    genre: "Sci-Fi",
    rating: 8.8,
    year: 2010,
    poster:
      "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=300&q=80",
  },
  {
    id: 2,
    title: "The Matrix",
    genre: "Sci-Fi",
    rating: 8.7,
    year: 1999,
    poster:
      "https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=300&q=80",
  },
  {
    id: 3,
    title: "Interstellar",
    genre: "Sci-Fi",
    rating: 8.6,
    year: 2014,
    poster:
      "https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=300&q=80",
  },
  {
    id: 4,
    title: "The Dark Knight",
    genre: "Action",
    rating: 9.0,
    year: 2008,
    poster:
      "https://images.unsplash.com/photo-1509347528160-9a9e33742cdb?w=300&q=80",
  },
  {
    id: 5,
    title: "Pulp Fiction",
    genre: "Crime",
    rating: 8.9,
    year: 1994,
    poster:
      "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=300&q=80",
  },
  {
    id: 6,
    title: "Fight Club",
    genre: "Drama",
    rating: 8.8,
    year: 1999,
    poster:
      "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=300&q=80",
  },
  {
    id: 7,
    title: "Forrest Gump",
    genre: "Drama",
    rating: 8.8,
    year: 1994,
    poster:
      "https://images.unsplash.com/photo-1574267432644-f65b5f7d1a9e?w=300&q=80",
  },
  {
    id: 8,
    title: "The Shawshank Redemption",
    genre: "Drama",
    rating: 9.3,
    year: 1994,
    poster:
      "https://images.unsplash.com/photo-1594908900066-3f47337549d8?w=300&q=80",
  },
  {
    id: 9,
    title: "Gladiator",
    genre: "Action",
    rating: 8.5,
    year: 2000,
    poster:
      "https://images.unsplash.com/photo-1513106580091-1d82408b8cd6?w=300&q=80",
  },
  {
    id: 10,
    title: "The Godfather",
    genre: "Crime",
    rating: 9.2,
    year: 1972,
    poster:
      "https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=300&q=80",
  },
];

export const getMovieRecommendations = (movieTitle) => {
  // Simulate ML recommendation algorithm with mock data
  const movie = movieDatabase.find((m) =>
    m.title.toLowerCase().includes(movieTitle.toLowerCase()),
  );

  if (!movie) {
    return {
      success: false,
      message: "Movie not found in database",
    };
  }

  // Get similar movies (same genre, exclude selected movie)
  const recommendations = movieDatabase
    .filter((m) => m.genre === movie.genre && m.id !== movie.id)
    .sort(() => Math.random() - 0.5)
    .slice(0, 5);

  return {
    success: true,
    selectedMovie: movie,
    recommendations,
  };
};
