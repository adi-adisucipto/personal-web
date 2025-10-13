'use client';

import { MoonStar, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { IconButton } from "./icon-button";

function ThemeSwitcher() {
    const {theme, setTheme} = useTheme();
    const [mounted, setMounted] = useState(false);

    const switcher = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark');
    }

    useEffect(() => {
        setMounted(true)
    }, []);

    if(!mounted){
        return (
            <IconButton>
                <Sun/>
            </IconButton>
        )
    }
  return (
    <IconButton onClick={switcher}>
        {theme === 'dark' ? <Sun/> : <MoonStar/>}
    </IconButton>
  )
}

export default ThemeSwitcher
