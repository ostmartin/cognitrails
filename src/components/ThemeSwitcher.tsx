'use client'

import { useState, useEffect } from "react";
import { Button } from "@nextui-org/button";
import { useTheme } from "next-themes";

export const ThemeSwitcher = () => {
    const [mounted, setMounted] = useState(false);
    const { theme, setTheme } = useTheme();

    const onChangeTheme = () => {
        if (theme === 'light') {
            setTheme('dark')
        } else {
            setTheme('light')
        }
    }

    useEffect(() => {
        setMounted(true);
    }, [])

    if (!mounted) return null;

    return (
        <Button 
            onClick={onChangeTheme}
        >
            {theme === 'light' ? 'Dark mode' : 'Light mode'}
        </Button>
    )
}