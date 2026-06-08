import timeline from "./timeline.webp";
import todo from "./todo.webp";
import destinationSearch from "./destination_search.webp";
import nxtTrendz from "./nxt_trendz.webp";
import jobby from "./jobby.webp";
import passwordManager from "./password-manager.webp";
import appointments from "./appointments.webp";
import coinToss from "./coinToss.webp";
import appStore from "./app-store.webp";
import googleSearch from "./googleSearch.webp";
import wikipedia from "./googleSearch.webp";
import iplDashboard from "./iplDashboard.webp";
import twitter from "./googleSearch.webp";
import playerScore from "./score.webp";
import covid from "./covid.webp";
import movies from "./movies.webp";
import cricket from "./cricket.webp";
import turtleCrossing from "./turtleCrossing.webp";
import snakeGame from "./snakeGame.webp";
import cyberThreat from "./cyberThreat.webp";
import geoforgeImg from "./geoforge.webp";
import trackflowImg from "./trackflow.webp";
import suprateletrackImg from "./suprateletrack.webp";

export const commercialProjects = [
  {
    title: "GeoForge",
    description:
      "• <strong>High-performance map rendering</strong> with Leaflet, GeoServer WMS, and advanced coordinate system support (proj4, turf)\n      • <strong>3D engine</strong> powered by Three.js for CAD/DXF mesh visualization and TIN-based PointCloud volume calculations\n      • <strong>Custom 360° panorama viewer</strong> with WebGL navigation, offline IndexedDB storage, and interactive tour configurator\n      • <strong>Companion React Native mobile app</strong> with precision GPS tracking, photo capture, and real-time marker assignment\n      • <strong>Optimized memory management</strong> for large geospatial datasets with robust leak mitigation",
    url: "",
    image: geoforgeImg,
    tech: [
      "React 18",
      "TypeScript",
      "Three.js",
      "React Native",
      "Leaflet",
      "Tailwind CSS",
    ],
  },
  {
    title: "TrackFlow",
    description:
      "• <strong>Employee whereabouts tracking</strong> with granular daily statuses mapped to Morning, Afternoon, and Full-day across a 52-week calendar grid\n      • <strong>Role-based access control</strong> with email pre-authorization and secure JWT authentication with access/refresh token flow\n      • <strong>Agile Kanban boards</strong> with drag-and-drop columns, fully customizable per project workspace\n      • <strong>Sprint lifecycle management</strong> including backlog grooming, task migration, and automatic rollback of incomplete items\n      • <strong>Rich task entities</strong> supporting story points, priority, epics, parent-child subtask hierarchy, and threaded comments",
    url: "",
    image: trackflowImg,
    tech: [
      "React 19",
      "Material-UI 7",
      "PrimeReact",
      "Tailwind CSS v4",
      "FastAPI",
      "MongoDB",
      "AWS EC2",
    ],
  },
  {
    title: "FleetVision",
    description:
      "• <strong>Real-time Telemetry (IoT)</strong> via MQTT and AWS IoT Core for live vehicle data streams\n      • <strong>Maps & Geospatial</strong> integrating Mappls SDK and Turf.js for live tracking and complex geofencing\n      • <strong>Trip History & Analytics</strong> using custom polyline rendering and charting libraries\n      • <strong>Push Notifications & Security</strong> utilizing Firebase Cloud Messaging (FCM) and encrypted storage\n      • <strong>Resilient Connections</strong> managing MQTT lifecycle deeply integrated with app background/foreground states",
    url: "",
    image: suprateletrackImg,
    tech: [
      "React Native",
      "MQTT",
      "AWS IoT",
      "Mappls",
      "Firebase",
    ],
  },
];

