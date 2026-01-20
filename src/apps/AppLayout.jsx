import Navbar from "@/components/Navbar";
import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";


export default function AppLayout({ children }) {
  return (
    <SidebarProvider>
      <div className="flex flex-col h-screen w-full bg-background transition-colors duration-300 overflow-hidden">
        {/* Navbar - Fixed at top */}
        <header className="h-[70px] w-full shrink-0 border-b border-border bg-background/95 backdrop-blur z-50">
          <Navbar />
        </header>

        <div className="flex flex-1 h-[calc(100vh-70px)] overflow-hidden">
          {/* Sidebar - Fixed, no scroll */}
          <AppSidebar />
          
          {/* Main Content Area - Only this scrolls */}
          <SidebarInset className="flex flex-col flex-1 overflow-y-auto bg-slate-50/30 dark:bg-zinc-950/50">
            <main className="p-4 md:p-8">
              <div className="mx-auto max-w-7xl w-full">
                {children }
              </div>
            </main>
          </SidebarInset>
        </div>
      </div>
    </SidebarProvider>
  );
}