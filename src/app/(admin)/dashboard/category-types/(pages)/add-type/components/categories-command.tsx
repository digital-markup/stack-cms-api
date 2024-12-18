/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { Check, ChevronsUpDown } from "lucide-react";
import React from "react";

interface CategoriesCommandProps {
  categories: any;
  className?: string;
}

function CategoriesCommand({ categories, className }: CategoriesCommandProps) {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("");
  return (
    <div className="w-full">
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            role="combobox"
            aria-expanded={open}
            className={cn("w-[200px] justify-between", className)}
          >
            {value
              ? categories.find((category: any) => category.id === value)?.name
              : "Select a Category..."}
            <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent
          className={cn(className !== null ? "w-[500px]" : "w-[200px] p-0")}
        > 
          <Command className="max-h-[360px] w-full">
            <CommandInput placeholder="Search framework..."/>
            <CommandList>
              <CommandEmpty>No framework found.</CommandEmpty>
              <CommandGroup>
                {categories.map((category: any) => (
                  <CommandItem
                    key={category.id}
                    value={category.id}
                    onSelect={(currentValue) => {
                      setValue(currentValue === value ? "" : currentValue);
                      setOpen(false);
                    }}
                  >
                    <Check
                      className={cn(
                        "mr-2 h-4 w-4 text-green-300",
                        value === category.id ? "opacity-100" : "opacity-0"
                      )}
                    />
                    {category.name}
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
    </div>
  );
}

export default CategoriesCommand;