export const miniProjects = [
  {
    category: "Frontend Apps",
    title: "Timeline App",
    description: "A timeline-based UI app built with React.",
    url: "https://github.com/Manjunathdk12/Timeline_App",
    image: timeline,
  },
  {
    category: "Frontend Apps",
    title: "Todo App",
    description: "Task management app with add/delete features.",
    url: "https://github.com/Manjunathdk12/Todo_App",
    image: todo,
  },
  {
    category: "Frontend Apps",
    title: "Destination Search",
    description: "Search-based destination app.",
    url: "https://github.com/Manjunathdk12/Desination_Search",
    image: destinationSearch,
  },
  {
    category: "Frontend Apps",
    title: "Manju Nxt Trendz",
    description: "E-commerce style frontend app.",
    url: "https://github.com/Manjunathdk12/Manju_Nxt_Trendz",
    image: nxtTrendz,
  },
  {
    category: "Frontend Apps",
    title: "Jobby App",
    description: "Job search and listings platform.",
    url: "https://github.com/Manjunathdk12/Jobby-App",
    image: jobby,
  },
  {
    category: "Frontend Apps",
    title: "Password Manager",
    description: "Manage and store passwords securely.",
    url: "https://github.com/Manjunathdk12/Password-Manager",
    image: passwordManager,
  },
  {
    category: "Frontend Apps",
    title: "Appointments App",
    description: "Book and manage appointments.",
    url: "https://github.com/Manjunathdk12/Appointments_APP",
    image: appointments,
  },
  {
    category: "Frontend Apps",
    title: "Coin Toss App",
    description: "Simple fun app with coin toss logic.",
    url: "https://github.com/Manjunathdk12/Coin_Toss_App",
    image: coinToss,
  },
  {
    category: "Frontend Apps",
    title: "App Store",
    description: "App listing & search app.",
    url: "https://github.com/Manjunathdk12/App_Store",
    image: appStore,
  },
  {
    category: "Frontend Apps",
    title: "Google Search Suggestion",
    description: "Google-style auto-suggestion app.",
    url: "https://github.com/Manjunathdk12/Google_Search_Suggestion",
    image: googleSearch,
  },
  {
    category: "Frontend Apps",
    title: "Wikipedia Search",
    description: "Search Wikipedia articles in real time.",
    url: "https://github.com/Manjunathdk12/Wikipedia-Search-Application",
    image: wikipedia,
  },
  {
    category: "Full-Stack / API Projects",
    title: "IPL Dashboard App",
    description: "Dashboard to track IPL team stats.",
    url: "https://github.com/Manjunathdk12/IPL_Dashboard_App",
    image: iplDashboard,
  },
  {
    category: "Full-Stack / API Projects",
    title: "Twitter API",
    description: "API integration with Twitter data.",
    url: "https://github.com/Manjunathdk12/Twitter_API",
    image: twitter,
  },
  {
    category: "Full-Stack / API Projects",
    title: "Player Match Scores",
    description: "Player score tracking with API.",
    url: "https://github.com/Manjunathdk12/Player_Match_Scores",
    image: playerScore,
  },
  {
    category: "Full-Stack / API Projects",
    title: "Covid-19 API",
    description: "COVID data visualization app.",
    url: "https://github.com/Manjunathdk12/Covid_19_API",
    image: covid,
  },
  {
    category: "Full-Stack / API Projects",
    title: "Movies API",
    description: "Movie database API project.",
    url: "https://github.com/Manjunathdk12/Movies_API",
    image: movies,
  },
  {
    category: "Full-Stack / API Projects",
    title: "Cricket Team API",
    description: "API project for cricket teams.",
    url: "https://github.com/Manjunathdk12/Cricket_Team_API",
    image: cricket,
  },
  {
    category: "Games",
    title: "Turtle Crossing Game",
    description: "Python turtle module based game.",
    url: "https://github.com/Manjunathdk12/Turtle_Crossing_Game",
    image: turtleCrossing,
  },
  {
    category: "Games",
    title: "Snake Game",
    description: "Classic snake game built in Python.",
    url: "https://github.com/Manjunathdk12/snake_game",
    image: snakeGame,
  },
  {
    category: "Cybersecurity / AI",
    title: "Cybersecurity Threat Intelligence Platform",
    description: "AI-based threat intelligence system.",
    url: "https://github.com/Manjunathdk12/Cybersecurity-Threat-aIntelligence-Platform",
    image: cyberThreat,
  },
];

export const miniCategories = [
  "All",
  "Frontend Apps",
  "Full-Stack / API Projects",
  "Games",
  "Cybersecurity / AI",
];
