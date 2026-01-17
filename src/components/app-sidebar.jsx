import { Calendar, Home, Inbox, Search, Settings, LogOut,Contact,University } from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

const items = [
  { title: "Home", url: "#", icon: Home },
  { title: "My Library", url: "#", icon: Inbox },
  { title: "Bacll", url: "#", icon: University},
  { title: "Contact Us", url: "#", icon: Contact },
  { title: "Settings", url: "#", icon: Settings },
];

export function AppSidebar() {
  return (
    <Sidebar 
      collapsible="icon" 
      className="top-[70px] h-[calc(100vh-70px)] border-r border-border bg-card dark:bg-[#09090b]"
    >
      <SidebarContent>
        <SidebarGroup>
          {/* Label disappears automatically when collapsed */}
          <SidebarGroupLabel className="text-muted-foreground/50">Application</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton 
                    asChild 
                    tooltip={item.title} // Shows title on hover when collapsed
                    className="hover:bg-primary/10 hover:text-primary transition-all duration-200 py-6"
                  >
                    <a href={item.url}>
                      <item.icon className="size-5" />
                      <span className="font-medium">{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="border-t border-border p-2">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton className="text-destructive hover:bg-destructive/10 hover:text-destructive transition-colors">
              <LogOut className="size-5" />
              <span>Logout</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}