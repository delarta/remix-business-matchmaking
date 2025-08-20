import * as React from "react";
import { Link, useLocation } from "react-router";
import { Button } from "~/components/ui/button";
import { Heart, MessageCircle, Users, Bell, User, Handshake } from "lucide-react";
import { cn } from "~/lib/utils";

interface NavigationItem {
  id: string;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
  href: string;
  matchPaths?: string[]; // Additional paths that should show this tab as active
}

const navigationItems: NavigationItem[] = [
  {
    id: "discover",
    label: "Discover",
    icon: Handshake,
    href: "/discover",
    matchPaths: ["/buyer"],
  },
  {
    id: "chat",
    label: "Chat",
    icon: MessageCircle,
    href: "/chat",
  },
  {
    id: "matches",
    label: "Matches",
    icon: Users,
    href: "/matches",
  },
  {
    id: "notifications",
    label: "Notification",
    icon: Bell,
    href: "/notifications",
  },
  {
    id: "profile",
    label: "Profile",
    icon: User,
    href: "/profile",
  },
];

interface BottomNavigationProps {
  className?: string;
  activeTab?: string; // Override active tab detection
}

export function BottomNavigation({
  className,
  activeTab,
}: BottomNavigationProps) {
  const location = useLocation();

  const isActiveTab = (item: NavigationItem) => {
    // If activeTab is provided, use it
    if (activeTab) {
      return activeTab === item.id;
    }

    // Check exact path match
    if (location.pathname === item.href) {
      return true;
    }

    // Check additional match paths
    if (item.matchPaths) {
      return item.matchPaths.some((path) => location.pathname.startsWith(path));
    }

    return false;
  };

  return (
    <div className={cn("border-t border-neutral-200 bg-white", className)}>
      <div className="flex justify-around py-3">
        {navigationItems.map((item) => {
          const Icon = item.icon;
          const isActive = isActiveTab(item);

          return (
            <Button
              key={item.id}
              variant="ghost"
              asChild
              className={cn(
                "flex flex-col items-center gap-1 h-auto py-2 px-3",
                isActive ? "text-red-500" : "text-neutral-400 hover:text-neutral-600"
              )}
            >
              <Link to={item.href}>
                <Icon className="w-5 h-5" />
                <span className="text-xs">{item.label}</span>
              </Link>
            </Button>
          );
        })}
      </div>
    </div>
  );
}

// Alternative version with onClick handlers instead of navigation
interface BottomNavigationWithHandlersProps {
  className?: string;
  activeTab?: string;
  onTabChange?: (tabId: string) => void;
}

export function BottomNavigationWithHandlers({
  className,
  activeTab,
  onTabChange,
}: BottomNavigationWithHandlersProps) {
  return (
    <div className={cn("border-t border-neutral-200 bg-white", className)}>
      <div className="flex justify-around py-3">
        {navigationItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.id;

          return (
            <Button
              key={item.id}
              variant="ghost"
              onClick={() => onTabChange?.(item.id)}
              className={cn(
                "flex flex-col items-center gap-1 h-auto py-2 px-3",
                isActive ? "text-red-500" : "text-neutral-400 hover:text-neutral-600"
              )}
            >
              <Icon className="w-5 h-5" />
              <span className="text-xs">{item.label}</span>
            </Button>
          );
        })}
      </div>
    </div>
  );
}

// Hook for managing bottom navigation state
export function useBottomNavigation() {
  const location = useLocation();

  const getCurrentTab = () => {
    const currentItem = navigationItems.find((item) => {
      if (location.pathname === item.href) return true;
      if (item.matchPaths) {
        return item.matchPaths.some((path) =>
          location.pathname.startsWith(path)
        );
      }
      return false;
    });

    return currentItem?.id || "discover";
  };

  return {
    currentTab: getCurrentTab(),
    navigationItems,
  };
}
