"use client";

import { DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { User2, ChevronUp, LogOutIcon } from "lucide-react";
import React from "react";
import { signOutAction } from "@/app/(auth-pages)/actions/actions";

function SideFooter() {
  const onSignOut = async () => {
    await signOutAction();
  };

  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <SidebarMenuButton>
              <User2 /> Username
              <ChevronUp className="ml-auto" />
            </SidebarMenuButton>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            side="top"
            className="w-[--radix-popper-anchor-width]"
          >
            <DropdownMenuItem>
              <span>Account</span>
            </DropdownMenuItem>
            <DropdownMenuItem
              className="bg-red-50 text-red-600 w-full cursor-pointer"
              onClick={onSignOut}
            >
              <span className="flex gap-x-2">
                <LogOutIcon />
                Sign out
              </span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarMenuItem>
    </SidebarMenu>
  );
}

export default SideFooter;
