'use client'

import { useState, useEffect } from "react";
import { Switch } from "@nextui-org/switch";
import { useTheme } from "next-themes";

import { SunFilledIcon, MoonFilledIcon } from 'components/icons';

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
        <Switch
            onChange={onChangeTheme}
            defaultSelected
            size="lg"
            color="primary"
            startContent={<SunFilledIcon size={20}/>}
            endContent={<MoonFilledIcon size={20}/>}
        />
    )
}