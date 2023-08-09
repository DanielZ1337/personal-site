import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select";
import {Moon, Sun} from "lucide-react";
import {Button} from "@/components/ui/button";
import * as React from "react";

export default function ThemeSelector() {
    return (
        <Select>
            <SelectTrigger className="w-[180px]">
                <Button variant="outline" size="icon">
                    <Sun
                        className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"/>
                    <Moon
                        className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"/>
                    <span className="sr-only">Toggle theme</span>
                </Button>
            </SelectTrigger>
            <SelectContent>
                <SelectItem value="light">Light</SelectItem>
                <SelectItem value="dark">Dark</SelectItem>
                <SelectItem value="system">System</SelectItem>
            </SelectContent>
        </Select>
    )
}