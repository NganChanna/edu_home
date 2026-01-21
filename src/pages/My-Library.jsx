import React, { useState } from 'react';
import { 
  BookOpen, Clock, Star, MoreVertical, Search, Filter, 
  Grid3x3, List, Download, Share2, Trash2, FolderOpen,
  TrendingUp, Calendar, BookMarked, FileText
} from 'lucide-react';

function DocumentCard({ title, subject, lastOpened, progress, rating, image, gradient, isFavorite }) {
  const [starred, setStarred] = useState(isFavorite);
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
              setStarred(!starred);
            }}
            className="p-2 bg-slate-600/50 hover:bg-slate-500/70 backdrop-blur-sm rounded-lg transition-colors border border-slate-500/30"
          >
            <Star 
              className={`w-4 h-4 transition-colors ${
                starred ? 'fill-yellow-500 text-yellow-500' : 'text-white'
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
}

function ListViewCard({ title, subject, lastOpened, progress, rating, isFavorite }) {
  const [starred, setStarred] = useState(isFavorite);

  return (
    <div className="bg-slate-700/50 dark:bg-slate-800/50 backdrop-blur-md border border-slate-600/50 hover:border-slate-500/70 rounded-xl p-4 transition-all cursor-pointer">
      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-4 flex-1">
          <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500/20 to-purple-600/20 backdrop-blur-sm border border-blue-500/30 flex items-center justify-center">
            <FileText className="w-6 h-6 text-blue-400" />
          </div>
          
          <div className="flex-1 min-w-0">
            <h3 className="text-white font-semibold truncate">{title}</h3>
            <p className="text-slate-400 text-sm">{subject}</p>
          </div>
        </div>

        <div className="flex items-center gap-6">
          <div className="text-sm text-slate-400 hidden md:block">
            <Clock className="w-4 h-4 inline mr-1" />
            {lastOpened}
          </div>
          
          <div className="hidden md:block">
            <div className="flex items-center gap-2">
              <div className="w-32 h-2 bg-slate-700 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-blue-500 to-purple-500"
                  style={{ width: `${progress}%` }}
                />
              </div>
              <span className="text-sm text-slate-400 w-12">{progress}%</span>
            </div>
          </div>

          <button 
            onClick={(e) => {
              e.stopPropagation();
              setStarred(!starred);
            }}
            className="p-2 bg-slate-600/50 hover:bg-slate-500/70 backdrop-blur-sm rounded-lg transition-colors border border-slate-500/30"
          >
            <Star 
              className={`w-4 h-4 transition-colors ${
                starred ? 'fill-yellow-500 text-yellow-500' : 'text-white'
              }`} 
            />
          </button>
        </div>
      </div>
    </div>
  );
}

export default function MyLibraryPage() {
  const [viewMode, setViewMode] = useState('grid');
  const [selectedTab, setSelectedTab] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const tabs = [
    { id: 'all', label: 'All Documents', icon: BookOpen },
    { id: 'favorites', label: 'Favorites', icon: Star },
    { id: 'recent', label: 'Recent', icon: Clock },
  ];

  const documents = [
    {
      title: "Calculus & Linear Algebra Complete",
      subject: "Mathematics",
      lastOpened: "2 hours ago",
      progress: 75,
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=400&h=300&fit=crop",
      gradient: "bg-gray",
      isFavorite: true
    },
    {
      title: "Python Programming Complete Guide",
      subject: "Programming",
      lastOpened: "5 hours ago",
      progress: 60,
      rating: 4.9,
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=300&fit=crop",
      gradient: "bg-gray",
      isFavorite: true
    },
    {
      title: "Database Management Systems",
      subject: "Computer Science",
      lastOpened: "1 day ago",
      progress: 45,
      rating: 4.7,
      image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=400&h=300&fit=crop",
      gradient: "bg-gray",
      isFavorite: false
    },
    {
      title: "Web Development Fundamentals",
      subject: "Web Development",
      lastOpened: "2 days ago",
      progress: 90,
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=300&fit=crop",
      gradient: "bg-gray",
      isFavorite: true
    },
    {
      title: "Data Structures & Algorithms",
      subject: "Computer Science",
      lastOpened: "3 days ago",
      progress: 30,
      rating: 4.9,
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=300&fit=crop",
      gradient: "bg-gray",
      isFavorite: false
    },
    {
      title: "Machine Learning Basics Complete",
      subject: "Artificial Intelligence",
      lastOpened: "1 week ago",
      progress: 15,
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=400&h=300&fit=crop",
      gradient: "bg-gray",
      isFavorite: false
    }
  ];

  const stats = [
    { label: 'Total Documents', value: documents.length, icon: BookMarked, color: 'from-blue-500/20 to-purple-600/20 border-blue-500/30', iconColor: 'text-blue-400' },
    { label: 'In Progress', value: documents.filter(d => d.progress > 0 && d.progress < 100).length, icon: TrendingUp, color: 'from-green-500/20 to-teal-600/20 border-green-500/30', iconColor: 'text-green-400' },
    { label: 'Completed', value: documents.filter(d => d.progress === 100).length, icon: BookOpen, color: 'from-yellow-500/20 to-orange-600/20 border-yellow-500/30', iconColor: 'text-yellow-400' },
    { label: 'Favorites', value: documents.filter(d => d.isFavorite).length, icon: Star, color: 'from-pink-500/20 to-rose-600/20 border-pink-500/30', iconColor: 'text-pink-400' }
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-foreground">My Library</h1>
          <p className="text-muted-foreground mt-1">Manage and access all your learning materials</p>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {stats.map((stat, index) => (
          <div 
            key={index}
            className={`bg-gradient-to-br ${stat.color} backdrop-blur-md border rounded-xl p-4 md:p-6`}
          >
            <stat.icon className={`w-6 h-6 md:w-8 md:h-8 ${stat.iconColor} mb-2`} />
            <h3 className="text-xl md:text-2xl font-bold text-white">{stat.value}</h3>
            <p className="text-slate-300 text-xs md:text-sm">{stat.label}</p>
          </div>
        ))}
      </div>

      {/* Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-hide">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setSelectedTab(tab.id)}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-lg backdrop-blur-md border transition-all whitespace-nowrap ${
              selectedTab === tab.id
                ? 'bg-blue-500/80 border-blue-400/50 text-white'
                : 'bg-slate-700/50 border-slate-600/50 text-slate-300 hover:bg-slate-600/70'
            }`}
          >
            <tab.icon className="w-4 h-4" />
            {tab.label}
          </button>
        ))}
      </div>

      {/* Search and View Controls */}
      <div className="flex flex-col md:flex-row gap-4 items-stretch md:items-center justify-between">
        {/* Search Bar */}
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Search documents..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-slate-700/50 backdrop-blur-md  rounded-xl pl-10 pr-4 py-3 text-white placeholder-slate-400 outline-none focus:border-blue-500/50 transition-colors"
          />
        </div>

        {/* View Controls */}
        <div className="flex items-center gap-2">
          
          
          <div className="flex bg-slate-700/50 backdrop-blur-md border border-slate-600/50 rounded-lg p-1">
            <button
              onClick={() => setViewMode('grid')}
              className={`p-2 rounded transition-colors ${
                viewMode === 'grid' 
                  ? 'bg-blue-500/80 text-white' 
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Grid3x3 className="w-5 h-5" />
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={`p-2 rounded transition-colors ${
                viewMode === 'list' 
                  ? 'bg-blue-500/80 text-white' 
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <List className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Documents Grid/List */}
      {viewMode === 'grid' ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {documents.map((doc, index) => (
            <DocumentCard key={index} {...doc} />
          ))}
        </div>
      ) : (
        <div className="space-y-3">
          {documents.map((doc, index) => (
            <ListViewCard key={index} {...doc} />
          ))}
        </div>
      )}
    </div>
  );
}