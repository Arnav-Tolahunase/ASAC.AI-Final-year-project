"use client";

import { Activity, LogOut, User, Sparkles } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { authClient, useSession } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function Header() {
  const { data: session, isPending, refetch } = useSession();
  const router = useRouter();

  const handleSignOut = async () => {
    const token = localStorage.getItem("bearer_token");
    const { error } = await authClient.signOut({
      fetchOptions: {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    });

    if (error?.code) {
      toast.error("Sign out failed");
    } else {
      localStorage.removeItem("bearer_token");
      refetch();
      toast.success("Signed out successfully");
      router.push("/");
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/40 bg-background/80 backdrop-blur-xl shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-3 group cursor-pointer">
            <div className="gradient-bg flex h-10 w-10 items-center justify-center rounded-lg shadow-md group-hover:shadow-lg group-hover:scale-105 transition-all">
              <span className="text-2xl font-bold text-white">A</span>
            </div>
            <div className="flex flex-col">
              <h1 className="text-xl font-bold tracking-tight flex items-center gap-1.5">
                ASAC.AI
                <Sparkles className="h-3.5 w-3.5 text-blue-500" />
              </h1>
              <p className="text-xs text-muted-foreground">
                Media Integrity Detection
              </p>
            </div>
          </div>
          
          <div className="flex items-center gap-3">
            <Badge variant="outline" className="gap-1.5 border-green-500/50 bg-green-500/10 text-green-600 shadow-sm">
              <Activity className="h-3 w-3 animate-pulse" />
              <span className="hidden sm:inline">System Online</span>
              <span className="sm:hidden">Online</span>
            </Badge>

            {isPending ? (
              <div className="h-9 w-9 animate-pulse rounded-full bg-muted" />
            ) : session?.user ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="relative h-9 w-9 rounded-full p-0 hover:ring-2 hover:ring-blue-500/50 transition-all">
                    <Avatar className="h-9 w-9">
                      <AvatarImage src={session.user.image || ""} alt={session.user.name} />
                      <AvatarFallback className="gradient-bg text-white">
                        {session.user.name?.charAt(0).toUpperCase() || "U"}
                      </AvatarFallback>
                    </Avatar>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56">
                  <DropdownMenuLabel>
                    <div className="flex flex-col space-y-1">
                      <p className="text-sm font-medium">{session.user.name}</p>
                      <p className="text-xs text-muted-foreground">{session.user.email}</p>
                    </div>
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={handleSignOut} className="text-destructive focus:text-destructive">
                    <LogOut className="mr-2 h-4 w-4" />
                    Sign Out
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <div className="flex items-center gap-2">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => router.push("/login")}
                  className="hover:bg-muted/80"
                >
                  Sign In
                </Button>
                <Button
                  size="sm"
                  className="gradient-bg text-white shadow-md hover:shadow-lg hover:opacity-90 transition-all"
                  onClick={() => router.push("/register")}
                >
                  Get Started
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}