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
import { Button } from "@/components/ui/button";
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
            <DropdownMenuItem>
              <Button
                variant={"ghost"}
                className="bg-red-50 text-red-600"
                onClick={onSignOut}
              >
                <LogOutIcon />
                Sign out
              </Button>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarMenuItem>
    </SidebarMenu>
  );
}

export default SideFooter;
