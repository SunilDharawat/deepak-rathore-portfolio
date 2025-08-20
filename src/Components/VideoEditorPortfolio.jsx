import React, { useState, useRef, useEffect } from "react";
import {
  Play,
  Pause,
  Volume2,
  VolumeX,
  Maximize2,
  Award,
  Eye,
  Calendar,
  User,
  Mail,
  Phone,
  MapPin,
  ExternalLink,
  Github,
  Linkedin,
  Instagram,
  Star,
  Clock,
  Download,
  Zap,
  Sparkles,
  Film,
  Camera,
  Edit,
  Palette,
  MonitorPlay,
  Cpu,
} from "lucide-react";

const VideoEditorPortfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [playingVideo, setPlayingVideo] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const videoRefs = useRef({});

  // Portfolio data
  const portfolioData = {
    name: "Deepak Rathore",
    title: "Creative Video Editor & Motion Designer",
    tagline: "Bringing Stories to Life Through Visual Magic",
    bio: "Passionate creative specializing in dynamic video editing and motion graphics. I transform raw footage into compelling visual narratives that captivate audiences and drive results.",
    location: "Indore, India",
    email: "deepakrathore@videoeditor.com",
    phone: "+91 123 456 7890",
    social: {
      linkedin: "https://linkedin.com/in/deepakrathore",
      instagram: "https://instagram.com/deepak_video",
      github: "https://github.com/deepakrathore",
    },
  };

  const skills = [
    {
      name: "Adobe Premiere Pro",
      level: 95,
      icon: <Edit className="w-5 h-5" />,
    },
    { name: "After Effects", level: 90, icon: <Zap className="w-5 h-5" /> },
    {
      name: "DaVinci Resolve",
      level: 85,
      icon: <Palette className="w-5 h-5" />,
    },
    {
      name: "Motion Graphics",
      level: 88,
      icon: <Sparkles className="w-5 h-5" />,
    },
    {
      name: "Color Grading",
      level: 82,
      icon: <MonitorPlay className="w-5 h-5" />,
    },
    { name: "Cinema 4D", level: 75, icon: <Cpu className="w-5 h-5" /> },
  ];

  const categories = [
    { id: "all", name: "All Projects", icon: <Film className="w-4 h-4" /> },
    { id: "commercial", name: "Commercial", icon: <Zap className="w-4 h-4" /> },
    {
      id: "creative",
      name: "Creative",
      icon: <Sparkles className="w-4 h-4" />,
    },
    { id: "music", name: "Music Videos", icon: <Play className="w-4 h-4" /> },
    {
      id: "social",
      name: "Social Media",
      icon: <Camera className="w-4 h-4" />,
    },
  ];

  // Sample projects with more attractive descriptions
  const projects = [
    {
      id: 1,
      title: "Neon Dreams - Brand Commercial",
      category: "commercial",
      duration: "00:45",
      views: "25K",
      date: "2024-03-15",
      description:
        "A cyberpunk-inspired commercial featuring holographic elements, dynamic transitions, and electrifying motion graphics that showcase futuristic brand identity.",
      client: "TechFlow Inc.",
      role: "Lead Editor & Motion Graphics",
      software: ["After Effects", "Premiere Pro", "Cinema 4D"],
      thumbnail:
        "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=600&h=400&fit=crop",
      videoUrl:
        "https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4",
      tags: ["Cyberpunk", "Motion Graphics", "Holographic", "Futuristic"],
      colors: ["from-cyan-500", "to-purple-600"],
    },
    {
      id: 2,
      title: "Urban Rhythm - Music Video",
      category: "music",
      duration: "03:42",
      views: "45K",
      date: "2024-02-28",
      description:
        "High-energy music video with synchronized beat drops, creative visual effects, and urban street aesthetics that perfectly complement the artist's style.",
      client: "Luna Sky (Artist)",
      role: "Creative Editor",
      software: ["Premiere Pro", "After Effects"],
      thumbnail:
        "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=600&h=400&fit=crop",
      videoUrl:
        "https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_2mb.mp4",
      tags: ["Music Video", "Beat Sync", "Urban", "Creative"],
      colors: ["from-orange-500", "to-pink-600"],
    },
    {
      id: 3,
      title: "Minimal Elegance - Fashion Promo",
      category: "creative",
      duration: "01:30",
      views: "32K",
      date: "2024-01-20",
      description:
        "Sleek and sophisticated fashion promo with clean transitions, elegant typography, and cinematic color grading that elevates brand luxury.",
      client: "Fashion Forward Brand",
      role: "Visual Storyteller",
      software: ["DaVinci Resolve", "Premiere Pro"],
      thumbnail:
        "https://images.unsplash.com/photo-1445205170230-053b83016050?w=600&h=400&fit=crop",
      videoUrl:
        "https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4",
      tags: ["Fashion", "Minimal", "Luxury", "Cinematic"],
      colors: ["from-gray-600", "to-gray-900"],
    },
    {
      id: 4,
      title: "Viral Trend - Social Media Campaign",
      category: "social",
      duration: "00:30",
      views: "78K",
      date: "2024-03-01",
      description:
        "Trendy social media content with quick cuts, vibrant colors, and engaging animations optimized for maximum shareability across platforms.",
      client: "Brand X",
      role: "Social Media Editor",
      software: ["Premiere Pro", "After Effects"],
      thumbnail:
        "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=600&h=400&fit=crop",
      videoUrl:
        "https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4",
      tags: ["Viral", "Trendy", "Social", "Engaging"],
      colors: ["from-green-500", "to-blue-600"],
    },
    {
      id: 5,
      title: "Retro Wave - Creative Short",
      category: "creative",
      duration: "02:15",
      views: "19K",
      date: "2024-02-10",
      description:
        "80s-inspired retro wave aesthetic with neon glows, vintage effects, and synthwave vibes that transport viewers to a nostalgic digital landscape.",
      client: "Personal Project",
      role: "Creative Director",
      software: ["After Effects", "Premiere Pro", "Photoshop"],
      thumbnail:
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop",
      videoUrl:
        "https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_2mb.mp4",
      tags: ["Retro", "Synthwave", "Neon", "80s"],
      colors: ["from-pink-500", "to-violet-600"],
    },
    {
      id: 6,
      title: "Dynamic Product Showcase",
      category: "commercial",
      duration: "01:45",
      views: "28K",
      date: "2024-01-05",
      description:
        "Product showcase with dynamic camera movements, sleek transitions, and premium lighting that highlights every detail with cinematic quality.",
      client: "Innovation Co.",
      role: "Product Visualizer",
      software: ["Cinema 4D", "After Effects", "Premiere Pro"],
      thumbnail:
        "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=600&h=400&fit=crop",
      videoUrl:
        "https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4",
      tags: ["Product", "Premium", "Dynamic", "Showcase"],
      colors: ["from-blue-600", "to-indigo-800"],
    },
  ];

  const filteredProjects =
    selectedCategory === "all"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  // Mouse movement effect
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const handleVideoModal = (project) => {
    setSelectedVideo(project);
    document.body.style.overflow = "hidden";
  };

  const closeVideoModal = () => {
    setSelectedVideo(null);
    document.body.style.overflow = "unset";
  };

  const VideoCard = ({ project, index }) => {
    return (
      <div
        className="group relative bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-700 overflow-hidden transform hover:-translate-y-4 hover:scale-105"
        style={{
          animationDelay: `${index * 100}ms`,
        }}
      >
        {/* Gradient overlay */}
        <div
          className={`absolute inset-0 bg-gradient-to-br ${project.colors[0]} ${project.colors[1]} opacity-0 group-hover:opacity-20 transition-opacity duration-500 z-10`}
        />

        <div className="relative overflow-hidden">
          <img
            src={project.thumbnail}
            alt={project.title}
            className="w-full h-72 object-cover group-hover:scale-110 transition-transform duration-700"
          />

          {/* Animated play button */}
          <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-500 flex items-center justify-center z-20">
            <button
              onClick={() => handleVideoModal(project)}
              className="opacity-0 group-hover:opacity-100 transform scale-50 group-hover:scale-100 transition-all duration-500 bg-gradient-to-r from-white to-gray-100 rounded-full p-6 shadow-2xl hover:shadow-3xl relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-full" />
              <Play className="w-10 h-10 text-gray-800 hover:text-white ml-1 relative z-10 transition-colors duration-300" />

              {/* Pulse effect */}
              <div className="absolute inset-0 bg-white rounded-full animate-ping opacity-20" />
            </button>
          </div>

          {/* Floating stats */}
          <div className="absolute top-6 left-6 flex flex-col gap-2">
            <span className="bg-black bg-opacity-80 backdrop-blur-sm text-white px-3 py-2 rounded-2xl text-sm font-semibold flex items-center gap-2 transform translate-x-[-100px] group-hover:translate-x-0 transition-transform duration-500">
              <Clock className="w-4 h-4" />
              {project.duration}
            </span>
            <span className="bg-black bg-opacity-80 backdrop-blur-sm text-white px-3 py-2 rounded-2xl text-sm font-semibold flex items-center gap-2 transform translate-x-[-100px] group-hover:translate-x-0 transition-transform duration-700">
              <Eye className="w-4 h-4" />
              {project.views}
            </span>
          </div>

          {/* Category badge */}
          <div className="absolute top-6 right-6">
            <span
              className={`bg-gradient-to-r ${project.colors[0]} ${project.colors[1]} text-white px-4 py-2 rounded-2xl text-sm font-bold shadow-lg transform translate-x-[100px] group-hover:translate-x-0 transition-transform duration-500`}
            >
              {categories.find((cat) => cat.id === project.category)?.name}
            </span>
          </div>
        </div>

        <div className="p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300">
            {project.title}
          </h3>

          <p className="text-gray-600 mb-6 line-clamp-3 leading-relaxed">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2 mb-6">
            {project.tags.slice(0, 3).map((tag, tagIndex) => (
              <span
                key={tagIndex}
                className="text-xs bg-gray-100 text-gray-700 px-3 py-2 rounded-full font-medium hover:bg-gray-200 transition-colors duration-200"
              >
                #{tag}
              </span>
            ))}
          </div>

          <div className="flex items-center justify-between">
            <div className="flex gap-2">
              {project.software.slice(0, 2).map((soft, softIndex) => (
                <span
                  key={softIndex}
                  className={`text-xs bg-gradient-to-r ${project.colors[0]} ${project.colors[1]} text-white px-3 py-2 rounded-lg font-medium shadow-md`}
                >
                  {soft}
                </span>
              ))}
            </div>

            <button
              onClick={() => handleVideoModal(project)}
              className="flex items-center gap-2 text-blue-600 hover:text-purple-600 font-semibold transition-colors duration-300 group/btn"
            >
              <span>View Project</span>
              <ExternalLink className="w-4 h-4 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform duration-300" />
            </button>
          </div>
        </div>

        {/* Hover glow effect */}
        <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
          <div
            className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${project.colors[0]} ${project.colors[1]} opacity-20 blur-xl`}
          />
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob" />
        <div className="absolute top-40 right-20 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000" />
        <div className="absolute -bottom-8 left-40 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000" />
      </div>

      {/* Custom cursor effect */}
      <div
        className="fixed w-6 h-6 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full pointer-events-none z-50 mix-blend-difference transition-transform duration-150 ease-out"
        style={{
          left: mousePosition.x - 12,
          top: mousePosition.y - 12,
          transform: `scale(${mousePosition.x > 0 ? 1 : 0})`,
        }}
      />

      {/* Header */}
      <header className="relative z-40 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 bg-opacity-20 backdrop-blur-lg border-b border-white border-opacity-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center space-x-4">
              <div className="w-14 h-14 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg transform hover:scale-110 transition-transform duration-300">
                <span className="text-white font-bold text-xl">DR</span>
              </div>
              <div>
                <h1 className="text-2xl font-bold text-white">
                  {portfolioData.name}
                </h1>
                <p className="text-gray-300 font-medium">
                  {portfolioData.title}
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <a
                href={`mailto:${portfolioData.email}`}
                className="p-3  bg-opacity-10 backdrop-blur-sm rounded-xl text-white hover:bg-opacity-20 transition-all duration-300 hover:scale-110"
              >
                <Mail className="w-6 h-6" />
              </a>
              <a
                href={portfolioData.social.linkedin}
                className="p-3  bg-opacity-10 backdrop-blur-sm rounded-xl text-white hover:bg-opacity-20 transition-all duration-300 hover:scale-110"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a
                href={portfolioData.social.instagram}
                className="p-3  bg-opacity-10 backdrop-blur-sm rounded-xl text-white hover:bg-opacity-20 transition-all duration-300 hover:scale-110"
              >
                <Instagram className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <div className="mb-8">
              <span className="inline-block px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full text-sm font-semibold mb-8 shadow-lg animate-pulse">
                ✨ Available for Exciting Projects
              </span>
            </div>

            <h1 className="text-6xl md:text-8xl font-black mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-200 to-purple-300 leading-tight">
              Creative Video
              <br />
              <span className="text-gradient bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent animate-pulse">
                Editor
              </span>
            </h1>

            <p className="text-xl md:text-2xl mb-12 text-gray-300 max-w-4xl mx-auto leading-relaxed font-light">
              {portfolioData.tagline}
            </p>

            <p className="text-lg mb-12 text-gray-400 max-w-3xl mx-auto leading-relaxed">
              {portfolioData.bio}
            </p>

            <div className="flex flex-wrap justify-center gap-6 mb-16">
              <button className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl font-semibold text-lg shadow-2xl hover:shadow-3xl transform hover:-translate-y-2 transition-all duration-300">
                <span className="flex items-center gap-3">
                  View My Work
                  <Sparkles className="w-5 h-5 group-hover:animate-spin" />
                </span>
              </button>
              <button className="px-8 py-4 bg-opacity-10 backdrop-blur-sm text-white rounded-2xl font-semibold text-lg border border-white border-opacity-20 hover:bg-opacity-20 transform hover:-translate-y-2 transition-all duration-300">
                Get In Touch
              </button>
            </div>
          </div>
        </div>

        {/* Floating video icons */}
        <div className="absolute top-20 left-10 animate-float">
          <Film className="w-12 h-12 text-blue-400 opacity-30" />
        </div>
        <div className="absolute top-40 right-20 animate-float animation-delay-2000">
          <Camera className="w-10 h-10 text-purple-400 opacity-30" />
        </div>
        <div className="absolute bottom-20 left-20 animate-float animation-delay-4000">
          <Edit className="w-8 h-8 text-pink-400 opacity-30" />
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-white mb-6">
              Skills & Expertise
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Mastering the tools that bring imagination to life
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skill, index) => (
              <div
                key={skill.name}
                className=" bg-opacity-10 backdrop-blur-lg rounded-3xl p-8 border border-white border-opacity-10 hover:bg-opacity-20 transition-all duration-500 group"
              >
                <div className="flex items-center mb-6">
                  <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl mr-4 group-hover:scale-110 transition-transform duration-300">
                    {skill.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white">{skill.name}</h3>
                </div>
                <div className="w-full bg-gray-300 rounded-full h-3 mb-4 overflow-hidden">
                  <div
                    key={index}
                    className="h-full bg-gradient-to-r from-blue-500 to-purple-600 rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
                <div className="text-right">
                  <span className="text-white font-semibold">
                    {skill.level}%
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-white mb-6">
              Featured Projects
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              A showcase of creative video editing that tells compelling stories
            </p>
          </div>

          {/* Enhanced Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`group px-6 py-4 rounded-2xl font-semibold transition-all duration-300 flex items-center gap-3 ${
                  selectedCategory === category.id
                    ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-2xl transform scale-110"
                    : " bg-opacity-10 backdrop-blur-sm text-gray-300 border border-white border-opacity-20hover:bg-opacity-20 hover:text-white hover:scale-105"
                }`}
              >
                {category.icon}
                {category.name}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <VideoCard key={project.id} project={project} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-white mb-6">
              Ready to Create Something
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
                Extraordinary?
              </span>
            </h2>
            <p className="text-xl text-gray-300">
              Let's bring your vision to life with stunning video content
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group  bg-opacity-10 backdrop-blur-lg p-8 rounded-3xl border border-white border-opacity-10 hover:bg-opacity-20 transition-all duration-500 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Email Me</h3>
              <a
                href={`mailto:${portfolioData.email}`}
                className="text-blue-400 hover:text-blue-300 transition-colors duration-300 font-medium"
              >
                {portfolioData.email}
              </a>
            </div>

            <div className="group  bg-opacity-10 backdrop-blur-lg p-8 rounded-3xl border border-white border-opacity-10 hover:bg-opacity-20 transition-all duration-500 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Phone className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Call Me</h3>
              <a
                href={`tel:${portfolioData.phone}`}
                className="text-green-400 hover:text-green-300 transition-colors duration-300 font-medium"
              >
                {portfolioData.phone}
              </a>
            </div>

            <div className="group  bg-opacity-10 backdrop-blur-lg p-8 rounded-3xl border border-white border-opacity-10 hover:bg-opacity-20 transition-all duration-500 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Location</h3>
              <p className="text-purple-400 font-medium">
                {portfolioData.location}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Video Modal - Enhanced */}
      {selectedVideo && (
        <div className="fixed inset-0 bg-black bg-opacity-95 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-gradient-to-br from-gray-900 to-black rounded-3xl max-w-6xl w-full max-h-[90vh] overflow-y-auto border border-gray-700 shadow-2xl">
            <div className="p-8">
              <div className="flex justify-between items-start mb-8">
                <div>
                  <h2 className="text-4xl font-bold text-white mb-4">
                    {selectedVideo.title}
                  </h2>
                  <p className="text-gray-300 text-lg leading-relaxed max-w-3xl">
                    {selectedVideo.description}
                  </p>
                </div>
                <button
                  onClick={closeVideoModal}
                  className="text-gray-400 hover:text-white text-3xl font-bold transition-colors duration-300 hover:scale-110 transform"
                >
                  ×
                </button>
              </div>

              {/* Video Player */}
              <div className="relative bg-black rounded-2xl overflow-hidden mb-8 shadow-2xl">
                <video
                  ref={(el) => (videoRefs.current[selectedVideo.id] = el)}
                  className="w-full aspect-video"
                  controls
                  poster={selectedVideo.thumbnail}
                >
                  <source src={selectedVideo.videoUrl} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>

              {/* Project Details */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                    <Sparkles className="w-6 h-6 text-blue-400" />
                    Project Details
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 bg-gray-800 bg-opacity-5 rounded-xl">
                      <span className="text-gray-400 flex items-center gap-2">
                        <User className="w-4 h-4" />
                        Client:
                      </span>
                      <span className="font-semibold text-white">
                        {selectedVideo.client}
                      </span>
                    </div>
                    <div className="flex items-center justify-between p-4 bg-gray-800 bg-opacity-5 rounded-xl">
                      <span className="text-gray-400 flex items-center gap-2">
                        <Award className="w-4 h-4" />
                        Role:
                      </span>
                      <span className="font-semibold text-white">
                        {selectedVideo.role}
                      </span>
                    </div>
                    <div className="flex items-center justify-between p-4 bg-gray-800 bg-opacity-5 rounded-xl">
                      <span className="text-gray-400 flex items-center gap-2">
                        <Clock className="w-4 h-4" />
                        Duration:
                      </span>
                      <span className="font-semibold text-white">
                        {selectedVideo.duration}
                      </span>
                    </div>
                    <div className="flex items-center justify-between p-4 bg-gray-800 bg-opacity-5 rounded-xl">
                      <span className="text-gray-400 flex items-center gap-2">
                        <Eye className="w-4 h-4" />
                        Views:
                      </span>
                      <span className="font-semibold text-white">
                        {selectedVideo.views}
                      </span>
                    </div>
                    <div className="flex items-center justify-between p-4 bg-gray-800 bg-opacity-5 rounded-xl">
                      <span className="text-gray-400 flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        Date:
                      </span>
                      <span className="font-semibold text-white">
                        {new Date(selectedVideo.date).toLocaleDateString()}
                      </span>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                    <Cpu className="w-6 h-6 text-purple-400" />
                    Software & Tags
                  </h3>

                  <div className="mb-8">
                    <h4 className="text-lg font-semibold text-gray-300 mb-4">
                      Software Used
                    </h4>
                    <div className="flex flex-wrap gap-3">
                      {selectedVideo.software.map((soft, index) => (
                        <span
                          key={index}
                          className={`bg-gradient-to-r ${selectedVideo.colors[0]} ${selectedVideo.colors[1]} text-white px-4 py-2 rounded-xl text-sm font-semibold shadow-lg`}
                        >
                          {soft}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-gray-300 mb-4">
                      Project Tags
                    </h4>
                    <div className="flex flex-wrap gap-3">
                      {selectedVideo.tags.map((tag, index) => (
                        <span
                          key={index}
                          className="bg-gray-800 bg-opacity-10 text-gray-300 px-4 py-2 rounded-xl text-sm font-medium border border-white border-opacity-20"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 bg-opacity-30 backdrop-blur-lg border-t border-white border-opacity-10 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-2xl">
              <span className="text-white font-bold text-3xl">DR</span>
            </div>
            <h3 className="text-3xl font-bold text-white mb-4">
              {portfolioData.name}
            </h3>
            <p className="text-gray-300 text-lg mb-8">{portfolioData.title}</p>
            <div className="flex justify-center space-x-6 mb-8">
              <a
                href={portfolioData.social.linkedin}
                className="p-4 bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl text-blue-400 hover:text-blue-300 hover:bg-opacity-20 transition-all duration-300 hover:scale-110"
              >
                <Linkedin className="w-8 h-8" />
              </a>
              <a
                href={portfolioData.social.instagram}
                className="p-4 bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl text-pink-400 hover:text-pink-300 hover:bg-opacity-20 transition-all duration-300 hover:scale-110"
              >
                <Instagram className="w-8 h-8" />
              </a>
              <a
                href={portfolioData.social.github}
                className="p-4 bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl text-gray-400 hover:text-gray-300 hover:bg-opacity-20 transition-all duration-300 hover:scale-110"
              >
                <Github className="w-8 h-8" />
              </a>
            </div>
            <div className="pt-8 border-t border-white border-opacity-10">
              <p className="text-gray-400 text-lg">
                © 2024 {portfolioData.name}. Crafted with passion and
                creativity.
              </p>
            </div>
          </div>
        </div>
      </footer>

      <style jsx>{`
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }

        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        .animate-blob {
          animation: blob 7s infinite;
        }

        .animation-delay-2000 {
          animation-delay: 2s;
        }

        .animation-delay-4000 {
          animation-delay: 4s;
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
};

export default VideoEditorPortfolio;
