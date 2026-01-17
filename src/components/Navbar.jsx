import React, { useState } from "react";
import { Bell, Search, X, Menu } from "lucide-react";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { useIsMobile } from "@/hooks/useIsMobile";
import ThemeToggle from "./themeToggle";

const Navbar = () => {
  const isMobile = useIsMobile();
  const [openSearch, setOpenSearch] = useState(false);

  return (
    <nav className="w-full h-full bg-background border-b px-4 md:px-6 flex items-center justify-between transition-colors">
      {/* Left Section */}
      <div className="flex items-center gap-4">
        {/* Toggle button for the sidebar */}
        <SidebarTrigger className="hover:bg-accent p-2 rounded-md" />

        <div className="flex items-center gap-2">
          <div className="flex items-center justify-center">
            <img
              src="./scr/images/logo.png"
              alt="logo"
              className="w-6 h-6 object-contain"
            />
          </div>
         
          <h1 className="text-foreground text-lg font-bold tracking-tight hidden sm:block">
            Edu Home
          </h1>
        </div>
      </div>

      {/* Center: Search (Desktop) */}
      {!isMobile && (
        <div className="flex-1 max-w-md mx-8">
          <div className="relative group">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground size-4 group-focus-within:text-primary transition-colors" />
            <input
              type="text"
              placeholder="Find course..."
              className="w-full bg-muted/50 border border-transparent focus:border-primary/20 focus:bg-background rounded-full pl-10 pr-4 py-2 text-sm outline-none transition-all"
            />
          </div>
        </div>
      )}

      {/* Right Section */}
      <div className="flex items-center gap-2">
        {isMobile && (
          <button
            onClick={() => setOpenSearch(!openSearch)}
            className="p-2 rounded-full hover:bg-accent"
          >
            {openSearch ? <X size={20} /> : <Search size={20} />}
          </button>
        )}

        <ThemeToggle />

        <button className="relative p-2 rounded-full hover:bg-accent transition-colors">
          <Bell size={20} />
          <span className="absolute top-2 right-2.5 w-2 h-2 bg-red-500 rounded-full border-2 border-background"></span>
        </button>

        <div className="h-8 w-[1px] bg-border mx-2 hidden md:block" />

        <img
          src="https://i.pravatar.cc/40?img=12"
          alt="profile"
          className="w-9 h-9 rounded-full border border-border cursor-pointer hover:opacity-80 transition-opacity"
        />
      </div>

      {/* Mobile Search Overlay */}
      {isMobile && openSearch && (
        <div className="absolute top-[70px] left-0 w-full bg-background border-b p-4 z-[60] animate-in slide-in-from-top-2">
          <div className="flex items-center gap-2 bg-muted px-4 py-2 rounded-lg">
            <Search size={18} className="text-muted-foreground" />
            <input
              autoFocus
              type="text"
              placeholder="Search..."
              className="w-full bg-transparent outline-none text-sm"
            />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
