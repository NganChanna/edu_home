import React, { useState } from 'react';
import { Download, Share2, BookOpen, Code, Database, Calculator, Globe, Cpu, Star, Clock, TrendingUp, MoreVertical, Trash2, FolderOpen } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const DocumentCard = ({ title, subject, lastOpened, progress, rating, image, gradient, isFavorite }) => {
  const [isStarred, setIsStarred] = useState(isFavorite);
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="relative group rounded-2xl overflow-hidden bg-slate-700/50 dark:bg-slate-800/50 backdrop-blur-md border border-slate-600/50 hover:scale-105 hover:border-slate-500/70 transition-all duration-300 cursor-pointer">
      <div className={`h-48 ${gradient} flex items-center justify-center p-6 relative`}>
        <img src={image} alt={title} className="w-full h-full object-cover rounded-lg" />
        
        {/* Progress bar overlay */}
        <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-slate-900/50">
          <div 
            className="h-full bg-gradient-to-r from-blue-500 to-purple-500 transition-all"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
      
      <div className="p-4 space-y-2 bg-slate-800/80 backdrop-blur-sm">
        <div className="flex items-start justify-between gap-2">
          <h3 className="text-white font-semibold text-lg line-clamp-2 flex-1">{title}</h3>
          <button 
            onClick={(e) => {
              e.stopPropagation();
              setShowMenu(!showMenu);
            }}
            className="p-1.5 hover:bg-slate-600/50 rounded-lg transition-colors"
          >
            <MoreVertical className="w-4 h-4 text-slate-400" />
          </button>
        </div>
        
        <p className="text-slate-400 text-sm">{subject}</p>
        
        <div className="flex items-center justify-between pt-2">
          <div className="flex items-center gap-3 text-slate-400 text-sm">
            <div className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" />
              <span>{lastOpened}</span>
            </div>
            <div className="flex items-center gap-1">
              <TrendingUp className="w-3.5 h-3.5" />
              <span>{progress}%</span>
            </div>
          </div>
          
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
        </div>
      </div>

      {/* Dropdown Menu */}
      {showMenu && (
        <div className="absolute top-14 right-4 z-10 bg-slate-800/95 backdrop-blur-md border border-slate-600/50 rounded-lg shadow-xl min-w-[160px] overflow-hidden">
          <button className="w-full px-4 py-2.5 text-left text-sm text-white hover:bg-slate-700/70 transition-colors flex items-center gap-2">
            <Download className="w-4 h-4" />
            Download
          </button>
          <button className="w-full px-4 py-2.5 text-left text-sm text-white hover:bg-slate-700/70 transition-colors flex items-center gap-2">
            <Share2 className="w-4 h-4" />
            Share
          </button>
          
          <div className="border-t border-slate-600/50"></div>
          <button className="w-full px-4 py-2.5 text-left text-sm text-red-400 hover:bg-slate-700/70 transition-colors flex items-center gap-2">
            <Trash2 className="w-4 h-4" />
            Delete
          </button>
        </div>
      )}
    </div>
  );
};

const SubjectCard = ({ icon: Icon, title, count, color, id }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/subject/${id}`);
  };

  return (
    <div 
      onClick={handleClick}
      className={`${color} rounded-2xl p-6 hover:scale-105 transition-transform duration-300 cursor-pointer`}
    >
      <Icon className="w-12 h-12 text-white mb-4" />
      <h3 className="text-white font-semibold text-lg mb-1">{title}</h3>
      <p className="text-white/80 text-sm">{count} courses</p>
    </div>
  );
};

export default function MainContent() {
  const trendingDocs = [
    {
      title: "Data Structures & Algorithms",
      subject: "Computer Science",
      lastOpened: "3 days ago",
      progress: 0,
      rating: 4.9,
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=300&fit=crop",
      gradient: "bg-gray",
      isFavorite: false
    },
    {
      title: "Data Structures & Algorithms",
      subject: "Computer Science",
      lastOpened: "3 days ago",
      progress: 0,
      rating: 4.9,
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=300&fit=crop",
      gradient: "bg-gray",
      isFavorite: false
    },
    {
      title: "Data Structures & Algorithms",
      subject: "Computer Science",
      lastOpened: "3 days ago",
      progress: 0,
      rating: 4.9,
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=300&fit=crop",
      gradient: "bg-gray",
      isFavorite: false
    },
     {
      title: "Data Structures & Algorithms",
      subject: "Computer Science",
      lastOpened: "3 days ago",
      progress: 0,
      rating: 4.9,
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=300&fit=crop",
      gradient: "bg-gray",
      isFavorite: false
    },
     {
      title: "Data Structures & Algorithms",
      subject: "Computer Science",
      lastOpened: "3 days ago",
      progress: 0,
      rating: 4.9,
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=300&fit=crop",
      gradient: "bg-gray",
      isFavorite: false
    }
  ];

  const subjects = [
    { id: 'mathematics', icon: Calculator, title: "Mathematics", count: 24, color: "bg-gradient-to-br from-purple-500 to-pink-500" },
    { id: 'programming', icon: Code, title: "Programming", count: 18, color: "bg-gradient-to-br from-blue-500 to-cyan-500" },
    { id: 'database', icon: Database, title: "Database", count: 15, color: "bg-gradient-to-br from-green-500 to-teal-500" },
    { id: 'web-development', icon: Globe, title: "Web Development", count: 21, color: "bg-gradient-to-br from-orange-500 to-red-500" },
    { id: 'computer-science', icon: Cpu, title: "Computer Science", count: 19, color: "bg-gradient-to-br from-indigo-500 to-purple-500" },
    { id: 'literature', icon: BookOpen, title: "Literature", count: 12, color: "bg-gradient-to-br from-pink-500 to-rose-500" }
  ];

  return (
    <div className="space-y-8">
      {/* Welcome Section */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-foreground mb-2">
          Welcome back, Ronaldo
        </h1>
        <p className="text-xl text-muted-foreground">
          What you Want study Today?
        </p>
      </div>

      {/* Trending Documents */}
      <div>
        <div className="flex items-center gap-2 mb-6">
          <div className="h-1 w-1 bg-orange-500 rounded-full"></div>
          <h2 className="text-2xl font-bold text-foreground">Trending Documents</h2>
        </div>
        <div className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide">
          {trendingDocs.map((doc, index) => (
            <div key={index} className="flex-none w-75">
              <DocumentCard {...doc} />
            </div>
          ))}
        </div>
      </div>

      {/* Browse by Subject */}
      <div className="pb-8">
        <div className="flex items-center gap-2 mb-6">
          <div className="h-1 w-1 bg-orange-500 rounded-full"></div>
          <h2 className="text-2xl font-bold text-foreground">Browse by Subject</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {subjects.map((subject, index) => (
            <SubjectCard key={index} {...subject} />
          ))}
        </div>
      </div>
    </div>
  );
}