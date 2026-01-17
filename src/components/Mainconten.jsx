import React, { useState } from 'react';
import { Download, Share2, BookOpen, Code, Database, Calculator, Globe, Cpu, Star } from 'lucide-react';

const DocumentCard = ({ title, author, views, image, gradient }) => {
  const [isStarred, setIsStarred] = useState(false);

  return (
    <div className="relative group rounded-2xl overflow-hidden bg-slate-700 dark:bg-slate-800 hover:scale-105 transition-transform duration-300 cursor-pointer">
      <div className={`h-50 ${gradient} flex items-center justify-center p-6`}>
        <img src={image} alt={title} className="w-full h-full object-cover rounded-lg" />
      </div>
      <div className="p-4 space-y-2">
        <h3 className="text-white font-semibold text-lg">{title}</h3>
        <p className="text-slate-400 text-sm">By {author}</p>
        <div className="flex items-center justify-between pt-2">
          <span className="text-slate-400 text-sm">{views} views</span>
          <div className="flex gap-2">
            <button 
              onClick={() => setIsStarred(!isStarred)}
              className="p-2 bg-slate-600 hover:bg-slate-500 rounded-lg transition-colors"
            >
              <Star 
                className={`w-4 h-4 transition-colors ${
                  isStarred ? 'fill-yellow-500 text-yellow-500' : 'text-white'
                }`} 
              />
            </button>
            <button className="p-2 bg-slate-600 hover:bg-slate-500 rounded-lg transition-colors">
              <Share2 className="w-4 h-4 text-white" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const SubjectCard = ({ icon: Icon, title, count, color }) => (
  <div className={`${color} rounded-2xl p-6 hover:scale-105 transition-transform duration-300 cursor-pointer`}>
    <Icon className="w-12 h-12 text-white mb-4" />
    <h3 className="text-white font-semibold text-lg mb-1">{title}</h3>
    <p className="text-white/80 text-sm">{count} courses</p>
  </div>
);

export default function MainContent() {
  const trendingDocs = [
    {
      title: "Math & QCM",
      author: "Tang",
      views: "1.9K",
      image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=400&h=300&fit=crop",
      gradient: "bg-gray"
    },
    {
      title: "Vibs-coder",
      author: "Tang",
      views: "1.9K",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=300&fit=crop",
      gradient: "bg-gradient-to-br from-blue-500 to-purple-600"
    },
    {
      title: "IT & Database",
      author: "Tang",
      views: "1.9K",
      image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=400&h=300&fit=crop",
      gradient: "bg-gradient-to-br from-cyan-400 to-blue-500"
    }
    ,
    {
      title: "IT & Database",
      author: "Tang",
      views: "1.9K",
      image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=400&h=300&fit=crop",
      gradient: "bg-gradient-to-br from-cyan-400 to-blue-500"
    }
    ,
    {
      title: "IT & Database",
      author: "Tang",
      views: "1.9K",
      image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=400&h=300&fit=crop",
      gradient: "bg-gradient-to-br from-cyan-400 to-blue-500"
    }
  ];

  const subjects = [
    { icon: Calculator, title: "Mathematics", count: 24, color: "bg-gradient-to-br from-purple-500 to-pink-500" },
    { icon: Code, title: "Programming", count: 18, color: "bg-gradient-to-br from-blue-500 to-cyan-500" },
    { icon: Database, title: "Database", count: 15, color: "bg-gradient-to-br from-green-500 to-teal-500" },
    { icon: Globe, title: "Web Development", count: 21, color: "bg-gradient-to-br from-orange-500 to-red-500" },
    { icon: Cpu, title: "Computer Science", count: 19, color: "bg-gradient-to-br from-indigo-500 to-purple-500" },
    { icon: BookOpen, title: "Literature", count: 12, color: "bg-gradient-to-br from-pink-500 to-rose-500" }
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
            <div key={index} className="flex-none w-73">
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