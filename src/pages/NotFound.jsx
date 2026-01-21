import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Home, ArrowLeft, Rocket, Map } from 'lucide-react';

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="relative flex items-center justify-center min-h-screen bg-slate-950 overflow-hidden text-slate-200">
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-indigo-900/20 blur-[120px] animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-blue-900/20 blur-[120px] animate-pulse delay-700" />
        {/* Subtle Grid Pattern */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150"></div>
      </div>

      <div className="relative z-10 flex flex-col items-center px-6 text-center">
        {/* Icon/Illustration Area */}
        <div className="relative mb-8">
          <div className="absolute inset-0 scale-150 bg-indigo-500/10 blur-3xl rounded-full"></div>
          <Rocket className="relative w-24 h-24 text-indigo-400 animate-bounce duration-[3s]" />
        </div>

        {/* Text Content */}
        <h1 className="text-9xl font-extrabold tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-slate-100 to-slate-500">
          404
        </h1>
        
        <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Lost in Space?
        </h2>
        
        <p className="max-w-md mt-4 text-lg leading-7 text-slate-400">
          The page you are looking for has drifted out of orbit. It might have been moved, deleted, or never existed in this dimension.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col items-center gap-4 mt-10 sm:flex-row">
          <Button 
            onClick={() => navigate(-1)} 
            variant="outline" 
            className="w-full h-12 gap-2 border-slate-700 bg-slate-900/50 hover:bg-slate-800 hover:text-white sm:w-auto"
          >
            <ArrowLeft className="w-4 h-4" />
            Go Back
          </Button>

          <Button 
            onClick={() => navigate('/')} 
            className="w-full h-12 gap-2 bg-indigo-600 shadow-lg shadow-indigo-500/20 hover:bg-indigo-500 sm:w-auto"
          >
            <Home className="w-4 h-4" />
            Return Home
          </Button>
        </div>

        {/* Bottom Decorative Link */}
        <button 
          onClick={() => window.open('mailto:support@edu-home.com')}
          className="flex items-center gap-2 mt-12 text-sm font-medium transition-colors text-slate-500 hover:text-indigo-400"
        >
          <Map className="w-4 h-4" />
          Report a broken link
        </button>
      </div>

      {/* Footer Branding */}
      <div className="absolute bottom-8 left-0 right-0 text-center text-xs text-slate-600 tracking-widest uppercase">
        © 2026 Edu-Home Orbital Operations
      </div>
    </div>
  );
};

export default NotFound;