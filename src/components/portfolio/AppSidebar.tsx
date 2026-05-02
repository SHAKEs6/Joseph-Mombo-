import { Home, User, Briefcase, GraduationCap, Award, Mail, FileCheck } from "lucide-react";
import { NavLink, useLocation } from "react-router-dom";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
  SidebarFooter,
  useSidebar,
} from "@/components/ui/sidebar";

const sections = [
  { url: "/", title: "Home", icon: Home },
  { url: "/about", title: "About", icon: User },
  { url: "/services", title: "Services", icon: Briefcase },
  { url: "/experience", title: "Experience", icon: FileCheck },
  { url: "/education", title: "Education", icon: GraduationCap },
  { url: "/skills", title: "Skills", icon: Award },
  { url: "/contact", title: "Contact", icon: Mail },
];

export function AppSidebar() {
  const { state, setOpenMobile, isMobile } = useSidebar();
  const collapsed = state === "collapsed";
  const { pathname } = useLocation();

  const handleClick = () => {
    if (isMobile) setOpenMobile(false);
  };

  return (
    <Sidebar collapsible="icon" className="border-r border-sidebar-border">
      <SidebarHeader className="border-b border-sidebar-border p-4">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg gradient-accent font-serif text-lg font-bold text-accent-foreground">
            JM
          </div>
          {!collapsed && (
            <div className="overflow-hidden">
              <p className="font-serif text-sm font-bold text-sidebar-foreground leading-tight">Joseph Mombo</p>
              <p className="text-xs text-sidebar-foreground/60">Procurement Officer</p>
            </div>
          )}
        </div>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Navigation</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {sections.map((s) => (
                <SidebarMenuItem key={s.url}>
                  <SidebarMenuButton
                    asChild
                    tooltip={s.title}
                    isActive={pathname === s.url}
                  >
                    <NavLink to={s.url} onClick={handleClick}>
                      <s.icon className="h-4 w-4" />
                      <span>{s.title}</span>
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="border-t border-sidebar-border p-4">
        {!collapsed && (
          <p className="text-xs text-sidebar-foreground/60 leading-relaxed">
            Available for consulting & full-time roles.
          </p>
        )}
      </SidebarFooter>
    </Sidebar>
  );
}
