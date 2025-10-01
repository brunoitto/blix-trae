import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import {
  BarChart3,
  Calendar,
  MessageSquare,
  Users,
  BookOpen,
  Smartphone,
  Settings,
  LayoutDashboard,
  ChevronDown,
  Bot,
} from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
  useSidebar,
} from "@/components/ui/sidebar";
import { cn } from "@/lib/utils";

const menuItems = [
  { title: "Dashboard", url: "/dashboard", icon: LayoutDashboard },
  { title: "CRM - Clientes", url: "/crm", icon: Users },
  { title: "Agenda", url: "/agenda", icon: Calendar },
  { title: "Base de Conhecimento", url: "/knowledge-base", icon: BookOpen },
  { title: "Whatsapp Agent", url: "/evolution-api", icon: Smartphone },
  { title: "Chats WhatsApp", url: "/chats", icon: MessageSquare },
  { title: "Métricas & Analytics", url: "/analytics", icon: BarChart3 },
  { title: "Configurações", url: "/settings", icon: Settings },
];

export function AppSidebar() {
  const { state } = useSidebar();
  const location = useLocation();
  const currentPath = location.pathname;
  const collapsed = state === "collapsed";

  const isActive = (path: string) => currentPath === path;

  return (
    <Sidebar
      className={cn(
        "border-r border-border/40 bg-gradient-to-b from-background/95 to-background/70 backdrop-blur-xl",
        collapsed ? "w-16" : "w-64"
      )}
      collapsible="icon"
    >
      <SidebarContent className="p-0">
        {/* Logo */}
        <div className="p-6 border-b border-border/40">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center">
              <Bot className="w-6 h-6 text-primary-foreground" />
            </div>
            {!collapsed && (
              <div>
                <h1 className="text-xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                  Blix4You
                </h1>
                <p className="text-xs text-muted-foreground">Infraestrutura de IA</p>
              </div>
            )}
          </div>
        </div>

        <SidebarGroup className="px-3 py-4">
          <SidebarGroupContent>
            <SidebarMenu className="space-y-2">
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild className="h-12">
                    <NavLink
                      to={item.url}
                      className={({ isActive }) =>
                        cn(
                          "flex items-center gap-3 px-3 py-3 rounded-xl transition-all duration-200 group",
                          "hover:bg-accent/50 hover:shadow-md hover:scale-[1.02]",
                          isActive
                            ? "bg-gradient-to-r from-primary/20 to-primary/10 border border-primary/20 text-primary shadow-lg"
                            : "text-muted-foreground hover:text-foreground"
                        )
                      }
                    >
                      <item.icon className={cn(
                        "w-5 h-5 transition-transform duration-200",
                        "group-hover:scale-110",
                        isActive(item.url) && "text-primary"
                      )} />
                      {!collapsed && (
                        <span className="font-medium text-sm">{item.title}</span>
                      )}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}