import React, { useState } from 'react';
import { ArrowLeft, Star, Clock, BookOpen, Users, Filter, Search, Download, Share2 } from 'lucide-react';

const CourseCard = ({ title, instructor, duration, students, rating, image, level, category }) => {
  const [isStarred, setIsStarred] = useState(false);

  return (
    <div className="relative group rounded-2xl overflow-hidden bg-slate-700/50 dark:bg-slate-800/50 backdrop-blur-md border border-slate-600/50 hover:scale-105 hover:border-slate-500/70 transition-all duration-300 cursor-pointer">
      <div className="relative h-48 bg-gradient-to-br from-blue-500/20 to-purple-600/20 backdrop-blur-sm border-b border-blue-500/30">
        <img src={image} alt={title} className="w-full h-full object-cover" />
        <div className="absolute top-3 left-3">
          <span className="px-3 py-1 rounded-full text-xs font-semibold bg-slate-900/80 backdrop-blur-sm text-white border border-slate-600/50">
            {level}
          </span>
        </div>
        <div className="absolute top-3 right-3">
          <span className="px-3 py-1 rounded-full text-xs font-semibold bg-blue-500/80 backdrop-blur-sm text-white border border-blue-400/50">
            {category}
          </span>
        </div>
      </div>
      
      <div className="p-5 space-y-3 bg-slate-800/80 backdrop-blur-sm">
        <h3 className="text-white font-semibold text-lg line-clamp-2 min-h-[3.5rem]">{title}</h3>
        
        <p className="text-slate-400 text-sm">By {instructor}</p>
        
        <div className="flex items-center gap-4 text-slate-400 text-sm">
          <div className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            <span>{duration}</span>
          </div>
          <div className="flex items-center gap-1">
            <Users className="w-4 h-4" />
            <span>{students}</span>
          </div>
        </div>

        <div className="flex items-center justify-between pt-2 border-t border-slate-600/50">
          <div className="flex items-center gap-1">
            <Star className="w-4 h-4 fill-yellow-500 text-yellow-500" />
            <span className="text-white font-semibold">{rating}</span>
            <span className="text-slate-400 text-sm">(4.5k)</span>
          </div>
          
          <div className="flex gap-2">
            <button 
              onClick={(e) => {
                e.stopPropagation();
                setIsStarred(!isStarred);
              }}
              className="p-2 bg-slate-600/50 hover:bg-slate-500/70 backdrop-blur-sm rounded-lg transition-colors border border-slate-500/30"
            >
              <Star 
                className={`w-4 h-4 transition-colors ${
                  isStarred ? 'fill-yellow-500 text-yellow-500' : 'text-white'
                }`} 
              />
            </button>
            <button className="p-2 bg-slate-600/50 hover:bg-slate-500/70 backdrop-blur-sm rounded-lg transition-colors border border-slate-500/30">
              <Share2 className="w-4 h-4 text-white" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function SubjectCoursesPage() {
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const courses = [
    {
      title: "Introduction to Programming with Python",
      instructor: "Dr. Sarah Johnson",
      duration: "8 weeks",
      students: "12.5k",
      rating: "4.8",
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=400&h=300&fit=crop",
      level: "Beginner",
      category: "Programming"
    },
    {
      title: "Advanced JavaScript & React Development",
      instructor: "Mike Chen",
      duration: "12 weeks",
      students: "8.2k",
      rating: "4.9",
      image: "https://images.unsplash.com/photo-1593720213428-28a5b9e94613?w=400&h=300&fit=crop",
      level: "Advanced",
      category: "Web Dev"
    },
    {
      title: "Data Structures and Algorithms Mastery",
      instructor: "Prof. James Wilson",
      duration: "10 weeks",
      students: "15.3k",
      rating: "4.7",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=300&fit=crop",
      level: "Intermediate",
      category: "Computer Science"
    },
    {
      title: "Full Stack Web Development Bootcamp",
      instructor: "Emily Rodriguez",
      duration: "16 weeks",
      students: "9.8k",
      rating: "4.9",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=300&fit=crop",
      level: "Intermediate",
      category: "Web Dev"
    },
    {
      title: "Machine Learning Fundamentals",
      instructor: "Dr. Alex Kumar",
      duration: "14 weeks",
      students: "11.2k",
      rating: "4.8",
      image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=400&h=300&fit=crop",
      level: "Advanced",
      category: "AI/ML"
    },
    {
      title: "Mobile App Development with React Native",
      instructor: "Lisa Park",
      duration: "10 weeks",
      students: "7.5k",
      rating: "4.6",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=300&fit=crop",
      level: "Intermediate",
      category: "Mobile Dev"
    },
    {
      title: "Database Design and SQL Mastery",
      instructor: "Robert Martinez",
      duration: "8 weeks",
      students: "10.1k",
      rating: "4.7",
      image: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=400&h=300&fit=crop",
      level: "Beginner",
      category: "Database"
    },
    {
      title: "Cybersecurity Essentials",
      instructor: "Dr. Rachel Green",
      duration: "12 weeks",
      students: "6.8k",
      rating: "4.9",
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=400&h=300&fit=crop",
      level: "Intermediate",
      category: "Security"
    },
    {
      title: "Cloud Computing with AWS",
      instructor: "David Thompson",
      duration: "10 weeks",
      students: "13.4k",
      rating: "4.8",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=300&fit=crop",
      level: "Advanced",
      category: "Cloud"
    }
  ];

  const filters = [
    { id: 'all', label: 'All Courses' },
    { id: 'beginner', label: 'Beginner' },
    { id: 'intermediate', label: 'Intermediate' },
    { id: 'advanced', label: 'Advanced' }
  ];

  return (
    <div className="space-y-8">
      {/* Header Section */}
      <div className="flex items-center gap-4 mb-6">
        <button className="p-2 rounded-lg bg-slate-700/50 backdrop-blur-md border border-slate-600/50 hover:bg-slate-600/70 transition-colors">
          <ArrowLeft className="w-5 h-5 text-white" />
        </button>
        <div>
          <h1 className="text-3xl font-bold text-foreground">Programming Courses</h1>
          <p className="text-muted-foreground mt-1">Explore {courses.length} courses to master programming</p>
        </div>
      </div>

      {/* Search and Filter Section */}
      <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
        {/* Search Bar */}
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Search courses..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-slate-700/50 backdrop-blur-md border border-slate-600/50 rounded-xl pl-10 pr-4 py-3 text-white placeholder-slate-400 outline-none focus:border-blue-500/50 transition-colors"
          />
        </div>

        {/* Filter Buttons */}
        <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setSelectedFilter(filter.id)}
              className={`px-4 py-2 rounded-lg backdrop-blur-md border transition-all whitespace-nowrap ${
                selectedFilter === filter.id
                  ? 'bg-blue-500/80 border-blue-400/50 text-white'
                  : 'bg-slate-700/50 border-slate-600/50 text-slate-300 hover:bg-slate-600/70'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>
      </div>

      {/* Stats Section */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-gradient-to-br from-blue-500/20 to-purple-600/20 backdrop-blur-md border border-blue-500/30 rounded-xl p-6">
          <BookOpen className="w-8 h-8 text-blue-400 mb-2" />
          <h3 className="text-2xl font-bold text-white">{courses.length}</h3>
          <p className="text-slate-300 text-sm">Total Courses</p>
        </div>
        <div className="bg-gradient-to-br from-green-500/20 to-teal-600/20 backdrop-blur-md border border-green-500/30 rounded-xl p-6">
          <Users className="w-8 h-8 text-green-400 mb-2" />
          <h3 className="text-2xl font-bold text-white">95.4k</h3>
          <p className="text-slate-300 text-sm">Students Enrolled</p>
        </div>
        <div className="bg-gradient-to-br from-yellow-500/20 to-orange-600/20 backdrop-blur-md border border-yellow-500/30 rounded-xl p-6">
          <Star className="w-8 h-8 text-yellow-400 mb-2" />
          <h3 className="text-2xl font-bold text-white">4.8</h3>
          <p className="text-slate-300 text-sm">Average Rating</p>
        </div>
        <div className="bg-gradient-to-br from-pink-500/20 to-rose-600/20 backdrop-blur-md border border-pink-500/30 rounded-xl p-6">
          <Clock className="w-8 h-8 text-pink-400 mb-2" />
          <h3 className="text-2xl font-bold text-white">120+</h3>
          <p className="text-slate-300 text-sm">Hours of Content</p>
        </div>
      </div>

      {/* Courses Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((course, index) => (
          <CourseCard key={index} {...course} />
        ))}
      </div>
    </div>
  );
}